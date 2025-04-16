// nav bar code
const hambuger = document.querySelector(".humburger-menu");
const navMenu = document.querySelector(".nav-items");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-items").forEach((n) =>
  n.addEventListener("click", () => {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/*vanilla-tilt.js*/
const tilt = document.querySelectorAll(".tilt");

VanillaTilt.init(tilt, {
  reverse: true,
  max: 15,
  speed: 400,
  scale: 1.12,
  glare: true,
  reset: true,
  perspective: 500,
  transition: true,
  "max-glare": 0.75,
  "glare-prerender": false,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45,
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
