import './index.css';

const switchButton = document.querySelector(`.onoffswitch-checkbox`);
const pageDivs = document.querySelectorAll(`.box`);

function divToggle() {
  pageDivs.forEach(e => {
    e.classList.toggle('darkMode');
  });
}

switchButton.addEventListener(`click`, () => {
  divToggle();
});
