/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
          translate: [-100, 0, -500],
          rotate: [0, 0, 15],
          opacity: 0
        },
        next: {
          translate: [100, 0, -500],
          rotate: [0, 0, -15],
          opacity: 0
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__images', 1.5, {opacity: 0, y: 150, delay: .1})
gsap.from('.home__data', 1.8, {opacity: 0, x: -100, delay: .8})
gsap.from('.home__info', 1.8, {opacity: 0, x: -100, delay: 1})


// Function to scroll to top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to toggle the visibility of the scroll-to-top button
window.onscroll = function() {
    var scrollBtn = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.parentNode.classList.add('show-scroll-btn');
    } else {
        scrollBtn.parentNode.classList.remove('show-scroll-btn');
    }
};

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

function scrollToTarget(target) {
    const element = document.querySelector(target);
    const viewportHeight = window.innerHeight;
    const targetHeight = element.offsetHeight;
    const targetOffset = element.offsetTop;

    // Calculate the desired scroll position to center the target element
    const scrollToPosition = targetOffset - (viewportHeight / 2) + (targetHeight / 2);

    window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
    });
}


// Add event listeners to each navigation link
document.querySelectorAll('.nav__link').forEach(link => {
   link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default behavior of the link
      const target = this.getAttribute('href');
      scrollToTarget(target);
   });
});

/*=============== SWIPER SPORTS ===============*/
const swiperSports = new Swiper('.sports__gallery', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Add breakpoints if needed
});

window.onscroll = function() {updateProgressBar()};

function updateProgressBar() {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-progress-bar").style.width = scrolled + "%";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var backToTopBtn = document.getElementById("back-to-top-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  var topPos = window.scrollY || document.documentElement.scrollTop;
  if (topPos > 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}