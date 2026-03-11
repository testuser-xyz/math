/**
 * interactions.js
 * Handles:
 *   - Canvas graph drawing (exponential & logarithmic)
 *   - Graph animation and controls
 *   - Smooth page transitions
 *   - Miscellaneous UI interactions
 */

window.Module2 = window.Module2 || {};

// ─────────────────────────────────────────────────────────────────────────────
// Graph Drawing Engine
// ─────────────────────────────────────────────────────────────────────────────

let _graphState = {
  canvas:   null,
  ctx:      null,
  type:     'exponential',
  animFrame: null,
  progress:  1   // 0 → 1 animation progress
};

function initGraph() {
  const canvas = document.getElementById('topicGraph');
  if (!canvas) return;

  const topic = window.Module2.currentTopic;
  const type  = (topic && topic.graphType) || 'exponential';

  _graphState.canvas   = canvas;
  _graphState.ctx      = canvas.getContext('2d');
  _graphState.type     = type;
  _graphState.progress = 1;

  // Scale canvas for sharp rendering on HiDPI displays
  scaleCanvas(canvas);

  drawGraph(1);
}

function scaleCanvas(canvas) {
  const dpr  = window.devicePixelRatio || 1;
  const rect  = canvas.getBoundingClientRect();
  const w     = canvas.offsetWidth  || 480;
  const h     = canvas.offsetHeight || 260;
  canvas.width  = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width  = w + 'px';
  canvas.style.height = h + 'px';
  canvas.getContext('2d').scale(dpr, dpr);
}

function drawGraph(progress) {
  const canvas = _graphState.canvas;
  const ctx    = _graphState.ctx;
  if (!canvas || !ctx) return;

  const W = canvas.offsetWidth  || 480;
  const H = canvas.offsetHeight || 260;

  // Clear
  ctx.clearRect(0, 0, W, H);

  // Colours from CSS variables (with fallback)
  const isDark   = document.documentElement.getAttribute('data-theme') === 'dark';
  const bgColor  = isDark ? '#252A35' : '#FFFFFF';
  const axisColor= isDark ? '#5A6A7A' : '#C8D4E0';
  const gridColor= isDark ? '#303848' : '#EDF1F7';
  const curveColor='#4A90D9';
  const textColor= isDark ? '#8FA5BC' : '#607080';
  const pointColor='#E8A838';

  // Margins
  const mx = 52, my = 24, mxr = 20, myb = 36;
  const plotW = W - mx - mxr;
  const plotH = H - my - myb;

  // Draw background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, W, H);

  // ── Axis ranges ────────────────────────────────────────────────────────────
  let xMin, xMax, yMin, yMax;
  if (_graphState.type === 'logarithmic') {
    xMin = 0.05; xMax = 12; yMin = -2; yMax = 3;
  } else {
    xMin = -3; xMax = 4; yMin = -0.5; yMax = 10;
  }

  // Coordinate mappers
  const px = x => mx + ((x - xMin) / (xMax - xMin)) * plotW;
  const py = y => my + plotH - ((y - yMin) / (yMax - yMin)) * plotH;

  // ── Grid lines ─────────────────────────────────────────────────────────────
  ctx.strokeStyle = gridColor;
  ctx.lineWidth   = 1;
  ctx.setLineDash([3, 4]);

  // Vertical grid
  const xSteps = _graphState.type === 'logarithmic' ? [1,2,4,6,8,10] : [-2,-1,0,1,2,3];
  xSteps.forEach(xv => {
    ctx.beginPath(); ctx.moveTo(px(xv), my); ctx.lineTo(px(xv), my + plotH); ctx.stroke();
  });

  // Horizontal grid
  const ySteps = _graphState.type === 'logarithmic' ? [-1,0,1,2] : [0,2,4,6,8];
  ySteps.forEach(yv => {
    ctx.beginPath(); ctx.moveTo(mx, py(yv)); ctx.lineTo(mx + plotW, py(yv)); ctx.stroke();
  });
  ctx.setLineDash([]);

  // ── Axes ──────────────────────────────────────────────────────────────────
  ctx.strokeStyle = axisColor;
  ctx.lineWidth   = 1.5;

  // x-axis
  const yAxisY = py(0);
  ctx.beginPath(); ctx.moveTo(mx, yAxisY); ctx.lineTo(mx + plotW, yAxisY); ctx.stroke();

  // y-axis
  const xAxisX = px(0);
  if (xAxisX >= mx && xAxisX <= mx + plotW) {
    ctx.beginPath(); ctx.moveTo(xAxisX, my); ctx.lineTo(xAxisX, my + plotH); ctx.stroke();
  }

  // Axis arrows
  drawArrow(ctx, mx + plotW - 2, yAxisY, mx + plotW + 8, yAxisY, axisColor);
  drawArrow(ctx, xAxisX, my + 2, xAxisX, my - 8, axisColor);

  // ── Axis labels ────────────────────────────────────────────────────────────
  ctx.fillStyle   = textColor;
  ctx.font        = '11px "Source Sans Pro", system-ui, sans-serif';
  ctx.textAlign   = 'center';
  ctx.textBaseline= 'top';

  xSteps.forEach(xv => {
    if (Math.abs(xv) < 0.01) return;
    ctx.fillText(xv, px(xv), yAxisY + 5);
  });

  ctx.textAlign   = 'right';
  ctx.textBaseline= 'middle';
  ySteps.forEach(yv => {
    if (Math.abs(yv) < 0.01) return;
    ctx.fillText(yv, mx - 6, py(yv));
  });

  // "x" and "y" axis labels
  ctx.fillStyle   = textColor;
  ctx.font        = 'bold 12px "Nunito", system-ui, sans-serif';
  ctx.textAlign   = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('x', mx + plotW + 10, yAxisY);
  ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
  ctx.fillText('y', xAxisX, my - 10);

  // ── Curve ─────────────────────────────────────────────────────────────────
  const numPoints = 250;
  const stopAt    = Math.floor(numPoints * progress);

  ctx.beginPath();
  ctx.strokeStyle = curveColor;
  ctx.lineWidth   = 2.5;
  ctx.lineJoin    = 'round';

  let firstPoint = true;
  for (let i = 0; i <= stopAt; i++) {
    const t = i / (numPoints - 1);
    let xv, yv;

    if (_graphState.type === 'logarithmic') {
      xv = xMin + t * (xMax - xMin);
      if (xv <= 0) { firstPoint = true; continue; }
      yv = Math.log(xv) / Math.log(2);   // log base 2
    } else {
      xv = xMin + t * (xMax - xMin);
      yv = Math.pow(2, xv);              // 2^x
    }

    // Clamp to plot area
    if (yv > yMax + 1 || yv < yMin - 1) { firstPoint = true; continue; }

    const cx = px(xv); const cy = py(yv);
    if (firstPoint) { ctx.moveTo(cx, cy); firstPoint = false; }
    else ctx.lineTo(cx, cy);
  }
  ctx.stroke();

  // ── Key points ────────────────────────────────────────────────────────────
  if (progress >= 1) {
    const keyPoints = _graphState.type === 'logarithmic'
      ? [[1, 0], [2, 1], [4, 2], [8, 3]]
      : [[-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]];

    keyPoints.forEach(([xv, yv]) => {
      if (xv < xMin || xv > xMax || yv < yMin || yv > yMax) return;
      const cx = px(xv); const cy = py(yv);

      // Glow
      ctx.beginPath();
      ctx.arc(cx, cy, 7, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(74,144,217,0.15)';
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = pointColor;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.fill(); ctx.stroke();

      // Label
      ctx.fillStyle   = textColor;
      ctx.font        = '10px "Source Sans Pro", system-ui, sans-serif';
      ctx.textAlign   = 'left';
      ctx.textBaseline= 'bottom';
      const labelX = _graphState.type === 'logarithmic' ? `(${xv},${yv})` : `(${xv},${yv})`;
      ctx.fillText(labelX, cx + 6, cy - 3);
    });
  }

  // ── Equation label ────────────────────────────────────────────────────────
  const eqLabel = _graphState.type === 'logarithmic' ? 'y = log₂(x)' : 'y = 2ˣ';
  ctx.font      = 'bold 13px "Nunito", system-ui, sans-serif';
  ctx.fillStyle = curveColor;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillText(eqLabel, mx + plotW, my + 4);
}

function drawArrow(ctx, x1, y1, x2, y2, color) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const len   = 6;
  ctx.strokeStyle = color;
  ctx.fillStyle   = color;
  ctx.lineWidth   = 1.5;
  ctx.beginPath();
  ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - len * Math.cos(angle - 0.45), y2 - len * Math.sin(angle - 0.45));
  ctx.lineTo(x2 - len * Math.cos(angle + 0.45), y2 - len * Math.sin(angle + 0.45));
  ctx.closePath(); ctx.fill();
}

// ── Animate (draw curve progressively) ───────────────────────────────────────
function animateGraph() {
  cancelAnimationFrame(_graphState.animFrame);
  _graphState.progress = 0;

  const startTime = performance.now();
  const duration  = 1800;

  function frame(now) {
    const t = Math.min((now - startTime) / duration, 1);
    // Ease-out cubic
    _graphState.progress = 1 - Math.pow(1 - t, 3);
    drawGraph(_graphState.progress);
    if (t < 1) _graphState.animFrame = requestAnimationFrame(frame);
  }
  _graphState.animFrame = requestAnimationFrame(frame);
}

function resetGraph() {
  cancelAnimationFrame(_graphState.animFrame);
  _graphState.progress = 1;
  drawGraph(1);
}

// ─────────────────────────────────────────────────────────────────────────────
// Smooth hover effects for example tables
// ─────────────────────────────────────────────────────────────────────────────
function initTableHovers() {
  document.addEventListener('mouseover', e => {
    const row = e.target.closest('.example-table tr');
    if (row && !row.closest('thead')) {
      row.style.background = 'var(--primary-light)';
      row.style.color = '#fff';
      row.style.cursor = 'default';
    }
  });
  document.addEventListener('mouseout', e => {
    const row = e.target.closest('.example-table tr');
    if (row && !row.closest('thead')) {
      row.style.background = '';
      row.style.color = '';
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Formula hover tooltips for math expressions
// ─────────────────────────────────────────────────────────────────────────────
const MATH_TOOLTIPS = {
  'bˣ':   'b = base (bottom number), x = exponent (floating top-right number)',
  'eˣ':   'e is a fixed math constant ≈ 2.718. It represents continuous/non-stop growth.',
  'ln':   'ln means Natural Logarithm — the base is secretly e ≈ 2.718',
  'log':  'log with no base shown means base 10 (Common Logarithm)',
  'A = P(1+r)ᵗ': 'Compound Interest: A=Final amount, P=Principal, r=rate (decimal), t=time (years)',
  'A = Peʳᵗ':    'Continuous Growth: A=Final, P=Principal, e=2.718, r=rate, t=time'
};

function initMathTooltips() {
  document.querySelectorAll('.math-formula, .math-inline, .solved-step-math').forEach(el => {
    const text = el.textContent;
    for (const [term, tip] of Object.entries(MATH_TOOLTIPS)) {
      if (text.includes(term)) {
        el.title = tip;
        el.style.cursor = 'help';
        break;
      }
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Resize handler – redraw canvas on window resize
// ─────────────────────────────────────────────────────────────────────────────
let _resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(_resizeTimer);
  _resizeTimer = setTimeout(() => {
    if (_graphState.canvas) {
      scaleCanvas(_graphState.canvas);
      drawGraph(_graphState.progress);
    }
  }, 150);
});

// ─────────────────────────────────────────────────────────────────────────────
// Redraw graph when dark / light theme toggles
// ─────────────────────────────────────────────────────────────────────────────
const _themeObserver = new MutationObserver(() => {
  if (_graphState.canvas) drawGraph(_graphState.progress);
});
_themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

// ─────────────────────────────────────────────────────────────────────────────
// Keyboard shortcut hints (topic page)
// ─────────────────────────────────────────────────────────────────────────────
function initKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    // Space / Enter = reveal next step when focused on solved section
    if ((e.key === 'ArrowRight') && document.getElementById('topicAccordion')) {
      const nextBtn = document.getElementById('nextTopicBtn');
      if (nextBtn && nextBtn.href) window.location.href = nextBtn.href;
    }
    if ((e.key === 'ArrowLeft') && document.getElementById('topicAccordion')) {
      const prevBtn = document.getElementById('prevTopicBtn');
      if (prevBtn && prevBtn.href) window.location.href = prevBtn.href;
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Init for topic page
// ─────────────────────────────────────────────────────────────────────────────
function initInteractions() {
  initTableHovers();
  initKeyboardShortcuts();

  // Init graph after short delay (so accordion may be open)
  setTimeout(() => {
    initGraph();
    initMathTooltips();
  }, 300);
}

// ── Expose globally ───────────────────────────────────────────────────────────
Object.assign(window.Module2, {
  initInteractions,
  initGraph,
  animateGraph,
  resetGraph,
  drawGraph
});
