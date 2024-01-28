// выпадающее меню
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

nav.classList.remove('nav--no-js');
nav.classList.add('nav--closed');
navToggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});

// слайдер
const slider = document.querySelector('.demo-slider');
const control = slider.querySelector('.demo-slider__control');
const sliderStyles = getComputedStyle(slider);
let controlPositionStart;
let clientX;

slider.classList.remove('demo-slider--no-js');
window.addEventListener('pointerup', stopControlShifting);
control.addEventListener('pointerdown', startControlShifting);

function startControlShifting (event) {
  controlPositionStart = +(sliderStyles.getPropertyValue('--control-position'));
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftControl);
}

function shiftControl (event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = controlPositionStart + deltaX / slider.clientWidth;
  const controlPosition = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty('--control-position', `${controlPosition}`);
}

function stopControlShifting () {
  window.removeEventListener('pointermove', shiftControl);
}
