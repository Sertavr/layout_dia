'use strict';



const slide = document.querySelector('.slider__image-container');
const arrowLeft = document.querySelector('.slider__arrow--left');
const arrowRight = document.querySelector('.slider__arrow--right');
console.log(arrowLeft);
const images = [`url(${photo1})`, `url(${photo2})`, `url(${photo3})`];
let currentSlid = 0;

console.log(photo1);

slide.style.backgroundImage = 'url(./communicatuin-2.png)';
function updateBackground() {
  slide.style.backgroundImage = images[currentSlid];
}

function nextSlide() {
  currentSlid = (currentSlid + 1) % images.length;
  updateBackground();
}

function prevSlide() {
  currentSlid = (currentSlid - 1 + images.length) % images.length;
  updateBackground();
}

arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);

// updateBackground();
