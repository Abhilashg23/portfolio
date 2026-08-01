/* ============================================================
   ABHILASH G — Portfolio JavaScript
   GSAP 3D Animations, Typing, Nav
   ============================================================ */

// ── Typing Animation ─────────────────────────────────────────
const phrases = [
  'Cloud & Cybersecurity Engineer',
  'Building Secure Architectures',
  'AWS • Flask • Network Security',
  'Engineering for Scale & Safety',
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

// ── Navbar: scroll + active link ────────────────────────────
(function initNav() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

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

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      document.querySelector('.nav-links')?.classList.remove('open');
      document.getElementById('hamburger')?.classList.remove('active');
    });
  });

  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      navMenu?.classList.remove('open');
      hamburger?.classList.remove('active');
    }
  });
})();

document.querySelector('.nav-logo')?.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── GSAP 3D ScrollTrigger Animations ────────────────────────
(function initGSAP() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Initial Hero Animation
  const heroTl = gsap.timeline();
  heroTl.from('.hero-greeting', { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2 })
        .from('.hero-name', { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6")
        .from('.hero-role-wrapper', { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from('.hero-description', { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from('.hero-buttons', { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from('.hero-socials', { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from('.hero-profile-frame', { scale: 0.8, rotationY: -15, opacity: 0, duration: 1.2, ease: "expo.out" }, "-=1")
        .from('.hero-stat', { y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.8");

  // Section Headers
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  // 3D Grid Elements (Projects, Skills, Certs, Achievements)
  const grids = ['.projects-grid', '.skills-grid', '.certs-grid', '.achievements-grid', '.about-cards', '.timeline'];
  
  grids.forEach(gridSelector => {
    const grid = document.querySelector(gridSelector);
    if (!grid) return;
    
    // Select immediate children (cards)
    const cards = grid.children;
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: grid,
        start: "top 85%",
      },
      y: 100,
      z: -100,
      rotationX: -15,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "expo.out"
    });
  });

  // Featured Project 3D Parallax
  const featured = document.querySelector('.featured-project');
  if (featured) {
    gsap.from(featured, {
      scrollTrigger: {
        trigger: featured,
        start: "top 85%",
      },
      scale: 0.95,
      rotationX: 10,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }

  // Generic reveal class (if any are left)
  gsap.utils.toArray('.gsap-reveal').forEach(elem => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 90%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    // Set them to visible since we removed opacity:0 from CSS to prevent FOUC, GSAP handles the from() state
    elem.style.visibility = 'visible';
  });

})();

window.addEventListener('beforeunload', () => window.scrollTo(0, 0));
