/* ============================================================
   ABHILASH G — Portfolio JavaScript
   Typing, Particles, Scroll Reveal, Theme, Nav
   ============================================================ */

// ── Typing Animation ─────────────────────────────────────────
const phrases = [
  'Cloud & Cybersecurity Enthusiast',
  'Building Secure & Scalable Systems',
  'AWS • Django • Network Security',
  'Turning Ideas into Secure Products',
];

(function initTyping() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const phrase = phrases[phraseIdx];
    if (deleting) {
      el.textContent = phrase.substring(0, charIdx--);
      if (charIdx < 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, 500);
        return;
      }
      setTimeout(tick, 40);
    } else {
      el.textContent = phrase.substring(0, charIdx++);
      if (charIdx > phrase.length) {
        deleting = true;
        setTimeout(tick, 2200);
        return;
      }
      setTimeout(tick, 85);
    }
  }
  setTimeout(tick, 800);
})();

// ── Particle Canvas ──────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -999, y: -999 };
  const COUNT = 70, MAX_DIST = 140;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  const COLORS = ['rgba(0,212,255,', 'rgba(124,58,237,', 'rgba(224,64,251,'];

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.vx = (Math.random() - .5) * .5;
      this.vy = -(Math.random() * .6 + .2);
      this.r  = Math.random() * 1.8 + .6;
      this.col = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = Math.random() * .5 + .2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10) this.reset(false);
      // subtle mouse repulsion
      const dx = this.x - mouse.x, dy = this.y - mouse.y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < 80) {
        this.x += dx / d * 1.2;
        this.y += dy / d * 1.2;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.col + this.alpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${.08 * (1 - d / MAX_DIST)})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }
  loop();
})();

// ── Scroll Reveal ────────────────────────────────────────────
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => obs.observe(el));
})();

// ── Navbar: scroll + active link ────────────────────────────
(function initNav() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  // scrolled class
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    highlightActive();
  }, { passive: true });

  function highlightActive() {
    let cur = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 140) cur = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // close mobile nav
      document.querySelector('.nav-links')?.classList.remove('open');
      document.getElementById('hamburger')?.classList.remove('active');
    });
  });

  // hamburger
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('open');
  });

  // close on outside click
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      navMenu?.classList.remove('open');
      hamburger?.classList.remove('active');
    }
  });
})();

// ── Theme Toggle ─────────────────────────────────────────────
(function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const saved = localStorage.getItem('theme') || 'dark';
  if (saved === 'light') applyLight();

  btn?.addEventListener('click', () => {
    if (document.documentElement.dataset.theme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      if (icon) icon.className = 'fas fa-moon';
      localStorage.setItem('theme', 'dark');
    } else {
      applyLight();
    }
  });

  function applyLight() {
    document.documentElement.dataset.theme = 'light';
    if (icon) icon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'light');
  }
})();

// ── Scroll to top on logo click ──────────────────────────────
document.querySelector('.nav-logo')?.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Ensure page starts at top ─────────────────────────────────
window.addEventListener('beforeunload', () => window.scrollTo(0, 0));
