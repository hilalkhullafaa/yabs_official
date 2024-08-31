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
