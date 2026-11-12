// Speaker Invitation Letter Generator — APAC AI for Science DevFest 2026
// Reuses PROGRAM_ITEMS from data.js and attaches public timetable metadata without exposing speaker emails.

const EVENT_URL =
  'https://gdg.community.dev/events/details/google-gdg-ai-for-science-australia-presents-apac-ai-for-science-devfest/';
const CONTACT_EMAIL = 'gdgaiforscience@gmail.com';
const ORGANISER_NAME = 'Google Developer Groups (GDG) AI for Science';
const EVENT_NAME = 'APAC AI for Science DevFest 2026';
const SIGNATORY = 'GDG AI for Science Organizing Committee';
const REGIONAL_CHAPTERS = 'Australia, India, South Korea, Japan';

// Non-PII public schedule fields aligned with Program-DevFest2026-Timetable.csv
const SESSION_SCHEDULE_META = {
  s01: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '17:10 (-1d) - 17:40 (-1d) (California (PST, UTC-8))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '01:10 - 01:40',
    aedtTime: '12:10 - 12:40'
  },
  s03: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '09:40 - 10:10 (Shenzhen (CST, UTC+8))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '01:40 - 02:10',
    aedtTime: '12:40 - 13:10'
  },
  s04: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '13:10 - 13:40 (UTC+11 AEDT - Sydney)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '02:10 - 02:40',
    aedtTime: '13:10 - 13:40'
  },
  s05: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '12:40 - 13:10 (Brisbane (AEST, UTC+10))',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '02:40 - 03:10',
    aedtTime: '13:40 - 14:10'
  },
  s06: {
    fullFormat: 'Lightning Talk / Demo (10m)',
    localTime: '13:10 - 13:20 (Brisbane (AEST, UTC+10))',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '03:10 - 03:20',
    aedtTime: '14:10 - 14:20'
  },
  s07: {
    fullFormat: 'Lightning Talk / Demo (10m)',
    localTime: '12:20 - 12:30 (UTC+9:00 JST - Japan)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '03:20 - 03:30',
    aedtTime: '14:20 - 14:30'
  },
  s24: {
    fullFormat: 'Lightning Talk / Demo (10m)',
    localTime: '12:30 - 12:40 (UTC+9:00 JST - Japan)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '03:30 - 03:40',
    aedtTime: '14:30 - 14:40'
  },
  s08: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '09:30 - 10:00 (UTC+5:30 IST - India)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '04:00 - 04:30',
    aedtTime: '15:00 - 15:30'
  },
  s09: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '10:00 - 10:30 (UTC+5:30 IST - India)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '04:30 - 05:00',
    aedtTime: '15:30 - 16:00'
  },
  s10: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '10:30 - 11:00 (GIFT City, India (IST, UTC+5:30))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '05:00 - 05:30',
    aedtTime: '16:00 - 16:30'
  },
  s11: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '11:00 - 11:30 (UTC+5:30 IST - India)',
    deliveryMode: 'In-Person (At a local chapter hub)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '05:30 - 06:00',
    aedtTime: '16:30 - 17:00'
  },
  s12: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '11:30 - 12:00 (UTC+5:30 IST - India)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '06:00 - 06:30',
    aedtTime: '17:00 - 17:30'
  },
  s14: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '12:00 - 12:30 (UTC+5:30 IST - India)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '06:30 - 07:00',
    aedtTime: '17:30 - 18:00'
  },
  s16: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '09:20 - 09:50 (Finland (EET, UTC+2)) / 08:20 - 08:50 (Munich (CET, UTC+1))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '07:20 - 07:50',
    aedtTime: '18:20 - 18:50'
  },
  s15: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '08:50 - 09:20 (Berlin (CET, UTC+1))',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '07:50 - 08:20',
    aedtTime: '18:50 - 19:20'
  },
  s17: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '17:20 - 17:50 (UTC+9:00 KST - Korea)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '08:20 - 08:50',
    aedtTime: '19:20 - 19:50'
  },
  s35: {
    fullFormat: 'Lightning Talk / Demo (10m)',
    localTime: '14:20 - 14:30 (UTC+5:30 IST - India)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '08:50 - 09:00',
    aedtTime: '19:50 - 20:00'
  },
  s18: {
    fullFormat: 'Workshop (60m)',
    localTime: '10:00 - 11:00 (Cottbus, Germany (CET, UTC+1))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '09:00 - 10:00',
    aedtTime: '20:00 - 21:00'
  },
  s21: {
    fullFormat: 'Lightning Talk / Demo (10m)',
    localTime: '15:30 - 15:40 (UTC+5:30 IST - India)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 1',
    dateLabel: 'Friday, 27 November 2026',
    utcTime: '10:00 - 10:10',
    aedtTime: '21:00 - 21:10'
  },
  s22: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '12:00 - 12:30 (UTC+11 AEDT - Sydney)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '01:00 - 01:30',
    aedtTime: '12:00 - 12:30'
  },
  s23: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '12:30 - 13:00 (UTC+11 AEDT - Sydney)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '01:30 - 02:00',
    aedtTime: '12:30 - 13:00'
  },
  s28: {
    fullFormat: 'Workshop (60m)',
    localTime: '11:00 - 12:00 (UTC+9:00 KST - Korea)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '02:00 - 03:00',
    aedtTime: '13:00 - 14:00'
  },
  s26: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '08:30 - 09:00 (UTC+5:30 IST - India)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '03:00 - 03:30',
    aedtTime: '14:00 - 14:30'
  },
  s27: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '09:00 - 09:30 (UTC+5:30 IST - India)',
    deliveryMode: 'In-Person (At a local chapter hub)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '03:30 - 04:00',
    aedtTime: '14:30 - 15:00'
  },
  s29: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '09:30 - 10:00 (UTC+5:30 IST - India)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '04:00 - 04:30',
    aedtTime: '15:00 - 15:30'
  },
  s30: {
    fullFormat: 'Lightning Talk / Demo (10m)',
    localTime: '11:30 - 11:40 (Vietnam (ICT, UTC+7))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '04:30 - 04:40',
    aedtTime: '15:30 - 15:40'
  },
  s32: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '10:30 - 11:00 (UTC+5:30 IST - India)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '05:00 - 05:30',
    aedtTime: '16:00 - 16:30'
  },
  s13: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '11:00 - 11:30 (UTC+5:30 IST - India)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '05:30 - 06:00',
    aedtTime: '16:30 - 17:00'
  },
  s31: {
    fullFormat: 'Lightning Talk / Demo (10m)',
    localTime: '17:00 - 17:10 (UTC+11 AEDT - Sydney)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '06:00 - 06:10',
    aedtTime: '17:00 - 17:10'
  },
  s33: {
    fullFormat: 'Workshop (60m)',
    localTime: '11:40 - 12:40 (UTC+5:30 IST - India)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '06:10 - 07:10',
    aedtTime: '17:10 - 18:10'
  },
  s34: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '12:40 - 13:10 (UTC+5:30 IST - India)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '07:10 - 07:40',
    aedtTime: '18:10 - 18:40'
  },
  s36: {
    fullFormat: 'Workshop (60m)',
    localTime: '08:40 - 09:40 (Morocco (UTC+1))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '07:40 - 08:40',
    aedtTime: '18:40 - 19:40'
  },
  s37: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '14:10 - 14:40 (UTC+5:30 IST - India)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '08:40 - 09:10',
    aedtTime: '19:40 - 20:10'
  },
  s38: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '10:10 - 10:40 (Morocco (UTC+1))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '09:10 - 09:40',
    aedtTime: '20:10 - 20:40'
  },
  s39: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '12:00 - 12:30 (Kigali, Rwanda (CAT, UTC+2))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '10:00 - 10:30',
    aedtTime: '21:00 - 21:30'
  },
  s44: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '16:00 - 16:30 (UTC+5:30 IST - India)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '10:30 - 11:00',
    aedtTime: '21:30 - 22:00'
  },
  s40: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '12:00 - 12:30 (Tunisia (CET, UTC+1))',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '11:00 - 11:30',
    aedtTime: '22:00 - 22:30'
  },
  s20: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '17:00 - 17:30 (UTC+5:30 IST - India)',
    deliveryMode: 'Open to Both (Virtual & In-Person)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '11:30 - 12:00',
    aedtTime: '22:30 - 23:00'
  },
  s19: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '17:30 - 18:00 (UTC+5:30 IST - India)',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '12:00 - 12:30',
    aedtTime: '23:00 - 23:30'
  },
  s41: {
    fullFormat: 'Talk (25m + 5m Q&A)',
    localTime: '13:30 - 14:00 (Casablanca, Morocco (UTC+1))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '12:30 - 13:00',
    aedtTime: '23:30 - 00:00 (+1d)'
  },
  s43: {
    fullFormat: 'Lightning Talk / Demo (10m)',
    localTime: '08:00 - 08:10 (Boston, MA (EST, UTC-5))',
    deliveryMode: 'Virtual / Online (Streamed globally)',
    dayLabel: 'Day 2',
    dateLabel: 'Saturday, 28 November 2026',
    utcTime: '13:00 - 13:10',
    aedtTime: '00:00 (+1d) - 00:10 (+1d)'
  }
};

const SESSIONS = (typeof PROGRAM_ITEMS !== 'undefined' ? PROGRAM_ITEMS : [])
  .filter(item => item.kind === 'session')
  .map(item => ({
    ...item,
    meta: SESSION_SCHEDULE_META[item.id] || null
  }));

const TEMPLATE_FILE = 'invitation_letter_template.md';

// Offline fallback used only when letter.html is opened over file:// (where fetch is blocked by CORS).
// When served over HTTP/HTTPS (e.g., GitHub Pages), invitation_letter_template.md is fetched live.
const FALLBACK_TEMPLATE_MD = [
  '# Google Developer Groups (GDG) AI for Science',
  '',
  '**APAC AI for Science DevFest 2026 — Official Speaker Invitation Letter**  ',
  '*Issued for Workplace Approval and Institutional Documentation*',
  '',
  '---',
  '',
  '**Date:** [Date of Issue]  ',
  '**Reference:** `GDG-AIFS-DF26-INV-[ID]`  ',
  '**Contact:** [gdgaiforscience@gmail.com](mailto:gdgaiforscience@gmail.com)  ',
  '',
  '**To:**  ',
  '**[Speaker Full Name]**  ',
  '[Designation / Role], [Institution / Affiliation]  ',
  'Email: [Speaker Email]',
  '',
  '---',
  '',
  'Dear [Speaker Full Name],',
  '',
  'On behalf of **Google Developer Groups (GDG) AI for Science**, the Organizing Committee is pleased to extend this formal invitation confirming your selection as an **Invited Speaker** at the inaugural **APAC AI for Science DevFest 2026**, taking place on **27–28 November 2026**.',
  '',
  'Following program review of submissions to our Call for Speakers, your proposal has been accepted into the official conference program. Your confirmed session details are summarized below:',
  '',
  '| Field | Confirmed Details |',
  '| :--- | :--- |',
  '| **Event** | APAC AI for Science DevFest 2026 (Inaugural International Edition) |',
  '| **Organizer** | Google Developer Groups (GDG) AI for Science (Regional Chapters: Australia, India, South Korea, Japan) |',
  '| **Session Title** | [Session Title] |',
  '| **Format & Duration** | [Session Format] ([Duration] minutes) |',
  '| **Track** | [Session Track] |',
  '| **Scheduled Date & Time** | [Day] · [Date, e.g., Friday, 27 November 2026] · [HH:MM - HH:MM] UTC ([HH:MM - HH:MM] AEDT) |',
  '| **Speaker Local Time** | [HH:MM - HH:MM (Speaker Timezone)] |',
  '| **Delivery Mode** | [Delivery Mode] |',
  '| **Event Registration Page** | [GDG AI for Science Event Page](https://gdg.community.dev/events/details/google-gdg-ai-for-science-australia-presents-apac-ai-for-science-devfest/) |',
  '',
  'GDG AI for Science is an international community of over 10,000 researchers, developers, and practitioners dedicated to advancing scientific discovery through artificial intelligence. APAC AI for Science DevFest 2026 brings together researchers, engineers, and practitioners across academia and industry via global virtual broadcasts (UTC+12 to UTC+5:30) and regional GDG chapter hubs. This letter is provided to support your workplace approval and official institutional documentation; invited speaker participation carries no registration fee.',
  '',
  'Upon request, the Organizing Committee will provide an official digital certificate of recognition confirming your speaker contribution following the conclusion of the event. Should your employer or institution require any additional verification of your invitation or scheduled participation, please contact us at [gdgaiforscience@gmail.com](mailto:gdgaiforscience@gmail.com).',
  '',
  'We sincerely appreciate your contribution to our inaugural program and look forward to welcoming you to APAC AI for Science DevFest 2026.',
  '',
  'Yours sincerely,',
  '',
  '**GDG AI for Science Organizing Committee**  ',
  'APAC AI for Science DevFest 2026 · Google Developer Groups (GDG) AI for Science  ',
  'Email: [gdgaiforscience@gmail.com](mailto:gdgaiforscience@gmail.com)  ',
  'Regional Chapters: Australia, India, South Korea, Japan',
  ''
].join('\n');

const appState = {
  mode: 'template', // 'template' | 'speaker' | 'custom'
  activeSession: null,
  filteredMatches: SESSIONS.slice(),
  highlightIdx: -1,
  feedbackTimer: null,
  templateSource: FALLBACK_TEMPLATE_MD,
  templateLoadedFromFile: false
};

async function loadMarkdownTemplate() {
  if (typeof fetch !== 'function') return;
  try {
    const res = await fetch(TEMPLATE_FILE, { cache: 'no-store' });
    if (res && res.ok) {
      const text = await res.text();
      if (text && text.trim()) {
        appState.templateSource = text;
        appState.templateLoadedFromFile = true;
      }
    }
  } catch (err) {
    // Keep FALLBACK_TEMPLATE_MD when opened directly via file://
  }
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeUrl(url) {
  const trimmed = String(url || '').trim();
  if (/^(https?:\/\/|mailto:|#)/i.test(trimmed)) return trimmed;
  return '#';
}

function formatTodayIssueDate() {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date());
  } catch (e) {
    return '12 November 2026';
  }
}

function getTemplateDefaults() {
  return {
    speaker: '[Speaker Full Name]',
    designation: '[Designation / Role]',
    affiliation: '[Institution / Affiliation]',
    email: '[Speaker Email]',
    sessionTitle: '[Session Title]',
    format: '[Session Format] ([Duration] minutes)',
    track: '[Session Track]',
    schedule: '[Day] · [Date, e.g., Friday, 27 November 2026] · [HH:MM - HH:MM] UTC ([HH:MM - HH:MM] AEDT)',
    localTime: '[HH:MM - HH:MM (Speaker Timezone)]',
    delivery: '[Delivery Mode]',
    issueDate: '[Date of Issue]',
    refId: 'GDG-AIFS-DF26-INV-[ID]'
  };
}

function formatDurationString(session) {
  const fullFormat = session.meta?.fullFormat || session.format || 'Session';
  const mins = session.mins;
  if (!mins) return fullFormat;
  if (fullFormat.includes(`${mins}m`)) return fullFormat;
  return `${fullFormat} · ${mins} min total`;
}

function formatSessionUtcAndAedt(session) {
  if (session.meta) {
    const m = session.meta;
    return `${m.dayLabel} · ${m.dateLabel} · ${m.utcTime} UTC (${m.aedtTime} AEDT)`;
  }
  const dayLabel = session.day === 1 ? 'Day 1 · Friday, 27 November 2026' : 'Day 2 · Saturday, 28 November 2026';
  return `${dayLabel} · ${session.aedt} AEDT`;
}

function formatTimeForZone(startIso, endIso, tzChoice) {
  const s = new Date(startIso);
  const e = new Date(endIso);
  let tz = tzChoice;
  if (tz === 'LOCAL') {
    try {
      tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Australia/Sydney';
    } catch (err) {
      tz = 'Australia/Sydney';
    }
  }
  try {
    const timeFmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    const dateFmt = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    const tzNameFmt = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      timeZoneName: 'short'
    });
    const tzAbbr = (tzNameFmt.formatToParts(s).find(p => p.type === 'timeZoneName') || {}).value || tz;
    return `${timeFmt.format(s)} - ${timeFmt.format(e)} (${dateFmt.format(s)}, ${tz.replace(/_/g, ' ')}, ${tzAbbr})`;
  } catch (err) {
    return '';
  }
}

function computeLocalTimeField(session, tzChoice) {
  if (!session) return '[HH:MM - HH:MM (Speaker Timezone)]';
  if (tzChoice === 'PROGRAMMED') {
    return session.meta?.localTime || `${session.aedt} (AEDT)`;
  }
  return formatTimeForZone(session.startUtc, session.endUtc, tzChoice) || session.meta?.localTime || '';
}

function readFormValues() {
  return {
    speaker: document.getElementById('fieldSpeaker').value.trim(),
    designation: document.getElementById('fieldDesignation').value.trim(),
    affiliation: document.getElementById('fieldAffiliation').value.trim(),
    email: document.getElementById('fieldEmail').value.trim(),
    sessionTitle: document.getElementById('fieldTitle').value.trim(),
    format: document.getElementById('fieldFormat').value.trim(),
    track: document.getElementById('fieldTrack').value.trim(),
    schedule: document.getElementById('fieldSchedule').value.trim(),
    localTime: document.getElementById('fieldLocalTime').value.trim(),
    delivery: document.getElementById('fieldDelivery').value.trim(),
    issueDate: document.getElementById('fieldIssueDate').value.trim(),
    refId: document.getElementById('fieldRefId').value.trim()
  };
}

function writeFormValues(vals) {
  document.getElementById('fieldSpeaker').value = vals.speaker;
  document.getElementById('fieldDesignation').value = vals.designation;
  document.getElementById('fieldAffiliation').value = vals.affiliation;
  document.getElementById('fieldEmail').value = vals.email;
  document.getElementById('fieldTitle').value = vals.sessionTitle;
  document.getElementById('fieldFormat').value = vals.format;
  document.getElementById('fieldTrack').value = vals.track;
  document.getElementById('fieldSchedule').value = vals.schedule;
  document.getElementById('fieldLocalTime').value = vals.localTime;
  document.getElementById('fieldDelivery').value = vals.delivery;
  document.getElementById('fieldIssueDate').value = vals.issueDate;
  document.getElementById('fieldRefId').value = vals.refId;
}

function formatSalutationName(name) {
  return (name || '[Speaker Full Name]').replace(/ & /g, ' and ');
}

function updateModeBadge() {
  const badge = document.getElementById('modeBadge');
  badge.classList.remove('mode-speaker', 'mode-custom');
  if (appState.mode === 'speaker' && appState.activeSession) {
    badge.textContent = `Confirmed Speaker · ${appState.activeSession.id.toUpperCase()}`;
    badge.classList.add('mode-speaker');
  } else if (appState.mode === 'custom') {
    badge.textContent = 'Custom / Unlisted Speaker';
    badge.classList.add('mode-custom');
  } else {
    badge.textContent = 'Template Mode';
  }
}

function prepareTemplateText(templateMd, v, useTokens) {
  const speakerDisplay = v.speaker || '[Speaker Full Name]';
  const roleLine = [v.designation, v.affiliation].filter(Boolean).join(', ');
  const fullRefId = v.refId || 'GDG-AIFS-DF26-INV-[ID]';
  const shortRefId = fullRefId.startsWith('GDG-AIFS-DF26-INV-')
    ? fullRefId.slice('GDG-AIFS-DF26-INV-'.length)
    : fullRefId;

  const tokenValues = {
    ISSUE_DATE: v.issueDate || formatTodayIssueDate(),
    REF_ID: fullRefId,
    SHORT_REF_ID: shortRefId,
    SPEAKER: speakerDisplay,
    SALUTATION_NAME: formatSalutationName(speakerDisplay),
    ROLE_LINE: roleLine,
    DESIGNATION: v.designation || '',
    AFFILIATION: v.affiliation || '',
    EMAIL: v.email || '',
    SESSION_TITLE: v.sessionTitle || '[Session Title]',
    FORMAT_DURATION: v.format || '[Session Format]',
    TRACK: v.track || '',
    SCHEDULE: v.schedule || '[Scheduled Date & Time]',
    LOCAL_TIME: v.localTime || '[Speaker Local Time]',
    DELIVERY: v.delivery || '[Delivery Mode]'
  };

  const val = key => (useTokens ? `@@TPL:${key}@@` : tokenValues[key]);

  const rawLines = String(templateMd || '').replace(/\r\n/g, '\n').split('\n');
  const outLines = [];

  for (const rawLine of rawLines) {
    let line = rawLine;

    if (line.includes('[Session Track]') && /^\s*\|.*\|\s*$/.test(line) && !v.track) {
      continue;
    }

    if (line.includes('[Designation / Role], [Institution / Affiliation]')) {
      if (!roleLine) continue;
      line = line.replaceAll('[Designation / Role], [Institution / Affiliation]', val('ROLE_LINE'));
    } else if (line.includes('[Designation / Role]') || line.includes('[Institution / Affiliation]')) {
      if (!v.designation && !v.affiliation) continue;
      line = line
        .replaceAll('[Designation / Role]', val('DESIGNATION'))
        .replaceAll('[Institution / Affiliation]', val('AFFILIATION'));
    }

    if (line.includes('[Speaker Email]')) {
      if (!v.email && (/^\s*(\*\*)?Email(\*\*)?\s*:/i.test(line) || line.trim() === '[Speaker Email]')) {
        continue;
      }
      line = line.replaceAll('[Speaker Email]', val('EMAIL'));
    }

    line = line.replaceAll('[Date of Issue]', val('ISSUE_DATE'));
    line = line.replaceAll('GDG-AIFS-DF26-INV-[ID]', val('REF_ID'));
    line = line.replaceAll('[ID]', val('SHORT_REF_ID'));

    if (/^\s*(Dear|Hello|Hi)\b/i.test(line)) {
      line = line.replaceAll('[Speaker Full Name]', val('SALUTATION_NAME'));
    } else {
      line = line.replaceAll('[Speaker Full Name]', val('SPEAKER'));
    }

    line = line
      .replaceAll('[Session Title]', val('SESSION_TITLE'))
      .replaceAll('[Session Format] ([Duration] minutes)', val('FORMAT_DURATION'))
      .replaceAll('[Session Format]', val('FORMAT_DURATION'))
      .replaceAll('[Duration] minutes', '')
      .replaceAll('[Duration]', '')
      .replaceAll('[Session Track]', val('TRACK'))
      .replaceAll(
        '[Day] · [Date, e.g., Friday, 27 November 2026] · [HH:MM - HH:MM] UTC ([HH:MM - HH:MM] AEDT)',
        val('SCHEDULE')
      )
      .replaceAll('[HH:MM - HH:MM (Speaker Timezone)]', val('LOCAL_TIME'))
      .replaceAll('[Delivery Mode]', val('DELIVERY'));

    outLines.push(line);
  }

  return { text: outLines.join('\n'), tokenValues };
}

function renderInlineMarkdownToHtml(rawText, tokenValues, options = {}) {
  const inlinePattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*)/g;
  let html = '';
  let lastIdx = 0;
  let match;

  while ((match = inlinePattern.exec(rawText)) !== null) {
    if (match.index > lastIdx) {
      html += escapeHtml(rawText.slice(lastIdx, match.index));
    }
    if (match[2] !== undefined && match[3] !== undefined) {
      const href = sanitizeUrl(match[3]);
      const inner = renderInlineMarkdownToHtml(match[2], tokenValues, options);
      const targetAttr = /^mailto:/i.test(href) ? '' : ' target="_blank" rel="noopener noreferrer"';
      html += `<a href="${escapeHtml(href)}"${targetAttr}>${inner}</a>`;
    } else if (match[4] !== undefined) {
      html += `<strong>${renderInlineMarkdownToHtml(match[4], tokenValues, options)}</strong>`;
    } else if (match[5] !== undefined) {
      const inner = renderInlineMarkdownToHtml(match[5], tokenValues, options);
      html += options.plainCode ? `<span>${inner}</span>` : `<code class="letter-code">${inner}</code>`;
    } else if (match[6] !== undefined) {
      html += `<em>${renderInlineMarkdownToHtml(match[6], tokenValues, options)}</em>`;
    }
    lastIdx = inlinePattern.lastIndex;
  }

  if (lastIdx < rawText.length) {
    html += escapeHtml(rawText.slice(lastIdx));
  }

  return html.replace(/@@TPL:([A-Z_]+)@@/g, (_, key) => escapeHtml(tokenValues[key] ?? ''));
}

function splitTableCells(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map(c => c.trim());
}

function isTableSeparatorLine(line) {
  return /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(line);
}

function parseMarkdownBlocks(lines) {
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (!trimmed) {
      i += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push({ type: 'hr' });
      i += 1;
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({ type: 'heading', level: headingMatch[1].length, text: headingMatch[2] });
      i += 1;
      continue;
    }

    if (trimmed.startsWith('|') && i + 1 < lines.length && isTableSeparatorLine(lines[i + 1])) {
      const headers = splitTableCells(lines[i]);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(splitTableCells(lines[i]));
        i += 1;
      }
      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i += 1;
      }
      blocks.push({ type: 'list', ordered: false, items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      blocks.push({ type: 'list', ordered: true, items });
      continue;
    }

    const paraLines = [];
    while (i < lines.length) {
      const cur = lines[i];
      const curTrim = cur.trim();
      if (
        !curTrim ||
        /^---+$/.test(curTrim) ||
        /^#{1,3}\s+/.test(curTrim) ||
        /^[-*]\s+/.test(curTrim) ||
        /^\d+\.\s+/.test(curTrim) ||
        (curTrim.startsWith('|') && i + 1 < lines.length && isTableSeparatorLine(lines[i + 1]))
      ) {
        break;
      }
      paraLines.push(cur);
      i += 1;
    }
    if (paraLines.length) {
      blocks.push({ type: 'paragraph', lines: paraLines });
    }
  }

  return blocks;
}

function parseTemplateDocument(tokenizedText) {
  const rawSections = [];
  let bucket = [];
  for (const line of tokenizedText.split('\n')) {
    if (/^\s*---\s*$/.test(line)) {
      rawSections.push(bucket);
      bucket = [];
    } else {
      bucket.push(line);
    }
  }
  rawSections.push(bucket);

  let orgName = ORGANISER_NAME;
  let eventTitle = EVENT_NAME;
  let docTitle = 'OFFICIAL SPEAKER INVITATION LETTER';
  let docSubtitle = '';
  let extraHeaderLines = [];
  let metaLines = [];
  let recipientLines = [];
  let bodyLines = [];

  if (rawSections.length >= 3) {
    for (const line of rawSections[0]) {
      const t = line.trim();
      if (!t) continue;
      if (t.startsWith('# ')) {
        orgName = t.slice(2).trim();
      } else if (/^\*\*(.+)\*\*$/.test(t) && (t.includes('—') || t.includes(' - '))) {
        const inner = t.replace(/^\*\*|\*\*$/g, '').trim();
        const parts = inner.split(/\s+—\s+|\s+-\s+/);
        if (parts.length >= 2) {
          eventTitle = parts[0].trim();
          docTitle = parts.slice(1).join(' — ').trim();
        } else {
          docTitle = inner;
        }
      } else if (/^\*([^*]+)\*$/.test(t) && !docSubtitle) {
        docSubtitle = t.slice(1, -1).trim();
      } else {
        extraHeaderLines.push(t);
      }
    }

    let inRecipient = false;
    for (const line of rawSections[1]) {
      const t = line.trim();
      if (!t) continue;
      if (/^\*\*To:\*\*/i.test(t) || /^To:\s*$/i.test(t)) {
        inRecipient = true;
        recipientLines.push(t);
      } else if (inRecipient) {
        recipientLines.push(t);
      } else {
        metaLines.push(t);
      }
    }

    rawSections.slice(2).forEach((sec, idx) => {
      if (idx > 0) bodyLines.push('---');
      bodyLines.push(...sec);
    });
  } else {
    bodyLines = tokenizedText.split('\n');
  }

  const allBodyBlocks = parseMarkdownBlocks(bodyLines);
  let signature = null;
  let bodyBlocks = allBodyBlocks;

  const closingRe = /^(Yours sincerely|Sincerely|Yours faithfully|Best regards|Warm regards|Kind regards)\s*,?\s*$/i;
  for (let idx = allBodyBlocks.length - 1; idx >= 0; idx -= 1) {
    const blk = allBodyBlocks[idx];
    if (blk.type === 'paragraph' && blk.lines.length && closingRe.test(blk.lines[0].trim())) {
      const leadLine = blk.lines[0].trim();
      const detailLines = [];
      if (blk.lines.length > 1) {
        detailLines.push(...blk.lines.slice(1).map(l => l.trim()).filter(Boolean));
      }
      for (let j = idx + 1; j < allBodyBlocks.length; j += 1) {
        if (allBodyBlocks[j].type === 'paragraph') {
          detailLines.push(...allBodyBlocks[j].lines.map(l => l.trim()).filter(Boolean));
        }
      }
      signature = { leadLine, detailLines };
      bodyBlocks = allBodyBlocks.slice(0, idx);
      break;
    }
  }

  let chaptersText = REGIONAL_CHAPTERS;
  if (signature) {
    const remainingDetails = [];
    for (const dLine of signature.detailLines) {
      const chMatch = dLine.match(/^Regional Chapters:\s*(.+)$/i);
      if (chMatch) {
        chaptersText = chMatch[1].trim();
      } else {
        remainingDetails.push(dLine);
      }
    }
    signature.detailLines = remainingDetails;
  }

  let footerEmail = CONTACT_EMAIL;
  for (const mLine of metaLines) {
    const emailMatch = mLine.match(/mailto:([^\s)]+)/i);
    if (emailMatch) {
      footerEmail = emailMatch[1];
      break;
    }
  }

  return {
    orgName,
    eventTitle,
    docTitle,
    docSubtitle,
    extraHeaderLines,
    metaLines,
    recipientLines,
    bodyBlocks,
    signature,
    chaptersText,
    footerEmail
  };
}

function renderLetterPreview() {
  const sheetInner = document.getElementById('letterSheetInner');
  if (!sheetInner) return;

  const v = readFormValues();
  const { text, tokenValues } = prepareTemplateText(appState.templateSource, v, true);
  const doc = parseTemplateDocument(text);

  const metaHtml = doc.metaLines
    .map(line => `<div>${renderInlineMarkdownToHtml(line, tokenValues, { plainCode: true })}</div>`)
    .join('');

  let recipientHtml = '';
  if (doc.recipientLines.length) {
    const labelRaw = doc.recipientLines[0];
    const items = doc.recipientLines.slice(1);
    const labelHtml = renderInlineMarkdownToHtml(labelRaw.replace(/^\*\*|\*\*$/g, ''), tokenValues);
    const itemsHtml = items
      .map((line, idx) => {
        const cls = idx === 0 ? 'recipient-name' : /^Email:/i.test(line) ? 'recipient-email' : 'recipient-role';
        return `<div class="${cls}">${renderInlineMarkdownToHtml(line, tokenValues)}</div>`;
      })
      .join('');
    recipientHtml = `
      <div class="recipient-block">
        <div class="recipient-label">${labelHtml}</div>
        ${itemsHtml}
      </div>
    `;
  }

  const bodyHtml = doc.bodyBlocks
    .map(block => {
      if (block.type === 'hr') {
        return '<hr class="letter-hr" />';
      }
      if (block.type === 'heading') {
        const tag = block.level <= 2 ? 'h2' : 'h3';
        const cls = block.level <= 2 ? 'letter-h2' : 'letter-h3';
        return `<${tag} class="${cls}">${renderInlineMarkdownToHtml(block.text, tokenValues)}</${tag}>`;
      }
      if (block.type === 'list') {
        const tag = block.ordered ? 'ol' : 'ul';
        const itemsHtml = block.items
          .map(item => `<li>${renderInlineMarkdownToHtml(item, tokenValues)}</li>`)
          .join('');
        return `<${tag} class="letter-list">${itemsHtml}</${tag}>`;
      }
      if (block.type === 'table') {
        if (block.headers.length === 2) {
          const rowsHtml = block.rows
            .map(row => {
              const keyRaw = (row[0] || '').replace(/^\*\*|\*\*$/g, '');
              const valRaw = row[1] || '';
              const keyHtml = renderInlineMarkdownToHtml(keyRaw, tokenValues);
              let valHtml = renderInlineMarkdownToHtml(valRaw, tokenValues);
              if (/session title/i.test(keyRaw) && !/^\*\*/.test(valRaw.trim())) {
                valHtml = `<strong>${valHtml}</strong>`;
              }
              return `<tr><th>${keyHtml}</th><td>${valHtml}</td></tr>`;
            })
            .join('');
          return `<div class="session-summary-box"><table class="session-summary-table"><tbody>${rowsHtml}</tbody></table></div>`;
        }
        const thHtml = block.headers
          .map(h => `<th>${renderInlineMarkdownToHtml(h.replace(/^\*\*|\*\*$/g, ''), tokenValues)}</th>`)
          .join('');
        const trHtml = block.rows
          .map(
            row =>
              `<tr>${row.map(c => `<td>${renderInlineMarkdownToHtml(c, tokenValues)}</td>`).join('')}</tr>`
          )
          .join('');
        return `<div class="session-summary-box"><table class="session-summary-table letter-table-plain"><thead><tr>${thHtml}</tr></thead><tbody>${trHtml}</tbody></table></div>`;
      }
      const joinedLines = block.lines
        .map(l => renderInlineMarkdownToHtml(l.replace(/\s{2,}$/, ''), tokenValues))
        .join('<br />');
      return `<p class="letter-p">${joinedLines}</p>`;
    })
    .join('');

  let signatureHtml = '';
  if (doc.signature) {
    const detailsHtml = doc.signature.detailLines
      .map((line, idx) => {
        const cls = idx === 0 && /^\*\*.*\*\*$/.test(line) ? 'signature-name' : 'signature-meta';
        const clean = cls === 'signature-name' ? line.replace(/^\*\*|\*\*$/g, '') : line;
        return `<div class="${cls}">${renderInlineMarkdownToHtml(clean, tokenValues)}</div>`;
      })
      .join('');
    signatureHtml = `
      <div class="signature-block">
        <p class="letter-p signature-lead">${renderInlineMarkdownToHtml(doc.signature.leadLine, tokenValues)}</p>
        ${detailsHtml}
      </div>
    `;
  }

  const orgDisplay = doc.orgName;

  const extraHeaderHtml = doc.extraHeaderLines
    .map(l => `<div class="doc-subtitle">${renderInlineMarkdownToHtml(l, tokenValues)}</div>`)
    .join('');

  sheetInner.innerHTML = `
    <header class="letterhead">
      <div class="letterhead-brand">
        <img src="ai-for-science_beaker.png" alt="AI for Science logo" class="letterhead-logo" />
        <div>
          <div class="letterhead-pill">GDG AI FOR SCIENCE</div>
          <div class="letterhead-event">${renderInlineMarkdownToHtml(doc.eventTitle, tokenValues)}</div>
          <div class="letterhead-org">${renderInlineMarkdownToHtml(orgDisplay, tokenValues)}</div>
        </div>
      </div>

      <div class="letterhead-meta">
        ${metaHtml}
      </div>
    </header>

    <hr class="letterhead-rule" />

    <div class="doc-heading">
      <div class="doc-title">${escapeHtml(doc.docTitle.toUpperCase())}</div>
      ${doc.docSubtitle ? `<div class="doc-subtitle">${renderInlineMarkdownToHtml(doc.docSubtitle, tokenValues)}</div>` : ''}
      ${extraHeaderHtml}
    </div>

    ${recipientHtml}
    ${bodyHtml}
    ${signatureHtml}

    <footer class="sheet-footer">
      <span>GDG AI for Science · Chapters: ${escapeHtml(doc.chaptersText)}</span>
      <a href="mailto:${escapeHtml(doc.footerEmail)}">${escapeHtml(doc.footerEmail)}</a>
    </footer>
  `;

  updateModeBadge();
}

function selectTemplateMode() {
  appState.mode = 'template';
  appState.activeSession = null;
  document.getElementById('speakerSelect').value = '__TEMPLATE__';
  document.getElementById('speakerSearch').value = '';
  document.getElementById('clearSpeakerSearchBtn').classList.remove('visible');
  writeFormValues(getTemplateDefaults());
  renderLetterPreview();
  syncUrlQuery('');
}

function selectCustomMode(prefillName = '') {
  appState.mode = 'custom';
  appState.activeSession = null;
  document.getElementById('speakerSelect').value = '__CUSTOM__';
  writeFormValues({
    speaker: prefillName || '',
    designation: '',
    affiliation: '',
    email: '',
    sessionTitle: '',
    format: 'Talk (25m + 5m Q&A) · 30 min total',
    track: '',
    schedule: 'Day 1 · Friday, 27 November 2026 · [HH:MM - HH:MM] UTC ([HH:MM - HH:MM] AEDT)',
    localTime: '',
    delivery: 'Virtual / Online (Streamed globally)',
    issueDate: formatTodayIssueDate(),
    refId: 'GDG-AIFS-DF26-INV-GUEST'
  });
  renderLetterPreview();
  syncUrlQuery('');
  document.getElementById('fieldSpeaker').focus();
}

function selectSpeakerSession(session, updateSearchBox = true) {
  if (!session) {
    selectTemplateMode();
    return;
  }
  appState.mode = 'speaker';
  appState.activeSession = session;
  document.getElementById('speakerSelect').value = session.id;
  if (updateSearchBox) {
    document.getElementById('speakerSearch').value = session.speaker;
    document.getElementById('clearSpeakerSearchBtn').classList.toggle('visible', true);
  }
  const tzChoice = document.getElementById('tzSelect').value;
  writeFormValues({
    speaker: session.speaker,
    designation: session.designation || '',
    affiliation: session.affiliation || '',
    email: '',
    sessionTitle: session.title,
    format: formatDurationString(session),
    track: (session.tracks || []).join(', '),
    schedule: formatSessionUtcAndAedt(session),
    localTime: computeLocalTimeField(session, tzChoice),
    delivery: session.meta?.deliveryMode || 'Virtual / Online (Streamed globally)',
    issueDate: formatTodayIssueDate(),
    refId: `GDG-AIFS-DF26-INV-${session.id.toUpperCase()}`
  });
  renderLetterPreview();
  syncUrlQuery(session.slug);
}

function populateSpeakerSelect() {
  const select = document.getElementById('speakerSelect');
  const day1 = SESSIONS.filter(s => s.day === 1);
  const day2 = SESSIONS.filter(s => s.day === 2);

  select.innerHTML = '';

  const tplOpt = document.createElement('option');
  tplOpt.value = '__TEMPLATE__';
  tplOpt.textContent = 'Blank Official Template (Placeholders)';
  select.appendChild(tplOpt);

  const customOpt = document.createElement('option');
  customOpt.value = '__CUSTOM__';
  customOpt.textContent = 'Custom / Unlisted Speaker...';
  select.appendChild(customOpt);

  [
    { label: `Day 1 · Friday, 27 Nov 2026 (${day1.length})`, items: day1 },
    { label: `Day 2 · Saturday, 28 Nov 2026 (${day2.length})`, items: day2 }
  ].forEach(group => {
    const optGroup = document.createElement('optgroup');
    optGroup.label = group.label;
    group.items.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = `${s.speaker} — ${s.affiliation || s.designation || s.id.toUpperCase()}`;
      optGroup.appendChild(opt);
    });
    select.appendChild(optGroup);
  });
}

function filterMatchingSessions(query) {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return SESSIONS.slice();
  const terms = trimmed.split(/\s+/);
  return SESSIONS.filter(s => {
    const haystack = [
      s.id,
      s.slug,
      s.speaker,
      s.designation,
      s.affiliation,
      s.title
    ]
      .join(' ')
      .toLowerCase();
    return terms.every(t => haystack.includes(t));
  });
}

function openDropdown(matches) {
  const dropdown = document.getElementById('speakerDropdown');
  const input = document.getElementById('speakerSearch');
  appState.filteredMatches = matches;
  appState.highlightIdx = matches.length ? 0 : -1;

  dropdown.innerHTML = '';
  if (matches.length === 0) {
    const li = document.createElement('li');
    li.className = 'combobox-empty';
    li.textContent = 'No matching speaker in timetable. Click "Use custom / unlisted speaker" below to draft manually.';
    dropdown.appendChild(li);
  } else {
    matches.forEach((session, idx) => {
      const li = document.createElement('li');
      li.className = `combobox-option${idx === 0 ? ' active' : ''}`;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      li.dataset.id = session.id;

      const nameDiv = document.createElement('div');
      nameDiv.className = 'combobox-opt-name';
      nameDiv.textContent = session.speaker;

      const subDiv = document.createElement('div');
      subDiv.className = 'combobox-opt-sub';
      const aff = session.affiliation || session.designation || '';
      subDiv.textContent = `${session.id.toUpperCase()} · Day ${session.day}${aff ? ' · ' + aff : ''}`;

      li.appendChild(nameDiv);
      li.appendChild(subDiv);
      li.addEventListener('mousedown', ev => {
        ev.preventDefault();
        selectSpeakerSession(session, true);
        closeDropdown();
      });
      dropdown.appendChild(li);
    });
  }

  dropdown.hidden = false;
  input.setAttribute('aria-expanded', 'true');
}

function closeDropdown() {
  const dropdown = document.getElementById('speakerDropdown');
  const input = document.getElementById('speakerSearch');
  dropdown.hidden = true;
  input.setAttribute('aria-expanded', 'false');
  appState.highlightIdx = -1;
}

function updateDropdownHighlight(nextIdx) {
  const options = document.querySelectorAll('#speakerDropdown .combobox-option');
  if (!options.length) return;
  const clamped = (nextIdx + options.length) % options.length;
  appState.highlightIdx = clamped;
  options.forEach((el, idx) => {
    const isCurrent = idx === clamped;
    el.classList.toggle('active', isCurrent);
    el.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    if (isCurrent) {
      el.scrollIntoView({ block: 'nearest' });
    }
  });
}

function buildMarkdownText() {
  const v = readFormValues();
  const { text } = prepareTemplateText(appState.templateSource, v, false);
  return text.endsWith('\n') ? text : `${text}\n`;
}

function showFeedback(message) {
  const el = document.getElementById('actionFeedback');
  el.textContent = message;
  if (appState.feedbackTimer) clearTimeout(appState.feedbackTimer);
  appState.feedbackTimer = setTimeout(() => {
    el.textContent = '';
  }, 3000);
}

function slugify(str) {
  return String(str || 'speaker')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'speaker';
}

function syncUrlQuery(slug) {
  try {
    const url = new URL(window.location.href);
    if (slug) {
      url.searchParams.set('speaker', slug);
    } else {
      url.searchParams.delete('speaker');
    }
    history.replaceState(null, '', url.toString());
  } catch (e) { }
}

function findSessionFromUrl() {
  let target = '';
  try {
    target = new URLSearchParams(window.location.search).get('speaker') || '';
  } catch (e) { }
  if (!target && window.location.hash) {
    target = window.location.hash.slice(1);
  }
  const needle = target.trim().toLowerCase();
  if (!needle) return null;

  return (
    SESSIONS.find(s => s.slug.toLowerCase() === needle || s.id.toLowerCase() === needle) ||
    filterMatchingSessions(needle)[0] ||
    null
  );
}

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  return Promise.resolve();
}

function wireEvents() {
  const searchInput = document.getElementById('speakerSearch');
  const clearBtn = document.getElementById('clearSpeakerSearchBtn');
  const speakerSelect = document.getElementById('speakerSelect');
  const tzSelect = document.getElementById('tzSelect');

  searchInput.addEventListener('focus', () => {
    openDropdown(filterMatchingSessions(searchInput.value));
  });

  searchInput.addEventListener('input', () => {
    clearBtn.classList.toggle('visible', searchInput.value.length > 0);
    openDropdown(filterMatchingSessions(searchInput.value));
  });

  searchInput.addEventListener('keydown', ev => {
    const dropdown = document.getElementById('speakerDropdown');
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      if (dropdown.hidden) {
        openDropdown(filterMatchingSessions(searchInput.value));
      } else {
        updateDropdownHighlight(appState.highlightIdx + 1);
      }
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      if (!dropdown.hidden) {
        updateDropdownHighlight(appState.highlightIdx - 1);
      }
    } else if (ev.key === 'Enter') {
      if (!dropdown.hidden && appState.filteredMatches.length > 0) {
        ev.preventDefault();
        const chosen = appState.filteredMatches[Math.max(0, appState.highlightIdx)];
        selectSpeakerSession(chosen, true);
        closeDropdown();
      }
    } else if (ev.key === 'Escape') {
      closeDropdown();
    }
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(closeDropdown, 120);
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.remove('visible');
    searchInput.focus();
    openDropdown(SESSIONS.slice());
  });

  speakerSelect.addEventListener('change', () => {
    const val = speakerSelect.value;
    if (val === '__TEMPLATE__') {
      selectTemplateMode();
    } else if (val === '__CUSTOM__') {
      selectCustomMode(searchInput.value.trim());
    } else {
      const match = SESSIONS.find(s => s.id === val);
      selectSpeakerSession(match, true);
    }
  });

  document.getElementById('resetTemplateBtn').addEventListener('click', selectTemplateMode);
  document.getElementById('customSpeakerBtn').addEventListener('click', () => {
    selectCustomMode(searchInput.value.trim());
  });

  tzSelect.addEventListener('change', () => {
    if (appState.mode === 'speaker' && appState.activeSession) {
      document.getElementById('fieldLocalTime').value = computeLocalTimeField(
        appState.activeSession,
        tzSelect.value
      );
      renderLetterPreview();
    }
  });

  [
    'fieldSpeaker',
    'fieldDesignation',
    'fieldAffiliation',
    'fieldEmail',
    'fieldTitle',
    'fieldFormat',
    'fieldTrack',
    'fieldSchedule',
    'fieldLocalTime',
    'fieldDelivery',
    'fieldIssueDate',
    'fieldRefId'
  ].forEach(id => {
    document.getElementById(id).addEventListener('input', renderLetterPreview);
  });

  document.getElementById('printPdfBtn').addEventListener('click', () => {
    const prevTitle = document.title;
    const v = readFormValues();
    const fileSlug = appState.activeSession
      ? `invitation_${appState.activeSession.id}_${appState.activeSession.slug}`
      : `invitation_${slugify(v.speaker)}`;
    document.title = fileSlug;
    window.print();
    setTimeout(() => {
      document.title = prevTitle;
    }, 500);
  });

  document.getElementById('downloadMdBtn').addEventListener('click', () => {
    const v = readFormValues();
    const md = buildMarkdownText();
    const fileName = appState.activeSession
      ? `invitation_${appState.activeSession.id}_${appState.activeSession.slug}.md`
      : `invitation_${slugify(v.speaker)}.md`;
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showFeedback(`Downloaded ${fileName}`);
  });

  document.getElementById('copyMdBtn').addEventListener('click', () => {
    copyText(buildMarkdownText())
      .then(() => showFeedback('Copied Markdown letter to clipboard'))
      .catch(() => showFeedback('Copy failed — please select text manually'));
  });

  document.getElementById('copyLinkBtn').addEventListener('click', () => {
    copyText(window.location.href)
      .then(() => showFeedback('Copied direct generator URL'))
      .catch(() => showFeedback('Could not copy URL'));
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  populateSpeakerSelect();
  wireEvents();

  const initialSpeaker = findSessionFromUrl();
  if (initialSpeaker) {
    selectSpeakerSession(initialSpeaker, true);
  } else {
    selectTemplateMode();
  }

  await loadMarkdownTemplate();
  if (appState.templateLoadedFromFile) {
    renderLetterPreview();
  }
});
