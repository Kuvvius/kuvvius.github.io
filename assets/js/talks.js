// Talks carousel: centers one card at a time, auto-advances every 5s, pauses on hover/touch.
(function () {
  const grid = document.getElementById('talks-grid');
  if (!grid) return;
  const prevBtn = document.getElementById('talks-prev');
  const nextBtn = document.getElementById('talks-next');
  const cards = () => grid.querySelectorAll('.talk-card');

  let index = 1;
  let timer;
  let scrollTimeout;

  function updateActiveCard() {
    requestAnimationFrame(() => {
      const gridRect = grid.getBoundingClientRect();
      const center = gridRect.left + grid.clientWidth / 2;
      let active = null;
      let best = Infinity;
      cards().forEach((card) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - center);
        if (d < best) { best = d; active = card; }
      });
      cards().forEach((card) => card.classList.toggle('active', card === active));
    });
  }

  function scrollToCard(i, behavior) {
    const card = cards()[i];
    if (!card) return;
    const r = card.getBoundingClientRect();
    const g = grid.getBoundingClientRect();
    grid.scrollTo({ left: grid.scrollLeft + (r.left - g.left) - (g.width - r.width) / 2, behavior: behavior || 'smooth' });
    setTimeout(updateActiveCard, 650);
  }

  const next = () => { index = (index + 1) % cards().length; scrollToCard(index); };
  const prev = () => { index = (index - 1 + cards().length) % cards().length; scrollToCard(index); };
  const start = () => { timer = setInterval(next, 5000); };
  const stop = () => clearInterval(timer);

  nextBtn.addEventListener('click', () => { stop(); next(); start(); });
  prevBtn.addEventListener('click', () => { stop(); prev(); start(); });
  grid.addEventListener('mouseenter', stop);
  grid.addEventListener('mouseleave', start);
  grid.addEventListener('touchstart', stop, { passive: true });
  grid.addEventListener('touchend', () => setTimeout(start, 3000));
  grid.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveCard, 50);
  });
  window.addEventListener('resize', updateActiveCard);

  setTimeout(() => { scrollToCard(index, 'auto'); updateActiveCard(); }, 200);
  start();
})();
