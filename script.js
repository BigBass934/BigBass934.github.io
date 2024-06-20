const navEl = document.querySelector('.mainNav');
const hamburgerEl = document.querySelector('.hamburger');
const bottomBarEl = document.querySelector('.bottom-bar');
const topBarEl = document.querySelector('.top-bar');
const projImgEl = document.querySelector('.proj-img');
const projSlideCon = document.querySelector('.slideshow-container');
const projSlideDiv = document.querySelector('.mySlides')
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsEl = document.querySelector('.dots');
const layCon = document.querySelector('.layerContainer');
const sectionsList = document.querySelectorAll("section[id]");
const topBtn = document.getElementById('rollingTopBtn');



// // Function to create and show the zoom overlay and zoomed content
// function showZoomedContent(target, x, y) {
//   // Create an overlay div
//   const overlayDiv = document.createElement('div');
//   overlayDiv.classList.add('overlay');

//   // Create zoomed wrapper div
//   const zoomedWrapperDiv = document.createElement('div');
//   zoomedWrapperDiv.classList.add('zoomed-wrapper');

//   // Clone the target element and apply the img--zoomed class
//   const zoomedContent = target.cloneNode(true);
//   zoomedContent.classList.add('img--zoomed');
//   zoomedContent.id = "cur-zoomed";

//   // Append the zoomed content to the wrapper
//   zoomedWrapperDiv.appendChild(zoomedContent);
//   // zoomedWrapperDiv.style.left = x;
//   console.log(y);
//   // zoomedWrapperDiv.style.left = x + 'px';
//   // zoomedWrapperDiv.style.top = window.scrollY + 200 + 'px';

//   // Append both overlay and zoomed wrapper to the layerContainer
//   layCon.appendChild(overlayDiv);
//   layCon.appendChild(zoomedWrapperDiv);

//   // Add event listeners to remove the zoom on click
//   overlayDiv.addEventListener('click', removeZoomedContent);
//   // zoomedWrapperDiv.addEventListener('click', removeZoomedContent);
// }

// // Function to remove the zoom overlay and zoomed content
// function removeZoomedContent() {
//   while (layCon.firstChild) {
//     layCon.removeChild(layCon.firstChild);
//   }
// }

// // Add event listeners to all zoom-target elements
// document.querySelectorAll('.zoom-target').forEach(el => {
//   el.addEventListener('click', (event => {
//     event.stopPropagation();
//     console.log(event.target);
//     console.log(el);
//     console.log(el.parentNode);
//     console.log(el.parentNode.parentNode);
//     console.log(el.parentNode.parentNode.parentNode);
//     console.log(event.pageX);
//     console.log(event.pageY);
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     // var x = toString(event.pageX);
//     var y = window.innerHeight / 2;
//     var x = window.innerWidth / 2;
//     if (event.target.parentNode.parentNode.classList.contains("mySlides")) {
//       showZoomedContent(event.target.parentNode.parentNode.parentNode, x, y);
//     } else {
//       showZoomedContent(event.target.parentNode, x, y);
//     }
//   }))

// })

// // Add event listeners to next and previous buttons to stop propagation
// nextButton.addEventListener('click', (event) => {
//   event.stopPropagation();
// });

// prevButton.addEventListener('click', (event) => {
//   event.stopPropagation();
// });

// dotsEl.addEventListener('click', (event) => {
//   event.stopPropagation();
// });

// projImgEl.addEventListener('click', (event) => {
// if(event.target.classList.contains('zoom-target')){
// console.log("click!");
// console.log(projImgEl.classList.toString());
// if(!projImgEl.classList.contains('img--zoomed')) {
// projImgEl.classList.add('img--zoomed');
// } else {
// projImgEl.classList.remove('img--zoomed');
// }
// }
// })

// projSlideDiv.addEventListener('click', (event) => {
// if(event.target.classList.contains('zoom-target')){
// console.log("click!");
// console.log(projSlideCon.classList.toString());
// if(!projSlideCon.classList.contains('img--zoomed')) {
// projSlideCon.classList.add('img--zoomed');
// } else {
// projSlideCon.classList.remove('img--zoomed');
// }
// }
// });

hamburgerEl.addEventListener('click', () => {
  if (!navEl.classList.contains('nav--open')) {
    if (navEl.classList.contains('nav-bar-scrolled')) {
      // If the navbar isn't open, but you have scrolled, add the CSS for the scrolled look (this allows the fade-in)
      navEl.classList.add('nav--scrolled');
    } else {


    }
  } else if (navEl.classList.contains('nav-open')) {
    if (!navEl.classList.contains('nav-bar-scrolled')) {
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
    topBtn.classList.add('btn-visible');
  } else if (window.scrollY <= 360) {
    bottomBarEl.classList.remove('bottom-bar-scrolled');
    topBarEl.classList.remove('top-bar-scrolled');
    navEl.classList.remove('nav-bar-scrolled');
    navEl.classList.remove('nav--scrolled');
    topBtn.classList.remove('btn-visible');
  }

  topBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  })
  // if (window.scrollY > 20) {//document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

  // } else {

  // }

  // Future JS for active navbar link highlighting

  // let scrollY = window.scrollY;

  // sectionsList.forEach(current => {
  //   const sectionHeight = current.offsetHeight;
  //   const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 150;
  //   sectionId = current.getAttribute("id");

  //   if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //     console.log(document.querySelector(".mainNav a[href*=" + sectionId + "]"))
  //     // document.querySelector(".mainNav a[href*=" + sectionId + "]").classList.add("activeLink");
  //   } else {
  //     // document.querySelector(".mainNav a[href*=" + sectionId + "]").classList.add("activeLink");
  //   }
  // })
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
  console.log(document.getElementById('cur-zoomed'))
  // console.log(document.getElementById('cur-zoomed').getElementsByClassName("mySlides"))

  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}