const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const bottomBarEl = document.querySelector('.bottom-bar');
const topBarEl = document.querySelector('.top-bar');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 360) {
        bottomBarEl.classList.add('bottom-bar-scrolled');
        topBarEl.classList.add('top-bar-scrolled');
    } else if (window.scrollY <= 360) {
        bottomBarEl.classList.remove ('bottom-bar-scrolled');
        topBarEl.classList.remove ('top-bar-scrolled');
    }
});