/**
 * contentLoader.js
 * Fetches topics.json and renders topic content into the DOM.
 * Works on GitHub Pages (HTTP) and via local dev server.
 */

const TOPICS_URL = './data/topics.json';
window.MathPath = window.MathPath || {};

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

// ─────────────────────────────────────────────────────────────────────────────
// INDEX PAGE  –  render topic cards grid
// ─────────────────────────────────────────────────────────────────────────────
async function renderHomepage() {
  const grid   = document.getElementById('topicsGrid');
  const pathEl = document.getElementById('learningPathSteps');
  if (!grid) return;

  grid.innerHTML = '<div class="loading-spinner"><div class="spinner"></div> Loading topics…</div>';

  const topics   = await getAllTopics();
  const progress = window.MathPath.getProgress ? window.MathPath.getProgress() : {};
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
          <span class="topic-card-icon">${esc(t.icon)}</span>
          <div class="topic-card-number">Topic ${i + 1}</div>
          <div class="topic-card-title">${esc(t.title)}</div>
          <p class="topic-card-summary">${esc(t.summary)}</p>
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
            ${completed ? '✅' : esc(t.icon)}
          </div>
          <div class="path-step-content">
            <div class="path-step-title">${esc(t.title)}</div>
            <div class="path-step-meta">${esc(t.summary.slice(0,70))}…</div>
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
  document.title = `${topic.title} – MathPath`;
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
  setEl('topicFormula', topic.formula || '');

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
          ${esc(t.icon)} ${esc(t.title)}
        </a>
      </li>`).join('');
  }

  // Mark active in nav
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === 'topic.html') a.classList.add('active');
  });

  // Store current topic for progress tracking
  window.MathPath.currentTopicId = topic.id;
  window.MathPath.currentTopic   = topic;
}

function buildAccordion(t) {
  const sections = [
    {
      id: 'explain', emoji: '💡', title: 'Simple Explanation',
      body: `<p>${esc(t.explanation).replace(/\n/g,'<br>')}</p>
             <div class="key-idea">🔑 <strong>Key Idea:</strong> ${esc(t.keyIdea)}</div>`
    },
    {
      id: 'steps', emoji: '📋', title: 'Step-by-Step Process',
      body: `<ol class="steps-list">${t.steps.map((s,i)=>`
               <li><span class="step-num">${i+1}</span><span>${esc(s)}</span></li>`).join('')}
             </ol>`
    },
    {
      id: 'daily', emoji: '🌍', title: 'Daily Life Example',
      body: buildExampleCard(t.dailyExample)
    },
    {
      id: 'bio', emoji: '🔬', title: 'Biochemistry Example',
      body: buildExampleCard(t.bioExample)
    },
    {
      id: 'visual', emoji: '📈', title: 'Interactive Graph',
      body: `<div class="graph-container">
               <div class="graph-title">${t.graphType === 'logarithmic' ? 'Logarithmic' : 'Exponential'} Growth Curve</div>
               <canvas id="topicGraph" class="graph-canvas" width="480" height="260"></canvas>
               <div class="graph-controls">
                 <button class="btn btn-sm btn-secondary" onclick="window.MathPath.animateGraph()">▶ Animate</button>
                 <button class="btn btn-sm btn-secondary" onclick="window.MathPath.resetGraph()">↺ Reset</button>
               </div>
               <div class="graph-legend">
                 <div class="legend-item"><div class="legend-dot" style="background:#4A90D9"></div> y = ${t.graphType === 'logarithmic' ? 'log(x)' : '2ˣ'}</div>
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
                 ${esc(t.didYouKnow)}
               </div>
             </div>`
    }
  ];

  return sections.map((sec, i) => `
    <div class="accordion-item ${i === 0 ? 'open' : ''}" data-section="${sec.id}">
      <button class="accordion-btn" aria-expanded="${i === 0}" onclick="window.MathPath.toggleAccordion(this)">
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
    `<tr><td><strong>${esc(r.label)}</strong></td><td>${esc(r.value)}</td></tr>`
  ).join('') : '';
  return `
    <div class="example-card">
      <div class="example-card-title">${esc(ex.title)}</div>
      <p class="example-story">${esc(ex.story)}</p>
      ${rows ? `<table class="example-table">
        <thead><tr><th>${esc(ex.title)}</th><th>Value</th></tr></thead>
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
        <div class="solved-step-text">${esc(s.text)}</div>
        <code class="solved-step-math">${esc(s.math)}</code>
      </div>
    </div>`).join('');

  return `
    <div class="solved-problem">
      <div class="solved-question">❓ ${esc(sp.question)}</div>
      <div class="solved-steps" id="solvedSteps">${steps}</div>
      <div class="solved-answer" id="solvedAnswer">✅ <strong>Answer:</strong> ${esc(sp.answer)}</div>
      <div class="solved-controls">
        <button class="btn btn-accent btn-sm" onclick="window.MathPath.revealNextStep()">👁 Reveal Next Step</button>
        <button class="btn btn-success btn-sm" onclick="window.MathPath.revealAllSteps()">✅ Show All</button>
        <button class="btn btn-secondary btn-sm" onclick="window.MathPath.resetSteps()">↺ Reset</button>
      </div>
    </div>`;
}

function buildTipsMistakes(tips, mistakes) {
  const tipsHtml = (tips || []).map(t => `
    <div class="tip-item">
      <span class="tip-icon">✅</span>
      <span>${esc(t)}</span>
    </div>`).join('');
  const mistakesHtml = (mistakes || []).map(m => `
    <div class="mistake-item">
      <span class="tip-icon">⚠️</span>
      <span>${esc(m)}</span>
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

  document.title = `Practice: ${topic.title} – MathPath`;
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

  container.innerHTML = probs.map((p, i) => `
    <div class="practice-question-card animate-fadeInUp delay-${i % 3 + 1}">
      <div class="practice-q-number">Practice Problem ${i + 1}</div>
      <div class="practice-q-text">${esc(p.question)}</div>
      <textarea class="practice-answer-input" id="ans-${i}" placeholder="Type your answer here…" rows="2"></textarea>
      <div class="practice-controls">
        <button class="btn btn-sm btn-primary" onclick="window.MathPath.checkPracticeAnswer(${i})">✔ Check Answer</button>
        <button class="btn btn-sm btn-secondary" onclick="window.MathPath.toggleHint(${i})">💡 Show Hint</button>
        <button class="btn btn-sm btn-accent"    onclick="window.MathPath.toggleSteps(${i})">📋 Show Steps</button>
      </div>
      <div class="hint-box" id="hint-${i}">
        <strong>💡 Hint:</strong> ${esc(p.hint)}
      </div>
      <div class="answer-steps" id="steps-${i}">
        <strong>📋 Step-by-Step Solution:</strong>
        <ol>${p.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
        <div style="margin-top:.75rem;padding:.65rem 1rem;background:#eafaf1;border-left:3px solid var(--success);border-radius:6px;font-weight:700;color:var(--success)">
          ✅ Answer: ${esc(p.answer)}
        </div>
      </div>
      <div class="feedback-box" id="fb-${i}"></div>
    </div>`).join('');

  // Store answers for checking
  window.MathPath._practiceAnswers = probs.map(p => p.answer);
}

// ─────────────────────────────────────────────────────────────────────────────
// QUIZ PAGE  –  render quiz
// ─────────────────────────────────────────────────────────────────────────────
async function renderQuizPage() {
  const id = getParam('id');
  if (!id) { window.location.href = 'index.html'; return; }

  const topic = await getTopicById(id);
  if (!topic) { window.location.href = 'index.html'; return; }

  document.title = `Quiz: ${topic.title} – MathPath`;
  setEl('quizTopicIcon',  topic.icon);
  setEl('quizTopicTitle', topic.title);
  setEl('backToTopicFromQuiz', null, 'href', `topic.html?id=${topic.id}`);
  setEl('practiceLinkFromQuiz', null, 'href', `practice.html?id=${topic.id}`);

  if (window.MathPath.initQuiz) {
    window.MathPath.initQuiz(topic);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Utility helpers
// ─────────────────────────────────────────────────────────────────────────────
function setEl(id, text, attr, val) {
  const el = document.getElementById(id);
  if (!el) return;
  if (text !== null && text !== undefined) el.textContent = text;
  if (attr && val !== undefined) el.setAttribute(attr, val);
}

// ── Expose globally ───────────────────────────────────────────────────────────
Object.assign(window.MathPath, {
  loadTopics,
  getAllTopics,
  getTopicById,
  getParam,
  renderHomepage,
  renderTopicPage,
  renderPracticePage,
  renderQuizPage,
  buildExampleCard,
  esc
});
