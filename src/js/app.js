const burger = document.querySelector('.icon-menu')
const header = document.querySelector('.header')
const menu = document.querySelector('.header__menu')
const logoW = document.querySelector('.header__logo')
const logoB = document.querySelector('.header__logo_m')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  header.classList.toggle('active')
  menu.classList.toggle('active')
  logoB.classList.toggle('show')
  logoW.classList.toggle('hide')
  body.classList.toggle('_lock')
})


// slider

$(document).ready(function () {
  $('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    prevArrow: '<img class="slider-arrow slider-arrow__left" src="../img/icons/arrow-prev.svg">',
    nextArrow: '<img class="slider-arrow slider-arrow__right" src="../img/icons/arrow-next.svg">',
    appendArrows: $('.slider__nav'),
    appendDots: $('.slider__nav'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});


