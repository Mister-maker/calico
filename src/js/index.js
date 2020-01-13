// import './moduls/test';
// import './views/testView';
//import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';

const line = document.querySelector('.inner-line');
const cards = document.querySelectorAll('.card');
const circlePoins = document.querySelectorAll('.line-dot');
const overlays = document.querySelectorAll('.overlay');
const openOverlay = document.querySelectorAll('.open-overlay');
const overlayClose = document.querySelectorAll('.overlay__close');
const body = document.querySelector('body');

let options = {
  threshold: 0.7,
  rootMargin: '-60px'
};

let cardObserver = new IntersectionObserver(showCards, options);
let lineDotsObserver = new IntersectionObserver(showLineDots, options);

/* Cards observer  */
function showCards(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add('show-cards');
    cardObserver.unobserve(entry.target);
  });
}

/* Line dots observer */
function showLineDots(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('show-dots');
      return;
    }
    entry.target.classList.add('show-dots');
  });
}

/* Initializing observers */
cards.forEach(card => {
  cardObserver.observe(card);
});

circlePoins.forEach(point => {
  lineDotsObserver.observe(point);
});

/* Dots scroll animation */
window.addEventListener('scroll', e => {
  let height = window.pageYOffset + 20;
  line.style.height = `${height}px`;
});

/* overlay open */

openOverlay.forEach((btn, value) => {
  btn.addEventListener('click', () => {
    overlays.forEach((overlay, index) => {
      if (index != value) {
        return;
      } else {
        overlay.style.display = 'block';
        body.style.overflowY = 'hidden';
      }
    });
  });
});

overlayClose.forEach((close, value) => {
  close.addEventListener('click', () => {
    overlays.forEach((overlay, index) => {
      if (index != value) {
        return;
      } else {
        overlay.style.display = 'none';
        body.style.overflowY = 'scroll';
      }
    });
  });
});

// console.log(openOverlay);
