const slides = document.querySelectorAll(".slider > img");
const amountOfSliders = slides.length;
let activeSlide = 0;

function nextSlide() {
  slides[activeSlide].classList.remove("active");
  activeSlide++;
  if (activeSlide >= amountOfSliders) activeSlide = 0;
  slides[activeSlide].classList.add("active");
}

setInterval(() => {
  nextSlide();
}, 3_000);
