const switchButton = document.querySelector(`.onoffswitch-checkbox`);
const pageDivs = document.querySelectorAll(`.box`);
const numberHeadings = document.querySelectorAll(`.numbers`);
const bodyTag = document.querySelector('body');
const htmlTag = document.querySelector('html');
const socialHeading = document.querySelectorAll('.top-bar-social');

function socialMediaHeadings() {
    socialHeading.forEach((f) => {
        f.classList.toggle('socialMediaHeadingsDark');
    });
}

function divToggle() {
    pageDivs.forEach((g) => {
        g.classList.toggle('darkModeCard');
    });
}

function headingNumberToggle() {
    numberHeadings.forEach((e) => {
        e.classList.toggle(`headingNumbers`);
    });
}

switchButton.addEventListener(`click`, () => {
    divToggle();
    headingNumberToggle();
    htmlTag.classList.toggle(`htmlDark`);
    bodyTag.classList.toggle(`bodyDark`);
    socialMediaHeadings();
});
