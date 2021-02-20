$(document).ready(function () {
  $('.slide__form').slick({
    speed: 1000,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img class="slick-left" src="icons/slide_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img class="slick-right" src="icons/slide_right.svg"></button>'
  });

  $('ul.catalog__nav').on('click', 'li:not(.catalog__nav-item_active)', function () {
    $(this)
      .addClass('catalog__nav-item_active').siblings().removeClass('catalog__nav-item_active')
      .closest('div.container').find('div.catalog__wrapper').removeClass('catalog__wrapper_active').eq($(this).index()).addClass('catalog__wrapper_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog__one').eq(i).toggleClass('catalog__one_active');
        $('.catalog__two').eq(i).toggleClass('catalog__two_active');
      });
    });
  }

  toggleSlide('.catalog__one_details');
  toggleSlide('.catalog__two_back');

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn(600);
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut(600);
  });

  $('.button_buy').each(function (i) {
    $(this).on('click', function () {      
      $('#order .modal__descr').text($('.catalog__one_subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  $('input[name=number]').mask("+(999) 99-999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut(300);
      $('.overlay, #thanks').fadeIn(700);
      $('form').trigger('reset');
    });
    return false;
  });

  // Smooth scroll and pageup

  $(window).scroll(function () {
    if ($(this).scrollTop() > 650) {
      $('.arrow').fadeIn();
    } else {
      $('.arrow').fadeOut();
    }
  });

  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

});  
