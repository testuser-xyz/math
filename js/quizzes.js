/**
 * quizzes.js
 * Handles rendering and logic for the quiz page.
 * Multiple-choice format with instant feedback and score tracking.
 */

window.Module2 = window.Module2 || {};

let _quiz = {
  topic:      null,
  questions:  [],
  current:    0,
  score:      0,
  answered:   false,
  userScores: []   // { questionIdx, chose, correct }
};

// ── Initialise quiz for a topic ───────────────────────────────────────────────
function initQuiz(topic) {
  _quiz.topic     = topic;
  _quiz.questions = (topic.quiz || []).slice();
  _quiz.current   = 0;
  _quiz.score     = 0;
  _quiz.answered  = false;
  _quiz.userScores = [];

  if (_quiz.questions.length === 0) {
    const container = document.getElementById('quizContainer');
    if (container) container.innerHTML =
      '<p class="text-center" style="color:var(--text-muted);padding:3rem">No quiz questions for this topic yet.</p>';
    return;
  }

  renderQuestion();
}

// ── Render current question ───────────────────────────────────────────────────
function renderQuestion() {
  const q   = _quiz.questions[_quiz.current];
  const num = _quiz.current + 1;
  const tot = _quiz.questions.length;

  _quiz.answered = false;

  // Update progress bar and counter
  const pctFill = document.getElementById('quizProgressFill');
  const counter = document.getElementById('quizCounter');
  if (pctFill) pctFill.style.width = `${Math.round(((num - 1) / tot) * 100)}%`;
  if (counter) counter.textContent = `Question ${num} of ${tot}`;

  // Hide score card, show quiz card
  showEl('quizCard',  true);
  showEl('quizScoreCard', false);

  const qText = document.getElementById('quizQuestionText');
  if (qText) qText.textContent = q.question;

  const optList = document.getElementById('quizOptions');
  if (!optList) return;

  const letters = ['A','B','C','D','E'];
  optList.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-option" data-idx="${i}" onclick="window.Module2.selectOption(this, ${i})">
      <span class="quiz-option-letter">${letters[i]}</span>
      <span>${escQ(opt)}</span>
    </button>`).join('');

  // Hide explanation and disable Next until answered
  const expBox = document.getElementById('quizExplanation');
  if (expBox) {
    expBox.classList.remove('show');
    expBox.classList.add('hidden');
    expBox.textContent = '';
  }
  const nextBtn = document.getElementById('quizNextBtn');
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.textContent = num < tot ? 'Next Question →' : 'See Results';
    nextBtn.onclick = () => advanceQuiz();
  }
}

// ── Option selection ──────────────────────────────────────────────────────────
function selectOption(btnEl, chosenIdx) {
  if (_quiz.answered) return;
  _quiz.answered = true;

  const q         = _quiz.questions[_quiz.current];
  const isCorrect = chosenIdx === q.correct;
  if (isCorrect) _quiz.score++;

  _quiz.userScores.push({ q: _quiz.current, chose: chosenIdx, correct: isCorrect });

  // Visually mark all options
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach((opt, i) => {
    opt.disabled = true;
    if (i === q.correct)  opt.classList.add('correct');
    if (i === chosenIdx && !isCorrect) opt.classList.add('wrong');
    if (i === chosenIdx)  opt.classList.add('selected');
  });

  // Show explanation
  const expBox = document.getElementById('quizExplanation');
  if (expBox) {
    expBox.textContent = (isCorrect ? '✅ Correct! ' : '❌ Not quite. ') + q.explanation;
    expBox.classList.remove('hidden');
    expBox.classList.add('show');
    expBox.style.borderLeftColor = isCorrect ? 'var(--success)' : 'var(--error)';
  }

  // Enable next button
  const nextBtn = document.getElementById('quizNextBtn');
  if (nextBtn) nextBtn.disabled = false;

  // Small toast feedback
  window.Module2.showToast && window.Module2.showToast(
    isCorrect ? '🎉 Correct!' : '📖 Almost — check the explanation!',
    isCorrect ? 'success' : ''
  );
}

// ── Advance or finish ─────────────────────────────────────────────────────────
function advanceQuiz() {
  if (_quiz.current < _quiz.questions.length - 1) {
    _quiz.current++;
    renderQuestion();
    // Scroll to top of quiz section
    document.getElementById('quizCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    showResults();
  }
}

// ── Show results ──────────────────────────────────────────────────────────────
function showResults() {
  const score = _quiz.score;
  const total = _quiz.questions.length;
  const pct   = Math.round((score / total) * 100);

  // Save score
  if (window.Module2.saveQuizScore && _quiz.topic) {
    window.Module2.saveQuizScore(_quiz.topic.id, score, total);
  }

  // Update progress bar to 100%
  const pctFill = document.getElementById('quizProgressFill');
  if (pctFill) pctFill.style.width = '100%';

  // Hide quiz card, show score card
  showEl('quizCard',      false);
  showEl('quizScoreCard', true);

  // Fill score card
  setTextEl('quizScoreNum',     `${score}/${total}`);
  setTextEl('quizScorePct',     `${pct}% correct`);
  setTextEl('quizScoreEmoji',   getScoreEmoji(pct));
  setTextEl('quizScoreMessage', getScoreMessage(pct));

  // Stars
  renderStars(pct);

  // Wrong answers review
  buildReviewList();

  // Retry + other links
  const retryBtn = document.getElementById('quizRetryBtn');
  if (retryBtn) retryBtn.onclick = () => initQuiz(_quiz.topic);
}

function getScoreEmoji(pct) {
  if (pct === 100) return '🏆';
  if (pct >= 80)   return '🎉';
  if (pct >= 60)   return '👍';
  if (pct >= 40)   return '💪';
  return '📖';
}

function getScoreMessage(pct) {
  if (pct === 100) return 'Perfect score! You have mastered this topic! 🌟';
  if (pct >= 80)   return 'Excellent work! You really understand this material!';
  if (pct >= 60)   return 'Good job! A little more practice and you will nail it!';
  if (pct >= 40)   return 'Keep going! Review the topic explanation and try again.';
  return 'Review the topic explanation and try again.';
}

function renderStars(pct) {
  const starsEl = document.getElementById('quizStars');
  if (!starsEl) return;
  const lit = pct >= 80 ? 3 : pct >= 50 ? 2 : pct >= 25 ? 1 : 0;
  starsEl.innerHTML = [1,2,3].map(n => `
    <span class="star ${n <= lit ? 'lit' : ''}">⭐</span>`).join('');

  // Staggered reveal animation
  starsEl.querySelectorAll('.star.lit').forEach((s, i) => {
    s.style.transitionDelay = `${i * 0.2}s`;
  });
}

function buildReviewList() {
  const el = document.getElementById('quizReview');
  if (!el) return;

  const wrong = _quiz.userScores.filter(r => !r.correct);
  if (wrong.length === 0) {
    el.innerHTML = '<p style="color:var(--success);font-weight:700">🎉 You answered everything correctly!</p>';
    return;
  }

  el.innerHTML = `
    <h4 style="margin-bottom:.75rem">📖 Review These Questions:</h4>
    ${wrong.map(r => {
      const q   = _quiz.questions[r.q];
      const letters = ['A','B','C','D','E'];
      return `<div style="background:var(--surface-2);border-radius:8px;padding:.85rem;margin-bottom:.65rem;font-size:.9rem">
        <p style="font-weight:700;margin-bottom:.5rem">${escQ(q.question)}</p>
        <p style="color:var(--error)">❌ You chose: ${letters[r.chose]}. ${escQ(q.options[r.chose])}</p>
        <p style="color:var(--success)">✅ Correct: ${letters[q.correct]}. ${escQ(q.options[q.correct])}</p>
        <p style="color:var(--text-muted);font-size:.85rem;margin-top:.3rem">${escQ(q.explanation)}</p>
      </div>`;
    }).join('')}`;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function showEl(id, visible) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('hidden', !visible);
}
function setTextEl(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}
function escQ(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Expose globally ──────────────────────────────────────────────────────────
Object.assign(window.Module2, {
  initQuiz,
  selectOption,
  advanceQuiz
});
