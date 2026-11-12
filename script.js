const TOTAL_SESSIONS = PROGRAM_ITEMS.filter(i => i.kind === 'session').length;

const state = {
  query: '',
  day: 'ALL',
  track: 'ALL',
  format: 'ALL',
  tz: 'LOCAL',
  savedOnly: false,
  allExpanded: false,
  activeId: null,
  copiedId: null,
  expandedIds: new Set(),
  savedIds: new Set()
};
let copyResetTimer = null;

// Persist saved bookmarks cleanly inside iframe if localStorage is permitted
try {
  const raw = localStorage.getItem('devfest_aiforscience_2026_saved_v3');
  if (raw) {
    // Ignore bookmarks for sessions that are no longer in the program
    const validIds = new Set(PROGRAM_ITEMS.filter(i => i.kind === 'session').map(i => i.id));
    JSON.parse(raw).forEach(id => {
      if (validIds.has(id)) state.savedIds.add(id);
    });
  }
} catch (e) { }

function saveBookmarks() {
  try {
    localStorage.setItem('devfest_aiforscience_2026_saved_v3', JSON.stringify([...state.savedIds]));
  } catch (e) { }
  document.getElementById('savedCountBadge').textContent = `(${state.savedIds.size})`;
}

function populateFormatOptions() {
  const formatSelect = document.getElementById('formatSelect');
  if (!formatSelect) return;

  const sessions = PROGRAM_ITEMS.filter(i => i.kind === 'session');
  const labelMap = {
    'Talk': 'Talks',
    'Workshop': 'Workshops',
    'Lightning / Demo': 'Lightning & Demos',
    'Interactive Session': 'Interactive Sessions'
  };
  const preferredOrder = ['Talk', 'Workshop', 'Lightning / Demo', 'Interactive Session'];
  const presentFormats = [...new Set(sessions.map(s => s.format).filter(Boolean))];
  presentFormats.sort((a, b) => {
    const ia = preferredOrder.indexOf(a);
    const ib = preferredOrder.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  let optsHtml = `<option value="ALL">All Formats (${sessions.length})</option>`;
  presentFormats.forEach(fmt => {
    const matching = sessions.filter(s => s.format === fmt);
    const minsList = [...new Set(matching.map(s => s.mins).filter(m => typeof m === 'number' && m > 0))].sort((a, b) => a - b);
    let durStr = '';
    if (minsList.length === 1) {
      durStr = ` — ${minsList[0]}m`;
    } else if (minsList.length > 1) {
      durStr = ` — ${minsList[0]}–${minsList[minsList.length - 1]}m`;
    }
    const baseLabel = labelMap[fmt] || fmt;
    optsHtml += `<option value="${escapeHtml(fmt)}">${escapeHtml(baseLabel)}${durStr} (${matching.length})</option>`;
  });

  formatSelect.innerHTML = optsHtml;
  formatSelect.value = state.format;
}

function getResolvedTimeZone() {
  if (state.tz === 'LOCAL') {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Australia/Sydney';
    } catch (e) {
      return 'Australia/Sydney';
    }
  }
  return state.tz;
}

function formatTimeRange(startIso, endIso) {
  const tz = getResolvedTimeZone();
  const s = new Date(startIso);
  const e = new Date(endIso);
  try {
    const timeFmt = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    const dateFmt = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    const tzShortFmt = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      timeZoneName: 'short'
    });
    const parts = tzShortFmt.formatToParts(s);
    const tzAbbr = (parts.find(p => p.type === 'timeZoneName') || {}).value || '';
    return {
      range: s.getTime() === e.getTime() ? timeFmt.format(s) : `${timeFmt.format(s)} – ${timeFmt.format(e)}`,
      sub: `${dateFmt.format(s)}${tzAbbr ? ' · ' + tzAbbr : ''}`
    };
  } catch (err) {
    return { range: '', sub: '' };
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatInlineMarkdown(str) {
  return escapeHtml(str)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--google-blue)">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
}

function highlightText(htmlStr, query) {
  if (!query) return htmlStr;
  const terms = query.trim().split(/\s+/).filter(t => t.length >= 2);
  if (!terms.length) return htmlStr;
  const pattern = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  return htmlStr.replace(/(<[^>]+>|&(?:amp|lt|gt|quot);)|([\s\S]+?(?=<|&(?:amp|lt|gt|quot);|$))/g, (m, skip, txt) =>
    skip ? skip : txt.replace(regex, '<mark>$1</mark>')
  );
}

function formatRichAbstract(text, query) {
  const bulletRe = /^(\s*(?:[-•]\s+|\*\s+|-\s*(?=[A-Z])|\d+[.)]\s+))/;
  const paragraphs = String(text || '').split(/\n\s*\n/);
  return paragraphs.map(block => {
    const lines = block.trim().split('\n');
    const isBulletBlock = lines.length > 1 && lines.every(l => bulletRe.test(l));
    if (isBulletBlock) {
      const lis = lines.map(l => {
        const cleanLine = l.replace(bulletRe, '');
        return `<li>${highlightText(formatInlineMarkdown(cleanLine), query)}</li>`;
      }).join('');
      return `<ul>${lis}</ul>`;
    }
    const isHeaderThenBullets = lines.length > 2 && !bulletRe.test(lines[0]) && lines.slice(1).every(l => bulletRe.test(l));
    if (isHeaderThenBullets) {
      const hdr = `<p>${highlightText(formatInlineMarkdown(lines[0].trim()), query)}</p>`;
      const lis = lines.slice(1).map(l => {
        const cleanLine = l.replace(bulletRe, '');
        return `<li>${highlightText(formatInlineMarkdown(cleanLine), query)}</li>`;
      }).join('');
      return `${hdr}<ul>${lis}</ul>`;
    }
    const html = formatInlineMarkdown(block.trim()).replace(/\n/g, '<br>');
    return `<p>${highlightText(html, query)}</p>`;
  }).join('');
}

function getFormatClass(fmt) {
  if (fmt === 'Workshop') return 'fmt-workshop';
  if (fmt === 'Talk') return 'fmt-talk';
  if (fmt === 'Interactive Session') return 'fmt-custom';
  return 'fmt-lightning';
}

function matchesFilters(item) {
  if (item.kind !== 'session') {
    // Show schedule breaks only when browsing full unfiltered schedule
    if (state.query || state.format !== 'ALL' || state.savedOnly) {
      return false;
    }
    if (state.day !== 'ALL' && String(item.day) !== state.day) {
      return false;
    }
    return true;
  }

  if (state.day !== 'ALL' && String(item.day) !== state.day) return false;
  if (state.savedOnly && !state.savedIds.has(item.id)) return false;
  if (state.format !== 'ALL' && item.format !== state.format) return false;

  if (state.query) {
    const terms = state.query.toLowerCase().trim().split(/\s+/);
    const haystack = [
      item.title,
      item.speaker,
      item.affiliation,
      item.designation,
      item.abstract,
      item.bio,
      item.format,
      (item.tracks || []).join(' ')
    ].join(' ').toLowerCase();
    return terms.every(t => haystack.includes(t));
  }

  return true;
}

function render() {
  const container = document.getElementById('programContainer');
  const filtered = PROGRAM_ITEMS.filter(matchesFilters);
  const sessionCount = filtered.filter(i => i.kind === 'session').length;

  // Update summary & reset button visibility
  const hasActiveFilters = state.query || state.day !== 'ALL' || state.format !== 'ALL' || state.savedOnly;
  document.getElementById('resetFiltersBtn').style.display = hasActiveFilters ? 'inline-block' : 'none';
  document.getElementById('resultsSummary').innerHTML =
    sessionCount === TOTAL_SESSIONS && !hasActiveFilters
      ? `Showing all <strong>${TOTAL_SESSIONS}</strong> sessions`
      : `Showing <strong>${sessionCount}</strong> of ${TOTAL_SESSIONS} sessions`;

  if (sessionCount === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>No matching sessions found</h3>
        <p>Try broadening your search terms or clearing active format filters.</p>
        <button class="btn-text" onclick="resetAllFilters()">Reset all filters</button>
      </div>
    `;
    return;
  }

  let html = '';
  let currentDay = null;

  filtered.forEach(item => {
    if (item.day !== currentDay) {
      if (currentDay !== null) html += `</section>`;
      currentDay = item.day;
      const dayTitle = item.day === 1
        ? 'Day 1 — Friday, 27 November 2026'
        : 'Day 2 — Saturday, 28 November 2026';
      const daySub = `${PROGRAM_ITEMS.filter(i => i.kind === 'session' && i.day === item.day).length} Confirmed Sessions`;
      html += `
        <section class="day-section">
          <div class="day-banner">
            <h2>${dayTitle}</h2>
            <span>${daySub}</span>
          </div>
      `;
    }

    const tInfo = formatTimeRange(item.startUtc, item.endUtc);

    if (item.kind !== 'session') {
      const icon = item.kind === 'break' ? '☕' : (item.kind === 'open' ? '🎬' : '🏁');
      html += `
        <div class="marker-row">
          <span class="marker-time">${escapeHtml(tInfo.range || item.aedt)}</span>
          <span>${icon} ${escapeHtml(item.title)}</span>
        </div>
      `;
      return;
    }

    const isExpanded = state.allExpanded || state.expandedIds.has(item.id);
    const isSaved = state.savedIds.has(item.id);
    const isTargeted = state.activeId === item.id;
    const isCopied = state.copiedId === item.id;

    const titleHtml = highlightText(escapeHtml(item.title), state.query);
    const speakerHtml = highlightText(escapeHtml(item.speaker), state.query);
    const affText = item.affiliation
      ? (item.designation && !item.affiliation.toLowerCase().includes(item.designation.toLowerCase())
        ? `${item.designation}, ${item.affiliation}`
        : item.affiliation)
      : item.designation;
    const affHtml = affText ? highlightText(escapeHtml(affText), state.query) : '';

    const plainAbstract = (item.abstract || '')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '$1')
      .replace(/\*\*/g, '')
      .replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1$2')
      .replace(/\s+/g, ' ')
      .trim();
    const previewPlain = escapeHtml(plainAbstract);
    const previewHtml = highlightText(previewPlain, state.query);
    const fullAbstractHtml = item.abstract ? formatRichAbstract(item.abstract, state.query) : '';

    const allLinks = [
      ...(item.resourceLinks || []).map(l => ({ ...l, prefix: '📄 ' })),
      ...(item.speakerLinks || []).map(l => ({ ...l, prefix: '🔗 ' }))
    ];
    const linksHtml = allLinks.length
      ? `<div class="links-row">${allLinks.map(l =>
        `<a class="ext-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">${l.prefix}${escapeHtml(l.label)} ↗</a>`
      ).join('')}</div>`
      : '';

    const bioHtml = item.bio
      ? `<div class="bio-box">
           <div class="bio-label">About the Speaker</div>
           <div>${highlightText(formatInlineMarkdown(item.bio), state.query).replace(/\n\n+/g, '<br><br>')}</div>
         </div>`
      : '';

    const hasExpandableDetails = Boolean(fullAbstractHtml || linksHtml || bioHtml);
    const detailsSectionHtml = (previewHtml || hasExpandableDetails)
      ? `
            <div class="abstract-wrap">
              ${previewHtml ? `<div class="abstract-preview">${previewHtml}</div>` : ''}
              ${hasExpandableDetails ? `
              <div class="details-panel">
                ${fullAbstractHtml ? `<div class="abstract-full">${fullAbstractHtml}</div>` : ''}
                ${linksHtml}
                ${bioHtml}
              </div>` : ''}
            </div>
            ${hasExpandableDetails ? `
            <div class="card-footer-actions">
              <button class="toggle-btn" onclick="toggleCard('${item.id}')">
                ${isExpanded ? 'Hide full abstract ▲' : (item.bio && fullAbstractHtml ? 'Read full abstract & speaker bio ▼' : (item.bio ? 'Read speaker bio ▼' : 'Read full abstract ▼'))}
              </button>
            </div>` : ''}
      `
      : '';

    html += `
      <article class="session-card ${isExpanded ? 'expanded' : ''} ${isTargeted ? 'targeted' : ''} ${isSaved ? 'bookmarked' : ''}" id="${escapeHtml(item.slug)}" data-session-id="${item.id}">
        <div class="card-grid">
          <div class="time-col">
            <div>
              <div class="time-primary">${escapeHtml(tInfo.range || item.aedt)}</div>
              <div class="time-date-sub">${escapeHtml(tInfo.sub)}</div>
            </div>
            <span class="format-badge ${getFormatClass(item.format)}">${escapeHtml(item.format)} · ${item.mins}m</span>
          </div>

          <div class="content-col">
            <div class="card-top-row">
              <h3 class="session-title" ${hasExpandableDetails ? `onclick="toggleCard('${item.id}')"` : ''}>${titleHtml}</h3>
              <div class="card-top-actions">
                <a
                  href="#${escapeHtml(item.slug)}"
                  class="link-btn ${isTargeted ? 'active' : ''} ${isCopied ? 'copied' : ''}"
                  onclick="shareSession('${item.id}', event)"
                  title="Copy direct link to this session"
                  aria-label="Copy direct link to this session"
                >
                  ${isCopied
        ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Copied</span>`
        : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
      }
                </a>
                <button
                  class="bookmark-btn ${isSaved ? 'active' : ''}"
                  onclick="toggleBookmark('${item.id}', event)"
                  title="${isSaved ? 'Remove from saved sessions' : 'Save session'}"
                  aria-label="Bookmark session"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>

            <div class="speaker-line">
              <span class="speaker-name">${speakerHtml}</span>
              ${affHtml ? `<span>·</span><span class="speaker-aff">${affHtml}</span>` : ''}
            </div>
            ${detailsSectionHtml}
          </div>
        </div>
      </article>
    `;
  });

  if (currentDay !== null) html += `</section>`;
  container.innerHTML = html;
}

function findSessionByTarget(rawTarget) {
  if (!rawTarget) return null;
  let decoded = rawTarget;
  try {
    decoded = decodeURIComponent(rawTarget);
  } catch (e) { }
  const cleaned = decoded.replace(/^#/, '').split(':~:')[0].trim().toLowerCase();
  if (!cleaned) return null;
  return PROGRAM_ITEMS.find(i =>
    i.kind === 'session' && (
      i.slug === cleaned ||
      i.id.toLowerCase() === cleaned ||
      `card-${i.id.toLowerCase()}` === cleaned
    )
  ) || null;
}

function scrollToSessionCard(slug, smooth) {
  requestAnimationFrame(() => {
    const el = document.getElementById(slug);
    if (!el) return;
    const sticky = document.querySelector('.controls-wrapper');
    const offset = (sticky ? sticky.offsetHeight : 96) + 16;
    const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset);
    window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
  });
}

function clearFilterControls() {
  state.query = '';
  state.day = 'ALL';
  state.format = 'ALL';
  state.savedOnly = false;

  document.getElementById('searchInput').value = '';
  document.getElementById('clearSearchBtn').classList.remove('visible');
  document.getElementById('formatSelect').value = 'ALL';
  document.getElementById('savedFilterBtn').classList.remove('active');

  document.querySelectorAll('.day-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.day === 'ALL');
  });
}

function applyDeepLinkFromUrl(smooth) {
  let target = window.location.hash ? window.location.hash.slice(1) : '';
  if (!target) {
    try {
      target = new URLSearchParams(window.location.search).get('session') || '';
    } catch (e) { }
  }
  const item = findSessionByTarget(target);
  if (!item) return null;

  if (!matchesFilters(item)) {
    clearFilterControls();
  }
  state.activeId = item.id;
  state.expandedIds.add(item.id);
  render();
  scrollToSessionCard(item.slug, smooth);
  return item;
}

function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  fallbackCopy(text);
  return Promise.resolve();
}

function fallbackCopy(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  } catch (e) { }
}

window.shareSession = function (id, ev) {
  if (ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }
  const item = PROGRAM_ITEMS.find(i => i.kind === 'session' && i.id === id);
  if (!item) return;

  state.activeId = item.id;
  state.expandedIds.add(item.id);
  state.copiedId = item.id;

  const baseUrl = window.location.href.split('#')[0];
  const shareUrl = `${baseUrl}#${item.slug}`;
  try {
    history.replaceState(null, '', `#${item.slug}`);
  } catch (e) {
    window.location.hash = item.slug;
  }

  copyTextToClipboard(shareUrl);
  render();

  if (copyResetTimer) clearTimeout(copyResetTimer);
  copyResetTimer = setTimeout(() => {
    if (state.copiedId === item.id) {
      state.copiedId = null;
      render();
    }
  }, 2000);
};

window.toggleCard = function (id) {
  if (state.allExpanded) {
    state.allExpanded = false;
    PROGRAM_ITEMS.forEach(i => {
      if (i.kind === 'session' && i.id !== id) state.expandedIds.add(i.id);
    });
    state.expandedIds.delete(id);
    document.getElementById('expandAllBtn').textContent = 'Expand all abstracts';
  } else if (state.expandedIds.has(id)) {
    state.expandedIds.delete(id);
  } else {
    state.expandedIds.add(id);
  }
  render();
};

window.toggleBookmark = function (id, ev) {
  ev.stopPropagation();
  if (state.savedIds.has(id)) {
    state.savedIds.delete(id);
  } else {
    state.savedIds.add(id);
  }
  saveBookmarks();
  render();
};

window.resetAllFilters = function () {
  clearFilterControls();
  state.activeId = null;
  render();
};

// Wire up interactive controls
document.addEventListener('DOMContentLoaded', () => {
  // Update local timezone label with detected city/code
  try {
    const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (userTz) {
      const localOpt = document.querySelector('#tzSelect option[value="LOCAL"]');
      localOpt.textContent = `Local Time (${userTz.replace(/_/g, ' ')})`;
    }
  } catch (e) { }

  populateFormatOptions();
  saveBookmarks();

  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', e => {
    state.query = e.target.value;
    clearBtn.classList.toggle('visible', state.query.length > 0);
    render();
  });

  clearBtn.addEventListener('click', () => {
    state.query = '';
    searchInput.value = '';
    clearBtn.classList.remove('visible');
    searchInput.focus();
    render();
  });

  document.getElementById('formatSelect').addEventListener('change', e => {
    state.format = e.target.value;
    render();
  });

  document.getElementById('tzSelect').addEventListener('change', e => {
    state.tz = e.target.value;
    render();
  });

  document.querySelectorAll('.day-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.day = btn.dataset.day;
      document.querySelectorAll('.day-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
  });

  const savedBtn = document.getElementById('savedFilterBtn');
  savedBtn.addEventListener('click', () => {
    state.savedOnly = !state.savedOnly;
    savedBtn.classList.toggle('active', state.savedOnly);
    render();
  });

  const expandAllBtn = document.getElementById('expandAllBtn');
  expandAllBtn.addEventListener('click', () => {
    state.allExpanded = !state.allExpanded;
    state.expandedIds.clear();
    expandAllBtn.textContent = state.allExpanded ? 'Collapse all abstracts' : 'Expand all abstracts';
    render();
  });

  document.getElementById('resetFiltersBtn').addEventListener('click', window.resetAllFilters);
  window.addEventListener('hashchange', () => applyDeepLinkFromUrl(true));

  render();
  const initialTarget = applyDeepLinkFromUrl(false);
  if (initialTarget) {
    window.addEventListener('load', () => {
      if (state.activeId === initialTarget.id) {
        scrollToSessionCard(initialTarget.slug, false);
      }
    }, { once: true });
  }
});
