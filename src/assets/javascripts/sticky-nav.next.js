import * as raf from 'raf';

const THRESHOLD = 250;
const stickyNav = document.getElementById('sticky-nav');

render();

function render() {
  if (stickyNav) {
    raf(render);
    animateStickyNav();
  }
}

function animateStickyNav() {
  if (document.body.scrollTop > THRESHOLD) {
    stickyNav.classList.add('is-sticky');
  } else {
    stickyNav.classList.remove('is-sticky');
  }
}
