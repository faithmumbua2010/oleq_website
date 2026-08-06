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

