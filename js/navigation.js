/**
 * navigation.js
 * Progress tracking via localStorage, dark mode, scroll-to-top,
 * and accordion toggling.
 */

window.Module2 = window.Module2 || {};

const STORAGE_KEY = 'module2_progress';

// ── Progress helpers ──────────────────────────────────────────────────────────
function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { completedTopics: [], quizScores: {} };
  } catch { return { completedTopics: [], quizScores: {} }; }
}

function saveProgress(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

function markTopicComplete(id) {
  const p = getProgress();
  id = Number(id);
  if (!p.completedTopics.includes(id)) {
    p.completedTopics.push(id);
    saveProgress(p);
    updateCompleteBadge(id);
    showToast('✅ Topic marked as complete!', 'success');
  }
}

function saveQuizScore(topicId, score, total) {
  const p = getProgress();
  p.quizScores[topicId] = { score, total, date: Date.now() };
  saveProgress(p);
}

function isTopicComplete(id) {
  return getProgress().completedTopics.includes(Number(id));
}

function updateCompleteBadge(id) {
  const badge = document.querySelector(`[data-topic-id="${id}"] .topic-completed-badge`);
  if (badge) badge.textContent = '✅ Completed';
}

// ── Dark Mode ─────────────────────────────────────────────────────────────────
function initDarkMode() {
  const pref  = localStorage.getItem('module2_theme') || 'light';
  const btn   = document.getElementById('darkModeToggle');
  applyTheme(pref);
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next    = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('module2_theme', next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('darkModeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ── Active nav highlighting ───────────────────────────────────────────────────
function initNavHighlight() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === page || (page === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
}

// ── Scroll-to-top button ──────────────────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Accordion ─────────────────────────────────────────────────────────────────
function toggleAccordion(btnEl) {
  const item = btnEl.closest('.accordion-item');
  const body = item.querySelector('.accordion-body');
  const isOpen = item.classList.contains('open');

  if (isOpen) {
    item.classList.remove('open');
    body.classList.remove('open');
    btnEl.setAttribute('aria-expanded', 'false');
  } else {
    item.classList.add('open');
    body.classList.add('open');
    btnEl.setAttribute('aria-expanded', 'true');
  }
}

// ── Solved Problem step reveal ────────────────────────────────────────────────
let _currentStep = -1;

function revealNextStep() {
  const steps = document.querySelectorAll('#solvedSteps .solved-step');
  _currentStep = Math.min(_currentStep + 1, steps.length - 1);
  steps.forEach((s, i) => {
    if (i <= _currentStep) s.classList.add('revealed');
  });
  if (_currentStep >= steps.length - 1) {
    const ans = document.getElementById('solvedAnswer');
    if (ans) ans.classList.add('show');
  }
}

function revealAllSteps() {
  document.querySelectorAll('#solvedSteps .solved-step').forEach(s => s.classList.add('revealed'));
  const ans = document.getElementById('solvedAnswer');
  if (ans) ans.classList.add('show');
  _currentStep = 999;
}

function resetSteps() {
  document.querySelectorAll('#solvedSteps .solved-step').forEach(s => s.classList.remove('revealed'));
  const ans = document.getElementById('solvedAnswer');
  if (ans) ans.classList.remove('show');
  _currentStep = -1;
}

// ── Practice helpers ──────────────────────────────────────────────────────────
function selectPracticeOption(qIdx, chosenIdx) {
  const questions = window.Module2._practiceQuestions || [];
  const q = questions[qIdx];
  const fb = document.getElementById(`fb-${qIdx}`);
  if (!q || !Array.isArray(q.options) || typeof q.correct !== 'number' || !fb) return;

  const fmt = (window.Module2 && typeof window.Module2.formatMathText === 'function')
    ? window.Module2.formatMathText
    : esc;

  // Reveal feedback only after a user selects an option.
  window.Module2._practiceAnswered = window.Module2._practiceAnswered || {};
  if (window.Module2._practiceAnswered[qIdx]) return;
  window.Module2._practiceAnswered[qIdx] = true;

  const wrap = document.getElementById(`prac-options-${qIdx}`);
  if (wrap) {
    wrap.querySelectorAll('.quiz-option').forEach((opt, i) => {
      opt.disabled = true;
      if (i === q.correct) opt.classList.add('correct');
      if (i === chosenIdx && chosenIdx !== q.correct) opt.classList.add('wrong');
      if (i === chosenIdx) opt.classList.add('selected');
    });
  }

  const isCorrect = chosenIdx === q.correct;
  const explanation = q.explanation ? ` ${fmt(q.explanation)}` : '';
  const correctAnswer = fmt(q.options[q.correct] ?? '');

  fb.className = 'feedback-box show ' + (isCorrect ? 'correct' : 'incorrect');
  fb.innerHTML = isCorrect
    ? `✅ <strong>Correct.</strong>${explanation}`
    : `❌ <strong>Not correct.</strong> Correct answer: <strong>${correctAnswer}</strong>.${explanation}`;
}

function toggleHint(idx) {
  const box = document.getElementById(`hint-${idx}`);
  if (box) box.classList.toggle('show');
}

function toggleSteps(idx) {
  const box = document.getElementById(`steps-${idx}`);
  if (box) box.classList.toggle('show');
}

function checkPracticeAnswer(idx) {
  // Legacy handler kept for compatibility with older markup.
  showToast('Select an option to check your answer.', '');
}

// ── "Mark Complete" button on topic page ──────────────────────────────────────
function initMarkComplete() {
  const btn = document.getElementById('markCompleteBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const id = window.Module2.currentTopicId;
    if (id) {
      markTopicComplete(id);
      btn.textContent = '✅ Completed!';
      btn.disabled = true;
      btn.classList.remove('btn-secondary');
      btn.classList.add('btn-success');
    }
  });

  // Pre-fill if already done
  const id = window.Module2.currentTopicId;
  if (id && isTopicComplete(id)) {
    btn.textContent = '✅ Completed!';
    btn.disabled = true;
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-success');
  }
}

// ── Toast notifications ───────────────────────────────────────────────────────
function showToast(msg, type = '') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// ── Keyboard accessibility for topic cards ────────────────────────────────────
function initCardKeyboard() {
  document.querySelectorAll('.topic-card[tabindex]').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        const link = card.querySelector('a');
        if (link) link.click();
      }
    });
  });
}

// ── Animate section headings into view (Intersection Observer) ────────────────
function initScrollAnimations() {
  if (!window.IntersectionObserver) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-fadeInUp').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ── Bootstrap all navigation features ────────────────────────────────────────
function initNavigation() {
  initDarkMode();
  initNavHighlight();
  initScrollTop();
}

// ── Escape HTML (needed here too) ─────────────────────────────────────────────
function esc(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Expose globally ───────────────────────────────────────────────────────────
Object.assign(window.Module2, {
  getProgress,
  saveProgress,
  markTopicComplete,
  saveQuizScore,
  isTopicComplete,
  initNavigation,
  initMarkComplete,
  initScrollAnimations,
  initCardKeyboard,
  toggleAccordion,
  revealNextStep,
  revealAllSteps,
  resetSteps,
  selectPracticeOption,
  toggleHint,
  toggleSteps,
  checkPracticeAnswer,
  showToast
});

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', initNavigation);
