// $(() => {
    // $(window).on('load', function () {
    //     $('.preloader__wrp').fadeOut();
    // });
    // setTimeout(function () {
    //     $('.preloader__wrp').fadeOut();
    // }, 4000);
// });
$(() => {
   // $('.banner__descr-link').on('click', function () {
   //      $('html, body').animate({
   //          scrollTop: $("#profit").offset().top - 50
   //      }, 700);
   //  });
   //  $('.js-popup__open').on('click', function () {
   //      $('body').addClass('menu-open');
   //  });
   //  $('.js-popup__close').on('click', function () {
   //      $('body').removeClass('menu-open');
   //  });
   //  $('.js-banner__overlay').on('click', function () {
   //      $('body').removeClass('menu-open');
   //  });

    //Закрываем AjaxForm popup после успешной отправки
    // $(document).on('af_complete', function(event,res) {
    //   if(res.success) parent.$.fancybox.close();
    // });
});
$(() => {
    // let tl0   = new TimelineMax()
    //     tl1p1 = new TimelineMax()
    //     tl1p2 = new TimelineMax();
    // const controller = new ScrollMagic.Controller();
    // tl0
    //     .fromTo('.preloader__logo', .4, {x:10,opacity:0},{x:0,opacity:1}, 0.5)
    //     .staggerFromTo('.preloader__title', .3, {x:10,opacity:0},{x:0,opacity:1}, 0.3)
    //     .staggerFromTo('.preloader__subtitle', .3, {x:10,opacity:0},{x:0,opacity:1}, 0.3)
    //     .staggerFromTo('.preloader', 1, {scale:1}, {scale:1.1,ease: Linear.easeNone,repeatDelay:0, repeat:-1, yoyo:true}, 0)
    // tl1p1
    //     .fromTo('.banner__bg', 1.5, {scale:1.05,opacity:0}, {scale:1,opacity:1}, "+=3")
    //     .staggerFromTo('.banner__subttl', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 0.3)
    //     .staggerFromTo('.banner__ttl', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 0.7)
    //     .staggerFromTo('.banner__descr', .5, {y:30,opacity:0}, {y:0,opacity:1}, 0.7)
    //     .staggerFromTo('.header__logo', .2, {x:-30,opacity:0}, {x:0,opacity:1}, 0.7)
    //     .staggerFromTo('.header__nav-link', .2, {x:30,opacity:0}, {x:0,opacity: 1}, 0.1)
    //     .staggerFromTo('.header__login-btn', .2, {x:30,opacity:0}, {x:0,opacity:1}, 0.7)
    //     .staggerFromTo('.header__btn', .2, {scale:0.5,opacity:0}, {scale:1,opacity:1}, 0.7)
    // tl1p2
    //     .fromTo('.banner__bg', .7, {y: 0,scale:1}, {y: 20,scale:1.05})
    //     .fromTo('.banner__in', .5, {y:0}, {y:-30}, "-=0.7")
    // const scene1p1 = new ScrollMagic.Scene({
    //     triggerElement: ".banner",
    //     triggerHook: 0.1,
    //     reverse: false,
    // })
    //     .setTween(tl1p1)
    //     .addTo(controller);
    // const scene1p2 = new ScrollMagic.Scene({
    //     triggerElement: ".banner__descr",
    //     triggerHook: 0.4,
    // });
});
$(() => {
    $(".js-select").select2({
        language: "ru",
        minimumResultsForSearch: -1
    });
});

$(() => {
  $('.card__list').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 800,
    startPosition: 0,
    dots: false,
    margin: 15,
    navText: ["<svg width='43' height='8' viewBox='0 0 43 8' xmlns='http://www.w3.org/2000/svg'><path d='M43 4L1.5 4M1.5 4L4.5 7M1.5 4L4.5 1'/></svg>","<svg width='43' height='8' viewBox='0 0 43 8' xmlns='http://www.w3.org/2000/svg'><path d='M2.62268e-07 4L41.5 4M41.5 4L38.5 7M41.5 4L38.5 1'/></svg>"],
    responsive : {
      0   : {
          items: 1,
      },
      600 : {
          items: 2,
      },
      900 : {
          items: 3,
      },
      1200 : {
          items: 4,
      }
    },
  });
});

$(() => {
  $('.service__slider').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 800,
    dots: false,
    items: 1,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    navText: ["<svg width='43' height='8' viewBox='0 0 43 8' xmlns='http://www.w3.org/2000/svg'><path d='M43 4L1.5 4M1.5 4L4.5 7M1.5 4L4.5 1'/></svg>","<svg width='43' height='8' viewBox='0 0 43 8' xmlns='http://www.w3.org/2000/svg'><path d='M2.62268e-07 4L41.5 4M41.5 4L38.5 7M41.5 4L38.5 1'/></svg>"],
  });
});

//map
$(() => {
  var myMap;

  ymaps.ready(init);
  function init(){
    myMap = new ymaps.Map("map", {
        center: [55.68676265060023,37.56327550212061],
        globalPixelCenter: [56,34],
        zoom: 11,
        scrollZoom: false,
        controls: ["typeSelector"],
    });
    // myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom');
    var placemarks = [
        {
            coords: [55.69058694046954,37.58305947581445],
            icon: 'img/baloon.svg',
            icon_size: [50, 50],
            icon_offset: [-25, -25], // -50% ширины, -100% высоты от точки привязки (левый верхний угол)
        },
    ];

    placemarks.forEach(function(item){
        var obj = new ymaps.Placemark(
            item.coords,
            {},
            {
                iconLayout: 'default#image',
                iconImageHref: item.icon,
                iconImageSize: item.icon_size,
                iconImageOffset: item.icon_offset,
            }
        );
        myMap.geoObjects.add(obj);
    });
  };
});