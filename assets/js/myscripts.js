$(document).ready(function () {
  $(".hero-slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    //fade: true,
    arrows: true,
    nextArrow: '<button class="hero-btn-next">Next</button>',
    prevArrow: '<button class="hero-btn-prev">Prev</button>',
  });

  $(".prds").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //

  $(document).ready(function () {
    var $slider = $(".fbd-slider");
    var $progressBar = $(".progress");
    var $progressBarLabel = $(".slider__label");

    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / (slick.slideCount - 1)) * 100;
        var calc2 = calc + 10;

        $progressBar
          .css("background-size", calc2 + "% 100%")
          .attr("aria-valuenow", calc2);

        $progressBarLabel.text(calc2 + "% completed");
      }
    );

    $slider.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 400,
    });
  });

  //

  $(".fbd-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    prevArrow: $(".prevf"),
    nextArrow: $(".nextf"),
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
      $(".header.header").addClass("darkHeader");
      $("a.site-logo img").css("max-width", "200px");
      //$("header.header ul.nav").css("gap", "30px");
      $(".clr-logo").removeClass("d-none");
      $(".wt-logo").addClass("d-none");
    } else {
      $(".header.header").removeClass("darkHeader");
      $("a.site-logo img").css("max-width", "245px");
      //$("header.header ul.nav").css("gap", "50px");
      $(".wt-logo").removeClass("d-none");
      $(".clr-logo").addClass("d-none");
    }
  });

  $(".mobile-nav-button").on("click", function () {
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass(
      "mobile-nav-button__line--1"
    );
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass(
      "mobile-nav-button__line--2"
    );
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass(
      "mobile-nav-button__line--3"
    );

    $(".mobile-menu").toggleClass("mobile-menu--open");
    return false;
  });

  AOS.init();
}); // end of function
