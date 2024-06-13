const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const bottomBarEl = document.querySelector('.bottom-bar');
const topBarEl = document.querySelector('.top-bar');

hamburgerEl.addEventListener('click', () => {
    if(!navEl.classList.contains('nav--open')){ 
        if(navEl.classList.contains('nav-bar-scrolled')){
            // If the navbar isn't open, but you have scrolled, add the CSS for the scrolled look (this allows the fade-in)
            navEl.classList.add('nav--scrolled'); 
        } else {
            
        }
    } else if (navEl.classList.contains('nav-open')) {
        if(!navEl.classList.contains('nav-bar-scrolled')) {
            // If the navbar IS open, but you are at the top and/or haven't scrolled, remove the CSS for the scrolled look
            navEl.classList.remove('nav--scrolled');
        }
    }
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 360) {
        bottomBarEl.classList.add('bottom-bar-scrolled');
        topBarEl.classList.add('top-bar-scrolled');
        navEl.classList.add('nav-bar-scrolled');
        navEl.classList.add('nav--scrolled');
    } else if (window.scrollY <= 360) {
        bottomBarEl.classList.remove ('bottom-bar-scrolled');
        topBarEl.classList.remove ('top-bar-scrolled');
        navEl.classList.remove('nav-bar-scrolled');
        navEl.classList.remove('nav--scrolled');
    }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}