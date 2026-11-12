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
  '',
  '---',
  '',
  '**Date:** [Date of Issue]  ',
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
  '| **Event** | APAC AI for Science DevFest 2026 |',
  '| **Organizer** | Google Developer Groups (GDG) AI for Science |',
  '| **Session Title** | [Session Title] |',
  '| **Format & Duration** | [Session Format] ([Duration] minutes) |',
  '| **Scheduled Date & Time** | [Day] · [Date, e.g., Friday, 27 November 2026] · [HH:MM - HH:MM] **UTC** |',
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

const LOGO_FILE = 'ai-for-science_beaker.png';

const appState = {
  mode: 'template', // 'template' | 'speaker' | 'custom'
  activeSession: null,
  filteredMatches: SESSIONS.slice(),
  highlightIdx: -1,
  feedbackTimer: null,
  templateSource: FALLBACK_TEMPLATE_MD,
  templateLoadedFromFile: false,
  logoBytes: null
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

async function loadLogoBytes() {
  if (appState.logoBytes || typeof fetch !== 'function') return;
  try {
    const res = await fetch(LOGO_FILE);
    if (res && res.ok && typeof res.arrayBuffer === 'function') {
      const buf = await res.arrayBuffer();
      if (buf && buf.byteLength > 0) {
        appState.logoBytes = new Uint8Array(buf);
      }
    }
  } catch (err) {
    // Logo embedding skipped when opened directly via file://
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

  const schedStr = v.schedule || '[Scheduled Date & Time]';
  const meta = appState.activeSession?.meta;
  const isTplSchedule = schedStr.includes('[Day]') || schedStr.includes('[HH:MM - HH:MM]');
  const schedParts = schedStr.split(/\s+·\s+/);
  const utcMatch = schedStr.match(/(\d{2}:\d{2}\s*-\s*\d{2}:\d{2})\s*(?:\*\*)?UTC/);
  const aedtMatch = schedStr.match(/(\d{2}:\d{2}\s*-\s*\d{2}:\d{2})\s*(?:\*\*)?AEDT/);

  const dayLabel = isTplSchedule
    ? '[Day]'
    : ((schedParts.length >= 2 && schedParts[0]) || meta?.dayLabel || '[Day]');
  const dateLabel = isTplSchedule
    ? '[Date, e.g., Friday, 27 November 2026]'
    : ((schedParts.length >= 2 && schedParts[1]) || meta?.dateLabel || '[Date, e.g., Friday, 27 November 2026]');
  const utcTime = isTplSchedule
    ? '[HH:MM - HH:MM]'
    : ((utcMatch && utcMatch[1]) || meta?.utcTime || '[HH:MM - HH:MM]');
  const aedtTime = isTplSchedule
    ? '[HH:MM - HH:MM]'
    : ((aedtMatch && aedtMatch[1]) || meta?.aedtTime || '[HH:MM - HH:MM]');

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
    SCHEDULE: schedStr,
    DAY_LABEL: dayLabel,
    DATE_LABEL: dateLabel,
    UTC_TIME: utcTime,
    AEDT_TIME: aedtTime,
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
      .replaceAll('[Day]', val('DAY_LABEL'))
      .replaceAll('[Date, e.g., Friday, 27 November 2026]', val('DATE_LABEL'))
      .replace(/\[HH:MM - HH:MM\](\s*\**AEDT\**)/g, (_, suffix) => `${val('AEDT_TIME')}${suffix}`)
      .replaceAll('[HH:MM - HH:MM]', val('UTC_TIME'))
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

function getOutputFileStem(v) {
  return appState.activeSession
    ? `invitation_${appState.activeSession.id}_${appState.activeSession.slug}`
    : `invitation_${slugify(v.speaker)}`;
}

function escapeXml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i += 1) {
    let c = i;
    for (let j = 0; j < 8; j += 1) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i += 1) {
    c = CRC32_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

/**
 * Package named Uint8Array/string entries into a standard ZIP archive (STORE mode).
 */
function buildZipStore(entries) {
  const encoder = new TextEncoder();
  const parts = [];
  const centralDir = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.name);
    const dataBytes = typeof entry.data === 'string' ? encoder.encode(entry.data) : entry.data;
    const crc = crc32(dataBytes);

    const localHeader = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(localHeader.buffer);
    lv.setUint32(0, 0x04034b50, true);
    lv.setUint16(4, 20, true);
    lv.setUint16(6, 0x0800, true);
    lv.setUint16(8, 0, true);
    lv.setUint16(10, 0, true);
    lv.setUint16(12, 0x5421, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, dataBytes.length, true);
    lv.setUint32(22, dataBytes.length, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(centralHeader.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 0x0800, true);
    cv.setUint16(10, 0, true);
    cv.setUint16(12, 0, true);
    cv.setUint16(14, 0x5421, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, dataBytes.length, true);
    cv.setUint32(24, dataBytes.length, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);

    parts.push(localHeader, dataBytes);
    centralDir.push(centralHeader);
    offset += localHeader.length + dataBytes.length;
  }

  let cdSize = 0;
  for (const cd of centralDir) cdSize += cd.length;

  const eocd = new Uint8Array(22);
  const ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, entries.length, true);
  ev.setUint16(10, entries.length, true);
  ev.setUint32(12, cdSize, true);
  ev.setUint32(16, offset, true);
  ev.setUint16(20, 0, true);

  let totalLen = offset + cdSize + eocd.length;
  const zipBytes = new Uint8Array(totalLen);
  let pos = 0;
  for (const p of parts) {
    zipBytes.set(p, pos);
    pos += p.length;
  }
  for (const cd of centralDir) {
    zipBytes.set(cd, pos);
    pos += cd.length;
  }
  zipBytes.set(eocd, pos);
  return zipBytes;
}

function makeDocxRun(text, opts = {}) {
  const font = opts.code ? 'Consolas' : 'Arial';
  const rPrParts = [`<w:rFonts w:ascii="${font}" w:hAnsi="${font}" w:cs="${font}"/>`];
  if (opts.bold) rPrParts.push('<w:b/>');
  if (opts.italic) rPrParts.push('<w:i/>');
  if (opts.color) rPrParts.push(`<w:color w:val="${opts.color}"/>`);
  if (opts.sz) rPrParts.push(`<w:sz w:val="${opts.sz}"/><w:szCs w:val="${opts.sz}"/>`);
  if (opts.underline) rPrParts.push('<w:u w:val="single"/>');
  if (opts.fill) rPrParts.push(`<w:shd w:val="clear" w:color="auto" w:fill="${opts.fill}"/>`);
  return `<w:r><w:rPr>${rPrParts.join('')}</w:rPr><w:t xml:space="preserve">${escapeXml(text)}</w:t></w:r>`;
}

function makeDocxParagraph(runsXml, opts = {}) {
  const pPrParts = [];
  if (opts.bottomBorder) {
    pPrParts.push(`<w:pBdr><w:bottom w:val="single" w:sz="${opts.bottomBorder.sz || 6}" w:space="4" w:color="${opts.bottomBorder.color || '9AA0A6'}"/></w:pBdr>`);
  }
  const before = opts.before ?? 0;
  const after = opts.after ?? 70;
  const line = opts.line ?? 264;
  pPrParts.push(`<w:spacing w:before="${before}" w:after="${after}" w:line="${line}" w:lineRule="auto"/>`);
  if (opts.indentLeft || opts.hanging) {
    pPrParts.push(`<w:ind w:left="${opts.indentLeft || 0}" w:hanging="${opts.hanging || 0}"/>`);
  }
  if (opts.align) {
    pPrParts.push(`<w:jc w:val="${opts.align}"/>`);
  }
  return `<w:p><w:pPr>${pPrParts.join('')}</w:pPr>${runsXml}</w:p>`;
}

function resolveTokensText(raw, tokenValues) {
  return String(raw ?? '').replace(/@@TPL:([A-Z_]+)@@/g, (_, k) => tokenValues[k] ?? '');
}

function renderInlineMarkdownToDocxRuns(rawText, tokenValues, registerLink, styleOpts = {}) {
  const inlinePattern = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*)/g;
  let xml = '';
  let lastIdx = 0;
  let match;

  while ((match = inlinePattern.exec(rawText)) !== null) {
    if (match.index > lastIdx) {
      const seg = resolveTokensText(rawText.slice(lastIdx, match.index), tokenValues);
      if (seg) xml += makeDocxRun(seg, styleOpts);
    }
    if (match[2] !== undefined && match[3] !== undefined) {
      const url = sanitizeUrl(resolveTokensText(match[3], tokenValues));
      const rId = registerLink(url);
      const inner = renderInlineMarkdownToDocxRuns(match[2], tokenValues, registerLink, {
        ...styleOpts,
        color: '174EA6',
        underline: true
      });
      xml += `<w:hyperlink r:id="${rId}">${inner}</w:hyperlink>`;
    } else if (match[4] !== undefined) {
      xml += renderInlineMarkdownToDocxRuns(match[4], tokenValues, registerLink, {
        ...styleOpts,
        bold: true
      });
    } else if (match[5] !== undefined) {
      const codeOpts = styleOpts.plainCode
        ? styleOpts
        : { ...styleOpts, code: true, fill: 'F1F3F4' };
      xml += renderInlineMarkdownToDocxRuns(match[5], tokenValues, registerLink, codeOpts);
    } else if (match[6] !== undefined) {
      xml += renderInlineMarkdownToDocxRuns(match[6], tokenValues, registerLink, {
        ...styleOpts,
        italic: true
      });
    }
    lastIdx = inlinePattern.lastIndex;
  }

  if (lastIdx < rawText.length) {
    const tail = resolveTokensText(rawText.slice(lastIdx), tokenValues);
    if (tail) xml += makeDocxRun(tail, styleOpts);
  }

  return xml;
}

function makeDocxCell(contentXml, widthDxa, opts = {}) {
  const borders = opts.borders || '<w:top w:val="none"/><w:left w:val="none"/><w:bottom w:val="none"/><w:right w:val="none"/>';
  const shd = opts.fill ? `<w:shd w:val="clear" w:color="auto" w:fill="${opts.fill}"/>` : '';
  const mar = opts.mar || '<w:top w:w="0" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/>';
  const vAlign = opts.vAlign ? `<w:vAlign w:val="${opts.vAlign}"/>` : '';
  return `<w:tc><w:tcPr><w:tcW w:w="${widthDxa}" w:type="dxa"/><w:tcBorders>${borders}</w:tcBorders>${shd}<w:tcMar>${mar}</w:tcMar>${vAlign}</w:tcPr>${contentXml}</w:tc>`;
}

function buildLogoDrawingXml(rIdLogo) {
  return `<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"><wp:extent cx="304780" cy="486000"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="1" name="GDG AI for Science Logo"/><wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="1" name="ai-for-science_beaker.png"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${rIdLogo}" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="304780" cy="486000"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`;
}

/**
 * Build a complete single-page A4 .docx Word document from the active Markdown template and form values.
 */
function buildDocxBytes(templateMd, v, logoBytes) {
  const { text, tokenValues } = prepareTemplateText(templateMd, v, true);
  const doc = parseTemplateDocument(text);

  const docRels = [
    '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
    '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>'
  ];
  let nextRelIdx = 3;
  let rIdLogo = null;
  if (logoBytes && logoBytes.length > 0) {
    rIdLogo = `rId${nextRelIdx++}`;
    docRels.push(
      `<Relationship Id="${rIdLogo}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/logo.png"/>`
    );
  }
  const linkMap = new Map();
  const registerDocLink = url => {
    if (linkMap.has(url)) return linkMap.get(url);
    const id = `rId${nextRelIdx++}`;
    linkMap.set(url, id);
    docRels.push(
      `<Relationship Id="${id}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${escapeXml(url)}" TargetMode="External"/>`
    );
    return id;
  };

  const parts = [];
  const PAGE_W = 9922; // A4 (11906 twips) minus 2 x 992 twips (~17.5mm margins)

  // Top 4-color Google accent bar
  const barWidths = [2480, 2481, 2481, 2480];
  const barColors = ['4285F4', 'EA4335', 'FBBC04', '34A853'];
  const barCells = barColors
    .map((fill, idx) => makeDocxCell(makeDocxParagraph('', { before: 0, after: 0, line: 240 }), barWidths[idx], { fill }))
    .join('');
  parts.push(
    `<w:tbl><w:tblPr><w:tblW w:w="${PAGE_W}" w:type="dxa"/><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>${barWidths.map(w => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid><w:tr><w:trPr><w:trHeight w:val="45" w:hRule="exact"/></w:trPr>${barCells}</w:tr></w:tbl>`
  );

  // Spacer below top bar
  parts.push(makeDocxParagraph('', { before: 0, after: 70, line: 120 }));

  // Letterhead table (Logo + Brand Title on left, Date/Ref/Contact on right)
  const brandParagraphs = [
    makeDocxParagraph(
      makeDocxRun(' GDG AI FOR SCIENCE ', { bold: true, color: '174EA6', sz: 15, fill: 'D2E3FC' }),
      { before: 0, after: 35, line: 240 }
    ),
    makeDocxParagraph(
      renderInlineMarkdownToDocxRuns(doc.eventTitle, tokenValues, registerDocLink, {
        bold: true,
        color: '202124',
        sz: 29
      }),
      { before: 0, after: 20, line: 240 }
    ),
    makeDocxParagraph(
      renderInlineMarkdownToDocxRuns(doc.orgName, tokenValues, registerDocLink, {
        color: '3C4043',
        sz: 17
      }),
      { before: 0, after: 0, line: 240 }
    )
  ].join('');

  const metaParagraphs = doc.metaLines
    .map((line, idx) =>
      makeDocxParagraph(
        renderInlineMarkdownToDocxRuns(line, tokenValues, registerDocLink, {
          color: '3C4043',
          sz: 17,
          plainCode: true
        }),
        { before: 0, after: idx === doc.metaLines.length - 1 ? 0 : 25, line: 240, align: 'right' }
      )
    )
    .join('');

  if (rIdLogo) {
    const wCols = [620, 5780, 3522];
    const c1 = makeDocxCell(
      makeDocxParagraph(buildLogoDrawingXml(rIdLogo), { before: 0, after: 0, line: 240 }),
      wCols[0],
      { vAlign: 'top' }
    );
    const c2 = makeDocxCell(brandParagraphs, wCols[1], { vAlign: 'top' });
    const c3 = makeDocxCell(metaParagraphs, wCols[2], { vAlign: 'top' });
    parts.push(
      `<w:tbl><w:tblPr><w:tblW w:w="${PAGE_W}" w:type="dxa"/><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>${wCols.map(w => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid><w:tr>${c1}${c2}${c3}</w:tr></w:tbl>`
    );
  } else {
    const wCols = [6400, 3522];
    const c1 = makeDocxCell(brandParagraphs, wCols[0], { vAlign: 'top' });
    const c2 = makeDocxCell(metaParagraphs, wCols[1], { vAlign: 'top' });
    parts.push(
      `<w:tbl><w:tblPr><w:tblW w:w="${PAGE_W}" w:type="dxa"/><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>${wCols.map(w => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid><w:tr>${c1}${c2}</w:tr></w:tbl>`
    );
  }

  // Horizontal rule under letterhead
  parts.push(makeDocxParagraph('', { before: 20, after: 90, line: 120, bottomBorder: { sz: 6, color: '9AA0A6' } }));

  // Document classification heading
  const resolvedDocTitle = resolveTokensText(doc.docTitle, tokenValues);
  parts.push(
    makeDocxParagraph(
      makeDocxRun(resolvedDocTitle.toUpperCase(), { bold: true, color: '174EA6', sz: 23 }),
      { before: 0, after: doc.docSubtitle ? 20 : 80, line: 250 }
    )
  );
  if (doc.docSubtitle) {
    parts.push(
      makeDocxParagraph(
        renderInlineMarkdownToDocxRuns(doc.docSubtitle, tokenValues, registerDocLink, {
          italic: true,
          color: '3C4043',
          sz: 18
        }),
        { before: 0, after: doc.extraHeaderLines.length ? 20 : 80, line: 240 }
      )
    );
  }
  for (const extra of doc.extraHeaderLines) {
    parts.push(
      makeDocxParagraph(
        renderInlineMarkdownToDocxRuns(extra, tokenValues, registerDocLink, {
          color: '3C4043',
          sz: 18
        }),
        { before: 0, after: 40, line: 240 }
      )
    );
  }

  // Recipient block
  if (doc.recipientLines.length) {
    doc.recipientLines.forEach((line, idx) => {
      const isLabel = idx === 0;
      const isName = idx === 1;
      const isLast = idx === doc.recipientLines.length - 1;
      const color = isLabel || isName ? '202124' : '3C4043';
      let lineToRender = line;
      if (/^Email:\s*[^\s[]+@[^\s\]]+$/i.test(resolveTokensText(line, tokenValues))) {
        const emailAddr = resolveTokensText(line, tokenValues).replace(/^Email:\s*/i, '').trim();
        lineToRender = `Email: [${emailAddr}](mailto:${emailAddr})`;
      }
      parts.push(
        makeDocxParagraph(
          renderInlineMarkdownToDocxRuns(lineToRender, tokenValues, registerDocLink, {
            bold: isLabel || isName,
            color,
            sz: 19
          }),
          { before: 0, after: isLast ? 90 : 18, line: 245 }
        )
      );
    });
  }

  // Body blocks
  for (const blk of doc.bodyBlocks) {
    if (blk.type === 'hr') {
      parts.push(makeDocxParagraph('', { before: 40, after: 80, line: 120, bottomBorder: { sz: 6, color: '9AA0A6' } }));
    } else if (blk.type === 'heading') {
      const sz = blk.level <= 2 ? 21 : 19;
      parts.push(
        makeDocxParagraph(
          renderInlineMarkdownToDocxRuns(blk.text, tokenValues, registerDocLink, {
            bold: true,
            color: '174EA6',
            sz
          }),
          { before: 60, after: 45, line: 250 }
        )
      );
    } else if (blk.type === 'list') {
      blk.items.forEach((item, idx) => {
        const prefix = blk.ordered ? `${idx + 1}. ` : '• ';
        const runs =
          makeDocxRun(prefix, { bold: true, color: '174EA6', sz: 19 }) +
          renderInlineMarkdownToDocxRuns(item, tokenValues, registerDocLink, {
            color: '202124',
            sz: 19
          });
        parts.push(makeDocxParagraph(runs, { before: 0, after: 40, line: 255, indentLeft: 340, hanging: 180 }));
      });
    } else if (blk.type === 'table') {
      const numCols = blk.headers.length || 2;
      const colWidths =
        numCols === 2
          ? [2850, PAGE_W - 2850]
          : Array.from({ length: numCols }, (_, i) =>
              i === numCols - 1 ? PAGE_W - Math.floor(PAGE_W / numCols) * (numCols - 1) : Math.floor(PAGE_W / numCols)
            );
      const boxRows = [];

      const renderRowXml = (cells, rowIdx, totalRows, isHeader) =>
        `<w:tr>${cells
          .map((rawCell, cIdx) => {
            const isFirstCol = cIdx === 0;
            const isLastCol = cIdx === numCols - 1;
            const topB = rowIdx === 0 ? '<w:top w:val="single" w:sz="4" w:space="0" w:color="9AA0A6"/>' : '<w:top w:val="none"/>';
            const botB =
              rowIdx === totalRows - 1
                ? '<w:bottom w:val="single" w:sz="4" w:space="0" w:color="9AA0A6"/>'
                : isHeader
                  ? '<w:bottom w:val="single" w:sz="4" w:space="0" w:color="9AA0A6"/>'
                  : '<w:bottom w:val="none"/>';
            const leftB = isFirstCol
              ? '<w:left w:val="single" w:sz="24" w:space="0" w:color="4285F4"/>'
              : '<w:left w:val="none"/>';
            const rightB = isLastCol
              ? '<w:right w:val="single" w:sz="4" w:space="0" w:color="9AA0A6"/>'
              : '<w:right w:val="none"/>';
            const marTop = rowIdx === 0 ? 75 : 32;
            const marBot = rowIdx === totalRows - 1 ? 75 : 32;
            const marLeft = isFirstCol ? 150 : 70;
            const marRight = isLastCol ? 130 : 70;
            const cleanText = isFirstCol || isHeader ? rawCell.replace(/^\*\*|\*\*$/g, '') : rawCell;
            const isSessionTitleRow =
              numCols === 2 && cIdx === 1 && /session title/i.test(cells[0] || '') && !/^\*\*/.test(rawCell.trim());
            const pXml = makeDocxParagraph(
              renderInlineMarkdownToDocxRuns(cleanText, tokenValues, registerDocLink, {
                bold: isFirstCol || isHeader || isSessionTitleRow,
                color: isFirstCol || isHeader ? '174EA6' : '202124',
                sz: 18
              }),
              { before: 0, after: 0, line: 238 }
            );
            return makeDocxCell(pXml, colWidths[cIdx], {
              fill: 'F1F3F4',
              borders: `${topB}${leftB}${botB}${rightB}`,
              mar: `<w:top w:w="${marTop}" w:type="dxa"/><w:left w:w="${marLeft}" w:type="dxa"/><w:bottom w:w="${marBot}" w:type="dxa"/><w:right w:w="${marRight}" w:type="dxa"/>`,
              vAlign: 'top'
            });
          })
          .join('')}</w:tr>`;

      if (numCols === 2) {
        blk.rows.forEach((row, rIdx) => {
          boxRows.push(renderRowXml([row[0] || '', row[1] || ''], rIdx, blk.rows.length, false));
        });
      } else {
        const allRows = [blk.headers, ...blk.rows];
        allRows.forEach((row, rIdx) => {
          boxRows.push(renderRowXml(row, rIdx, allRows.length, rIdx === 0));
        });
      }

      parts.push(
        `<w:tbl><w:tblPr><w:tblW w:w="${PAGE_W}" w:type="dxa"/><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid>${colWidths.map(w => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${boxRows.join('')}</w:tbl>`
      );
      parts.push(makeDocxParagraph('', { before: 0, after: 75, line: 100 }));
    } else {
      let runs = '';
      blk.lines.forEach((line, lIdx) => {
        if (lIdx > 0) runs += '<w:r><w:br/></w:r>';
        runs += renderInlineMarkdownToDocxRuns(line.replace(/\s{2,}$/, ''), tokenValues, registerDocLink, {
          color: '202124',
          sz: 19
        });
      });
      parts.push(makeDocxParagraph(runs, { before: 0, after: 80, line: 256 }));
    }
  }

  // Signature block
  if (doc.signature) {
    parts.push(
      makeDocxParagraph(
        renderInlineMarkdownToDocxRuns(doc.signature.leadLine, tokenValues, registerDocLink, {
          color: '202124',
          sz: 19
        }),
        { before: 20, after: 120, line: 245 }
      )
    );
    doc.signature.detailLines.forEach((dLine, idx) => {
      const isSigName = idx === 0 && /^\*\*.*\*\*$/.test(dLine);
      const clean = isSigName ? dLine.replace(/^\*\*|\*\*$/g, '') : dLine;
      parts.push(
        makeDocxParagraph(
          renderInlineMarkdownToDocxRuns(clean, tokenValues, registerDocLink, {
            bold: isSigName,
            color: isSigName ? '202124' : '3C4043',
            sz: isSigName ? 19 : 18
          }),
          { before: 0, after: idx === doc.signature.detailLines.length - 1 ? 0 : 18, line: 240 }
        )
      );
    });
  }

  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    ${parts.join('\n    ')}
    <w:sectPr>
      <w:footerReference w:type="default" r:id="rId2"/>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="620" w:right="992" w:bottom="760" w:left="992" w:header="360" w:footer="400" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>`;

  const resolvedChapters = resolveTokensText(doc.chaptersText, tokenValues);
  const resolvedFooterEmail = resolveTokensText(doc.footerEmail, tokenValues);
  const footerEmailUrl = `mailto:${resolvedFooterEmail}`;
  const footerLeftCell = makeDocxCell(
    makeDocxParagraph(
      makeDocxRun(`GDG AI for Science · Chapters: ${resolvedChapters}`, { color: '3C4043', sz: 16 }),
      { before: 40, after: 0, line: 220 }
    ),
    7200,
    {
      borders: '<w:top w:val="single" w:sz="4" w:space="0" w:color="9AA0A6"/><w:left w:val="none"/><w:bottom w:val="none"/><w:right w:val="none"/>',
      mar: '<w:top w:w="50" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/>'
    }
  );
  const footerRightCell = makeDocxCell(
    makeDocxParagraph(
      `<w:hyperlink r:id="rId1">${makeDocxRun(resolvedFooterEmail, { color: '174EA6', underline: true, sz: 16 })}</w:hyperlink>`,
      { before: 40, after: 0, line: 220, align: 'right' }
    ),
    PAGE_W - 7200,
    {
      borders: '<w:top w:val="single" w:sz="4" w:space="0" w:color="9AA0A6"/><w:left w:val="none"/><w:bottom w:val="none"/><w:right w:val="none"/>',
      mar: '<w:top w:w="50" w:type="dxa"/><w:left w:w="0" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="0" w:type="dxa"/>'
    }
  );

  const footerXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:tbl><w:tblPr><w:tblW w:w="${PAGE_W}" w:type="dxa"/><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid><w:gridCol w:w="7200"/><w:gridCol w:w="${PAGE_W - 7200}"/></w:tblGrid><w:tr>${footerLeftCell}${footerRightCell}</w:tr></w:tbl>
</w:ftr>`;

  const footerRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${escapeXml(footerEmailUrl)}" TargetMode="External"/>
</Relationships>`;

  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
        <w:color w:val="202124"/>
        <w:sz w:val="19"/>
        <w:szCs w:val="19"/>
      </w:rPr>
    </w:rPrDefault>
  </w:docDefaults>
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
    <w:rPr>
      <w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/>
    </w:rPr>
  </w:style>
</w:styles>`;

  const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="png" ContentType="image/png"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>
</Types>`;

  const rootRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

  const docRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${docRels.join('\n  ')}
</Relationships>`;

  const zipEntries = [
    { name: '[Content_Types].xml', data: contentTypesXml },
    { name: '_rels/.rels', data: rootRelsXml },
    { name: 'word/document.xml', data: documentXml },
    { name: 'word/_rels/document.xml.rels', data: docRelsXml },
    { name: 'word/styles.xml', data: stylesXml },
    { name: 'word/footer1.xml', data: footerXml },
    { name: 'word/_rels/footer1.xml.rels', data: footerRelsXml }
  ];
  if (rIdLogo) {
    zipEntries.push({ name: 'word/media/logo.png', data: logoBytes });
  }
  return buildZipStore(zipEntries);
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

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showFeedback(`Downloaded ${fileName}`);
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
    document.title = getOutputFileStem(v);
    window.print();
    setTimeout(() => {
      document.title = prevTitle;
    }, 500);
  });

  document.getElementById('downloadDocxBtn').addEventListener('click', async () => {
    await loadLogoBytes();
    const v = readFormValues();
    const bytes = buildDocxBytes(appState.templateSource, v, appState.logoBytes);
    const fileName = `${getOutputFileStem(v)}.docx`;
    const blob = new Blob([bytes], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    downloadBlob(blob, fileName);
  });

  document.getElementById('downloadMdBtn').addEventListener('click', () => {
    const v = readFormValues();
    const md = buildMarkdownText();
    const fileName = `${getOutputFileStem(v)}.md`;
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    downloadBlob(blob, fileName);
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

  await Promise.all([loadMarkdownTemplate(), loadLogoBytes()]);
  if (appState.templateLoadedFromFile) {
    renderLetterPreview();
  }
});
