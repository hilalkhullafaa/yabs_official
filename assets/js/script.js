// PRELOADER
const preloader = document.querySelector(".preloader");
const circle = document.querySelector(".circle");

window.addEventListener("load", () => {
  preloader.classList.add("active");
  circle.style.animation = "none";
  document.body.classList.add("active");
});

// AUDIO
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const playButton = document.getElementById("play-button");
  let play = document.getElementById("play");
  let stop = document.getElementById("stop");

  // Memeriksa dan memuat status audio dari localStorage
  if (localStorage.getItem("audioTime")) {
    audio.currentTime = localStorage.getItem("audioTime");
  }
  if (localStorage.getItem("isPlaying") === "true") {
    audio.play();
    playButton.textContent = "Pause";
  } else {
    audio.pause();
    playButton.textContent = "Play";
  }

  // Menyimpan status audio saat waktu atau status berubah
  audio.addEventListener("timeupdate", function () {
    localStorage.setItem("audioTime", audio.currentTime);
  });

  audio.addEventListener("play", function () {
    localStorage.setItem("isPlaying", true);
    playButton.textContent = "Pause";
  });

  audio.addEventListener("pause", function () {
    localStorage.setItem("isPlaying", false);
    playButton.textContent = "Play";
  });

  // Mengatur tombol Play/Pause
  playButton.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
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
