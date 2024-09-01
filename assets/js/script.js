// PRELOADER
const preloader = document.querySelector(".preloader");
const circle = document.querySelector(".circle");

window.addEventListener("load", () => {
  preloader.classList.add("active");
  circle.style.animation = "none";
  document.body.classList.add("active");
});

// HERO SLIDER
// OTOMATIS SLIDE
const sliderHero = document.querySelector(".slider-hero");
const sliderItem = document.querySelectorAll(".slide");
let index = 0;

function showOtomatic() {
  index++;
  if (index >= sliderItem.length) {
    index = 0;
  }
  sliderHero.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showOtomatic, 4000);

// TOGGLE NAVBAR
const navbar = document.querySelector(".navbar");
const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
openNav.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
closeNav.addEventListener("click", () => {
  navbar.classList.remove("active");
});

document.addEventListener("scroll", () => {
  if (scrollY > 100) {
    navbar.classList.remove("active");
  }
});
