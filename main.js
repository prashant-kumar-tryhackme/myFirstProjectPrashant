// ============================================
//  JAN SEVA KENDRA - Main JavaScript File
//  Sab functionality yahan hai
// ============================================

/* ===== SCROLL PROGRESS BAR ===== */
const progressBar = document.createElement('div');
progressBar.id = 'scrollProgress';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + '%';
});

/* ===== PRELOADER ===== */
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('hide');
  }, 1800);
});

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close on nav link click (mobile)
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinkItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

/* ===== SCROLL TO TOP ===== */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== COUNTER ANIMATION ===== */
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// Trigger counters when hero is visible
const counters = document.querySelectorAll('.stat-num');
let countersStarted = false;

const counterObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !countersStarted) {
    countersStarted = true;
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      animateCounter(counter, target);
    });
  }
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) counterObserver.observe(heroStats);

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  // Add reveal classes to elements
  document.querySelectorAll('.section-header').forEach(el => el.classList.add('reveal'));
  document.querySelectorAll('.service-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 6 * 0.07) + 's';
  });
  document.querySelectorAll('.cert-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.12) + 's';
  });
  document.querySelectorAll('.about-image-col').forEach(el => el.classList.add('reveal-left'));
  document.querySelectorAll('.about-content').forEach(el => el.classList.add('reveal-right'));
  document.querySelectorAll('.owner-img-col').forEach(el => el.classList.add('reveal-left'));
  document.querySelectorAll('.owner-content').forEach(el => el.classList.add('reveal-right'));
  document.querySelectorAll('.address-card, .map-placeholder').forEach(el => el.classList.add('reveal'));
  document.querySelectorAll('.contact-form-box, .contact-info-box').forEach(el => el.classList.add('reveal'));
  document.querySelectorAll('.feature-item').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.1) + 's';
  });

  // Intersection Observer for reveal
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
  });
}

// Run after DOM ready
document.addEventListener('DOMContentLoaded', initScrollReveal);

/* ===== SEARCH FUNCTIONALITY ===== */
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');

searchInput.addEventListener('input', function () {
  const query = this.value.trim().toLowerCase();

  if (query.length < 1) {
    searchDropdown.classList.remove('active');
    searchDropdown.innerHTML = '';
    return;
  }

  const results = searchData.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.hindi.includes(query)
  );

  if (results.length === 0) {
    searchDropdown.innerHTML = '<div class="search-no-result"><i class="fas fa-search" style="opacity:0.4;margin-bottom:6px;display:block"></i>Koi service nahi mili / कोई सेवा नहीं मिली</div>';
  } else {
    searchDropdown.innerHTML = results.map(item => `
      <div class="search-item" onclick="handleSearchClick('${item.section}', '${item.action}')">
        <i class="${item.icon}"></i>
        <span>${item.name} — <em style="color:#778ab0;font-size:0.82em">${item.hindi}</em></span>
      </div>
    `).join('');
  }

  searchDropdown.classList.add('active');
});

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-search')) {
    searchDropdown.classList.remove('active');
  }
});

function handleSearchClick(section, action) {
  searchDropdown.classList.remove('active');
  searchInput.value = '';

  // Scroll to section
  const target = document.getElementById(section) || document.getElementById('services');
  if (target) {
    const offset = target.offsetTop - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }

  // Open modal if action
  if (action && action !== 'null') {
    setTimeout(() => openModal(action), 600);
  }
}

/* ===== SERVICE MODAL ===== */
function openModal(serviceKey) {
  const data = servicesData[serviceKey];
  if (!data) return;

  const modal = document.getElementById('serviceModal');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalHindi = document.getElementById('modalHindi');
  const modalList = document.getElementById('modalList');

  // Set icon class
  modalIcon.className = 'modal-icon ' + data.iconClass;
  modalIcon.innerHTML = `<i class="${data.icon}"></i>`;

  modalTitle.textContent = data.title;
  modalHindi.textContent = data.hindi;
  modalList.innerHTML = data.items.map(item => `<li>${item}</li>`).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('serviceModal')) {
    closeModalBtn();
  }
}

function closeModalBtn() {
  const modal = document.getElementById('serviceModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModalBtn();
});

/* ===== WHATSAPP CONTACT FORM ===== */
function sendWhatsApp() {
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const service = document.getElementById('contactService').value;
  const msg = document.getElementById('contactMsg').value.trim();

  if (!name || !phone) {
    showToast('Kripya apna naam aur phone number bharein / कृपया नाम और फोन नंबर भरें', 'error');
    return;
  }

  const text = `Namaste! 🙏\n\n*Jan Seva Kendra Website Se*\n\n👤 *Naam / Name:* ${name}\n📞 *Phone:* ${phone}\n🔧 *Service:* ${service || 'Not Specified'}\n💬 *Message:* ${msg || 'No message'}\n\nPlease help karein! / कृपया सहायता करें।`;

  // Replace with your WhatsApp number
  const waNumber = '91XXXXXXXXXX';
  const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  window.open(waURL, '_blank');
}

/* ===== TOAST NOTIFICATION ===== */
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.style.cssText = `
    position: fixed; bottom: 110px; left: 50%; transform: translateX(-50%);
    background: ${type === 'error' ? '#dc2626' : '#16a34a'};
    color: white; padding: 14px 24px;
    border-radius: 9999px; font-size: 0.88rem; font-weight: 600;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    z-index: 9999; display: flex; align-items: center; gap: 8px;
    animation: fadeInUp 0.3s ease;
    font-family: 'Sora', sans-serif;
  `;
  toast.innerHTML = `<i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i> ${message}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.offsetTop - 76;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/* ===== CAT TITLE REVEAL ===== */
document.querySelectorAll('.cat-title').forEach(el => {
  el.classList.add('reveal');
});

console.log('%c🏛️ Jan Seva Kendra — Design by Prashant Kumar ❤️ for our Vill भगवानपुर ', 'color: #d4a017; font-size: 14px; font-weight: bold;');
