var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".series__card-navigation"
  },
  breakpoints: {
    540: {
      slidesPerView: 2
    }
  }
});

let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header-container');

menuButton.addEventListener('click', function () {
  menu.classList.toggle('header-container-active');
  menuButton.classList.toggle('menu-button-active'); 
  
})
