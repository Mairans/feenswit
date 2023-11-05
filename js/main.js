$(function () {

  var mixer = mixitup('.blog__list');
  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-btn--active')
    $(this).addClass('blog__filter-btn--active')
  })

  $('.reviews__slider').slick({
    dots: true,
    appendDots: $('.reviews__dots'),
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false
  })
  $('.reviews__prev').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  })
  $('.reviews__next').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link--active')) {
      $(this).removeClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideUp()
    } else {
      $('.questions__acc-link').removeClass('questions__acc-link--active')
      $('.questions__acc-text').slideUp()
      $(this).addClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideDown()
    }
  })
})
