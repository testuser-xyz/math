/**
 * contentLoader.js
 * Fetches topics.json and renders topic content into the DOM.
 * Works on GitHub Pages (HTTP) and via local dev server.
 */

const TOPICS_URL = './data/topics.json';
window.Module2 = window.Module2 || {};

// ── Cache & loader ────────────────────────────────────────────────────────────
let _topicsCache = null;

async function loadTopics() {
  if (_topicsCache) return _topicsCache;

  try {
    const res = await fetch(TOPICS_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    _topicsCache = data.topics;
    return _topicsCache;
  } catch (err) {
    // Fallback for environments where fetch to local JSON is blocked.
    if (window.Module2Topics && Array.isArray(window.Module2Topics.topics)) {
      _topicsCache = window.Module2Topics.topics;
      return _topicsCache;
    }

    showFetchError();
    throw err;
  }
}

function showFetchError() {
  const main = document.querySelector('main') || document.body;
  main.innerHTML = `
    <div class="container error-state" style="padding:4rem 1.5rem">
      <h2>⚠️ Could Not Load Content</h2>
      <p style="max-width:480px;margin:0 auto 1.5rem">
        This site requires a local web server to load content files.<br>
        You <strong>cannot</strong> open the HTML files directly from the file system.
      </p>
      <p><strong>Easy fix — choose one:</strong></p>
      <ol style="text-align:left;max-width:420px;margin:0 auto 1.5rem;line-height:2">
        <li>In VS Code: install the <strong>Live Server</strong> extension, then right-click
            <code>index.html</code> → <em>Open with Live Server</em></li>
        <li>Or run in terminal: <code>python -m http.server 8080</code> then open
            <code>http://localhost:8080</code></li>
      </ol>
    </div>`;
}

// ── Get helpers ───────────────────────────────────────────────────────────────
async function getAllTopics()  { return loadTopics(); }
async function getTopicById(id) {
  const topics = await loadTopics();
  return topics.find(t => t.id === Number(id)) || null;
}

// ── URL parameter helper ──────────────────────────────────────────────────────
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// ── Escape HTML helper ────────────────────────────────────────────────────────
function esc(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Text normalization + math formatting helpers ────────────────────────────
const _SUP_MAP = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', 'ˣ': 'x', 'ⁿ': 'n'
};
const _SUB_MAP = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
};
const _CP1252_REV = {
  0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84,
  0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87, 0x02C6: 0x88,
  0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C,
  0x017D: 0x8E, 0x2018: 0x91, 0x2019: 0x92, 0x201C: 0x93,
  0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
  0x02DC: 0x98, 0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B,
  0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F
};

function normalizeDisplayText(raw) {
  const str = String(raw ?? '');
  if (!/[ÃÂâËð]/.test(str)) return str;

  // Repair common UTF-8 text that was decoded as Windows-1252.
  const bytes = [];
  for (const ch of str) {
    const code = ch.charCodeAt(0);
    if (code <= 0xFF) {
      bytes.push(code);
      continue;
    }
    const mapped = _CP1252_REV[code];
    if (mapped === undefined) return str;
    bytes.push(mapped);
  }

  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(new Uint8Array(bytes));
  } catch {
    return str;
  }
}

function _fromSupChars(chars) {
  return [...chars].map(ch => _SUP_MAP[ch] || ch).join('');
}

function _fromSubChars(chars) {
  return [...chars].map(ch => _SUB_MAP[ch] || ch).join('');
}

function formatMathText(raw) {
  let out = esc(normalizeDisplayText(raw));

  // log₂(x) / log2(x) formatting
  out = out.replace(/\blog([₀₁₂₃₄₅₆₇₈₉]+)\s*\(/g, (_, s) => `log<sub>${_fromSubChars(s)}</sub>(`);
  out = out.replace(/\blog_?([0-9eE]+)\s*\(/g, (_, s) => `log<sub>${s}</sub>(`);

  // caret exponent formatting: 2^x, (1+r)^t, 10^8
  out = out.replace(/([A-Za-z0-9\)\]])\^([A-Za-z0-9+\-]+)/g, '$1<sup>$2</sup>');

  // unicode superscript formatting: 2ˣ, 10⁸
  out = out.replace(/([A-Za-z0-9\)\]])([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ˣⁿ]+)/g, (_, b, s) => `${b}<sup>${_fromSupChars(s)}</sup>`);

  return out;
}

// ─────────────────────────────────────────────────────────────────────────────
// INDEX PAGE  –  render topic cards grid
// ─────────────────────────────────────────────────────────────────────────────
async function renderHomepage() {
  const grid   = document.getElementById('topicsGrid');
  const pathEl = document.getElementById('learningPathSteps');
  if (!grid) return;

  grid.innerHTML = '<div class="loading-spinner"><div class="spinner"></div> Loading topics…</div>';

  const topics   = await getAllTopics();
  const progress = window.Module2.getProgress ? window.Module2.getProgress() : {};
  const done     = progress.completedTopics || [];

  // Update progress stats in hero
  updateProgressOverview(topics.length, done.length);

  // Cards
  grid.innerHTML = topics.map((t, i) => {
    const completed = done.includes(t.id);
    return `
      <div class="topic-card animate-fadeInUp delay-${Math.min(i % 3 + 1, 3)}" tabindex="0"
           data-topic-id="${t.id}">
        <div class="topic-card-color-bar" style="background:${esc(t.color)}"></div>
        <div class="topic-card-body">
          <span class="topic-card-icon">${esc(normalizeDisplayText(t.icon))}</span>
          <div class="topic-card-number">Topic ${i + 1}</div>
          <div class="topic-card-title">${esc(normalizeDisplayText(t.title))}</div>
          <p class="topic-card-summary">${formatMathText(t.summary)}</p>
          <div class="topic-card-footer">
            ${completed
              ? '<span class="topic-completed-badge">✅ Completed</span>'
              : '<span class="badge badge-primary">Not started</span>'}
            <a href="topic.html?id=${t.id}" class="btn btn-primary btn-sm">
              ${completed ? '📖 Review' : '🚀 Start'} Learning
            </a>
          </div>
        </div>
      </div>`;
  }).join('');

  // Learning path
  if (pathEl) {
    pathEl.innerHTML = topics.map((t, i) => {
      const completed = done.includes(t.id);
      return `
        <div class="path-step">
          <div class="path-step-dot" style="background:${esc(t.color)}">
            ${completed ? '✅' : esc(normalizeDisplayText(t.icon))}
          </div>
          <div class="path-step-content">
            <div class="path-step-title">${esc(normalizeDisplayText(t.title))}</div>
            <div class="path-step-meta">${formatMathText(String(t.summary || '').slice(0,70))}…</div>
          </div>
        </div>`;
    }).join('');
  }
}

function updateProgressOverview(total, done) {
  const numEl  = document.getElementById('progressNum');
  const pctEl  = document.getElementById('progressPct');
  const barEl  = document.getElementById('progressBarFill');
  const pct    = total > 0 ? Math.round((done / total) * 100) : 0;
  if (numEl)  numEl.textContent  = `${done}/${total}`;
  if (pctEl)  pctEl.textContent  = `${pct}%`;
  if (barEl)  barEl.style.width  = `${pct}%`;
}

// ─────────────────────────────────────────────────────────────────────────────
// TOPIC PAGE  –  render full topic content
// ─────────────────────────────────────────────────────────────────────────────
async function renderTopicPage() {
  const id = getParam('id');
  if (!id) { window.location.href = 'index.html'; return; }

  const topic    = await getTopicById(id);
  if (!topic) { window.location.href = 'index.html'; return; }

  const topics   = await getAllTopics();
  const idx      = topics.findIndex(t => t.id === topic.id);
  const prev     = idx > 0 ? topics[idx - 1] : null;
  const next     = idx < topics.length - 1 ? topics[idx + 1] : null;

  // Header
  document.title = `${topic.title} – Module_2`;
  setEl('topicIcon',    topic.icon);
  setEl('topicNumber',  `Topic ${idx + 1} of ${topics.length}`);
  setEl('topicTitle',   topic.title);
  setEl('topicSummary', topic.summary);
  setEl('pageTitle',    topic.title);

  // Nav buttons
  const prevBtn = document.getElementById('prevTopicBtn');
  const nextBtn = document.getElementById('nextTopicBtn');
  if (prevBtn) {
    if (prev) { prevBtn.href = `topic.html?id=${prev.id}`; prevBtn.textContent = `← ${prev.title}`; }
    else prevBtn.style.visibility = 'hidden';
  }
  if (nextBtn) {
    if (next) { nextBtn.href = `topic.html?id=${next.id}`; nextBtn.textContent = `${next.title} →`; }
    else nextBtn.style.visibility = 'hidden';
  }

  // Action links
  const practiceLink = document.getElementById('practiceLink');
  const quizLink     = document.getElementById('quizLink');
  if (practiceLink) practiceLink.href = `practice.html?id=${topic.id}`;
  if (quizLink)     quizLink.href     = `quiz.html?id=${topic.id}`;

  // Formula card
  setElHtml('topicFormula', formatMathText(topic.formula || ''));

  // Build accordion
  const accordionEl = document.getElementById('topicAccordion');
  if (accordionEl) accordionEl.innerHTML = buildAccordion(topic);

  // Sidebar quick nav
  const sideNav = document.getElementById('allTopicsNav');
  if (sideNav) {
    sideNav.innerHTML = topics.map(t => `
      <li>
        <a href="topic.html?id=${t.id}" class="${t.id === topic.id ? 'current' : ''}">
          <span class="quick-nav-dot"></span>
          ${esc(normalizeDisplayText(t.icon))} ${esc(normalizeDisplayText(t.title))}
        </a>
      </li>`).join('');
  }

  // Mark active in nav
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === 'topic.html') a.classList.add('active');
  });

  // Store current topic for progress tracking
  window.Module2.currentTopicId = topic.id;
  window.Module2.currentTopic   = topic;
}

function buildAccordion(t) {
  const sections = [
    {
      id: 'explain', emoji: '💡', title: 'Simple Explanation',
      body: `<p>${formatMathText(t.explanation).replace(/\n/g,'<br>')}</p>
             <div class="key-idea">🔑 <strong>Key Idea:</strong> ${formatMathText(t.keyIdea)}</div>`
    },
    {
      id: 'steps', emoji: '📋', title: 'Step-by-Step Process',
      body: `<ol class="steps-list">${t.steps.map((s,i)=>`
               <li><span class="step-num">${i+1}</span><span>${formatMathText(s)}</span></li>`).join('')}
             </ol>`
    },
    {
      id: 'daily', emoji: '🌍', title: 'Daily Life Example',
      body: buildExampleCard(t.dailyExample)
    },
    {
      id: 'extra', emoji: '🔬', title: 'Extra Example',
      body: buildExampleCard(t.extraExample)
    },
    {
      id: 'visual', emoji: '📈', title: 'Interactive Graph',
      body: `<div class="graph-container">
               <div class="graph-title">${t.graphType === 'logarithmic' ? 'Logarithmic' : 'Exponential'} Growth Curve</div>
               <canvas id="topicGraph" class="graph-canvas" width="480" height="260"></canvas>
               <div class="graph-controls">
                 <button class="btn btn-sm btn-secondary" onclick="window.Module2.animateGraph()">▶ Animate</button>
                 <button class="btn btn-sm btn-secondary" onclick="window.Module2.resetGraph()">↺ Reset</button>
               </div>
               <div class="graph-legend">
                 <div class="legend-item"><div class="legend-dot" style="background:#4A90D9"></div> ${formatMathText(t.graphType === 'logarithmic' ? 'y = log(x)' : 'y = 2^x')}</div>
               </div>
             </div>`
    },
    {
      id: 'solved', emoji: '✏️', title: 'Solved Problem – Step by Step',
      body: buildSolvedProblem(t.solvedProblem)
    },
    {
      id: 'tips', emoji: '💡', title: 'Tips & Common Mistakes',
      body: buildTipsMistakes(t.tips, t.mistakes)
    },
    {
      id: 'dyk', emoji: '🌟', title: 'Did You Know?',
      body: `<div class="did-you-know">
               <div class="did-you-know-icon">🌟</div>
               <div class="did-you-know-text">
                 <div class="did-you-know-label">Fun Fact</div>
                 ${formatMathText(t.didYouKnow)}
               </div>
             </div>`
    }
  ];

  return sections.map((sec, i) => `
    <div class="accordion-item ${i === 0 ? 'open' : ''}" data-section="${sec.id}">
      <button class="accordion-btn" aria-expanded="${i === 0}" onclick="window.Module2.toggleAccordion(this)">
        <span class="accordion-btn-left">
          <span class="accordion-emoji">${sec.emoji}</span>
          <span class="accordion-title">${sec.title}</span>
        </span>
        <span class="accordion-arrow">▼</span>
      </button>
      <div class="accordion-body ${i === 0 ? 'open' : ''}">
        <div class="accordion-body-inner">${sec.body}</div>
      </div>
    </div>`).join('');
}

function buildExampleCard(ex) {
  if (!ex) return '<p>No example available.</p>';
  const rows = ex.table ? ex.table.map(r =>
    `<tr><td><strong>${formatMathText(r.label)}</strong></td><td>${formatMathText(r.value)}</td></tr>`
  ).join('') : '';
  return `
    <div class="example-card">
      <div class="example-card-title">${formatMathText(ex.title)}</div>
      <p class="example-story">${formatMathText(ex.story)}</p>
      ${rows ? `<table class="example-table">
        <thead><tr><th>${formatMathText(ex.title)}</th><th>Value</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>` : ''}
    </div>`;
}

function buildSolvedProblem(sp) {
  if (!sp) return '<p>No solved problem available.</p>';
  const steps = sp.steps.map((s, i) => `
    <div class="solved-step" id="sstep-${i}">
      <span class="solved-step-num">Step ${s.step}</span>
      <div class="solved-step-content">
        <div class="solved-step-text">${formatMathText(s.text)}</div>
        <code class="solved-step-math">${formatMathText(s.math)}</code>
      </div>
    </div>`).join('');

  return `
    <div class="solved-problem">
      <div class="solved-question">❓ ${formatMathText(sp.question)}</div>
      <div class="solved-steps" id="solvedSteps">${steps}</div>
      <div class="solved-answer" id="solvedAnswer">✅ <strong>Answer:</strong> ${formatMathText(sp.answer)}</div>
      <div class="solved-controls">
        <button class="btn btn-accent btn-sm" onclick="window.Module2.revealNextStep()">👁 Reveal Next Step</button>
        <button class="btn btn-success btn-sm" onclick="window.Module2.revealAllSteps()">✅ Show All</button>
        <button class="btn btn-secondary btn-sm" onclick="window.Module2.resetSteps()">↺ Reset</button>
      </div>
    </div>`;
}

function buildTipsMistakes(tips, mistakes) {
  const tipsHtml = (tips || []).map(t => `
    <div class="tip-item">
      <span class="tip-icon">✅</span>
      <span>${formatMathText(t)}</span>
    </div>`).join('');
  const mistakesHtml = (mistakes || []).map(m => `
    <div class="mistake-item">
      <span class="tip-icon">⚠️</span>
      <span>${formatMathText(m)}</span>
    </div>`).join('');

  return `
    <div class="tips-grid">
      ${tips && tips.length ? `<h4 style="margin-bottom:.4rem;color:var(--success)">✅ Tips</h4>${tipsHtml}` : ''}
      ${mistakes && mistakes.length ? `<h4 style="margin:.75rem 0 .4rem;color:var(--error)">⚠️ Common Mistakes</h4>${mistakesHtml}` : ''}
    </div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// PRACTICE PAGE  –  render practice problems
// ─────────────────────────────────────────────────────────────────────────────
async function renderPracticePage() {
  const id = getParam('id');
  if (!id) { window.location.href = 'index.html'; return; }

  const topic = await getTopicById(id);
  if (!topic) { window.location.href = 'index.html'; return; }

  document.title = `Practice: ${topic.title} – Module_2`;
  setEl('practiceTopicIcon',  topic.icon);
  setEl('practiceTopicTitle', topic.title);
  setEl('backToTopicLink',    null, 'href', `topic.html?id=${topic.id}`);
  setEl('quizLinkFromPrac',   null, 'href', `quiz.html?id=${topic.id}`);

  const container = document.getElementById('practiceProblems');
  if (!container) return;

  const probs = topic.practice || [];
  if (probs.length === 0) {
    container.innerHTML = '<p class="text-center" style="color:var(--text-muted);padding:3rem">No practice problems for this topic yet.</p>';
    return;
  }

  const letters = ['A', 'B', 'C', 'D', 'E'];
  container.innerHTML = probs.map((p, i) => {
    const isTF = String(p.type || '').toLowerCase() === 'true-false';
    const options = Array.isArray(p.options) ? p.options : [];
    return `
    <div class="practice-question-card animate-fadeInUp delay-${i % 3 + 1}">
      <div class="practice-q-number">
        Practice Question ${i + 1}
        <span class="badge ${isTF ? 'badge-accent' : 'badge-primary'}" style="margin-left:.45rem">
          ${isTF ? 'True/False' : 'MCQ'}
        </span>
      </div>
      <div class="practice-q-text">${formatMathText(p.question)}</div>
      <div class="quiz-options" id="prac-options-${i}" role="group" aria-label="Practice options ${i + 1}">
        ${options.map((opt, j) => `
          <button class="quiz-option" data-idx="${j}" onclick="window.Module2.selectPracticeOption(${i}, ${j}, this)">
            <span class="quiz-option-letter">${letters[j] || (j + 1)}</span>
            <span>${formatMathText(opt)}</span>
          </button>`).join('')}
      </div>
      <div class="feedback-box" id="fb-${i}"></div>
    </div>`;
  }).join('');

  // Store full practice questions for option-based checking
  window.Module2._practiceQuestions = probs;
  window.Module2._practiceAnswered = {};
}

// ─────────────────────────────────────────────────────────────────────────────
// QUIZ PAGE  –  render quiz
// ─────────────────────────────────────────────────────────────────────────────
async function renderQuizPage() {
  const id = getParam('id');
  if (!id) { window.location.href = 'index.html'; return; }

  const topic = await getTopicById(id);
  if (!topic) { window.location.href = 'index.html'; return; }

  document.title = `Quiz: ${topic.title} – Module_2`;
  setEl('quizTopicIcon',  topic.icon);
  setEl('quizTopicTitle', topic.title);
  setEl('backToTopicFromQuiz', null, 'href', `topic.html?id=${topic.id}`);
  setEl('practiceLinkFromQuiz', null, 'href', `practice.html?id=${topic.id}`);

  if (window.Module2.initQuiz) {
    window.Module2.initQuiz(topic);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Utility helpers
// ─────────────────────────────────────────────────────────────────────────────
function setEl(id, text, attr, val) {
  const el = document.getElementById(id);
  if (!el) return;
  if (text !== null && text !== undefined) el.textContent = normalizeDisplayText(text);
  if (attr && val !== undefined) el.setAttribute(attr, val);
}

function setElHtml(id, html) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = html;
}

// ── Expose globally ───────────────────────────────────────────────────────────
Object.assign(window.Module2, {
  loadTopics,
  getAllTopics,
  getTopicById,
  getParam,
  renderHomepage,
  renderTopicPage,
  renderPracticePage,
  renderQuizPage,
  buildExampleCard,
  formatMathText,
  normalizeDisplayText,
  esc
});
