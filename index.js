const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

openButton.addEventListener("click", () => {
  navMenu.classList.add("active");
  openButton.style.display = "none";
  closeButton.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("active");
  closeButton.style.display = "none";
  openButton.style.display = "flex";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    closeButton.style.display = "none";
    openButton.style.display = "flex";
  });
});

const header = document.querySelector("header");
const contactBtn = document.querySelector(".contact-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    contactBtn.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    contactBtn.classList.remove("scrolled");
  }
});

//Stats counting
function animateCount(el) {
  const text = el.textContent.trim();
  const target = parseInt(text.replace(/[^0-9]/g, ""), 10);
  const suffix = text.replace(/[0-9]/g, "");
  const duration = 1500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(eased * target);

    el.textContent = currentValue + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + suffix;
    }
  }

  requestAnimationFrame(update);
}

const statsSection = document.querySelector(".stats-section");
const statNumbers = document.querySelectorAll(".stats-text");

if (statsSection) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statNumbers.forEach((num) => animateCount(num));
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  statsObserver.observe(statsSection);
}

