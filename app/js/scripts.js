// $(() => {
    // $(window).on('load', function () {
    //     $('.preloader__wrp').fadeOut();
    // });
    // setTimeout(function () {
    //     $('.preloader__wrp').fadeOut();
    // }, 4000);
// });
$(() => {
  if ( $(window).width() > 1285 ) {
    $('.banner__btn').on('click', function () {
      $('.aside__btn').trigger('click');
    });
  }
});
// $(() => {
    //Закрываем AjaxForm popup после успешной отправки
    // $(document).on('af_complete', function(event,res) {
    //   if(res.success) parent.$.fancybox.close();
    // });
// });
$(() => {
    let tl1   = new TimelineMax();
        tl1
            .fromTo('.aside__btn-arrow', .3, {rotation:0}, {rotation:-90})
            .staggerFromTo('.aside__btn', .3, {borderRadius: "36px 0 0 36px"}, {borderRadius: "50%", x:-10}, 0.3);
    const controller = new ScrollMagic.Controller();
    const scene1p1 = new ScrollMagic.Scene({
        triggerElement: ".section",
        triggerHook: 0.8,
    })
        .setTween(tl1)
        .addTo(controller);
    $('.aside__btn').on('click',function(){
        $('.content').animate({
            scrollTop: $("#banner").offset().top - 100
        }, 500);
        TweenMax.to('.banner__bg--1', 1, {y:200,opacity:.7});
        TweenMax.to('.banner__bg--2', 1, {y:0});
        TweenMax.to('.banner__top', .6, { y:-150, delay:.2 });
        TweenMax.to('.banner__btn', .2, { opacity:0 });
        TweenMax.to('.filter', 1, {opacity:1,zIndex:3,delay:1.2});
        TweenMax.to('.filter__item', .9, {y:1,delay:1.2});
    });
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
    loop: true,
    smartSpeed: 800,
    dots: false,
    items: 1,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    navText: ["<svg width='43' height='8' viewBox='0 0 43 8' xmlns='http://www.w3.org/2000/svg'><path d='M43 4L1.5 4M1.5 4L4.5 7M1.5 4L4.5 1'/></svg>","<svg width='43' height='8' viewBox='0 0 43 8' xmlns='http://www.w3.org/2000/svg'><path d='M2.62268e-07 4L41.5 4M41.5 4L38.5 7M41.5 4L38.5 1'/></svg>"],
  });
});
$(() => {
  $('.js-popup__open').on('click', function () {
    $('.grid-layout').addClass('menu-open');
  });
  $('.js-popup__close').on('click', function () {
    $('.grid-layout').removeClass('menu-open');
  });
  $('.js-grid__overlay').on('click', function () {
    $('.grid-layout').removeClass('menu-open');
  });
});
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
$(() => {
    $.fn.select2.amd.define('select2/i18n/ru',[],function () {
        // Russian
        return {
            errorLoading: function () {
                return 'Результат не может быть загружен.';
            },
            inputTooLong: function (args) {
                var overChars = args.input.length - args.maximum;
                var message = 'Пожалуйста, удалите ' + overChars + ' символ';
                if (overChars >= 2 && overChars <= 4) {
                    message += 'а';
                } else if (overChars >= 5) {
                    message += 'ов';
                }
                return message;
            },
            inputTooShort: function (args) {
                var remainingChars = args.minimum - args.input.length;

                var message = 'Пожалуйста, введите ' + remainingChars + ' или более символов';

                return message;
            },
            loadingMore: function () {
                return 'Загружаем ещё ресурсы…';
            },
            maximumSelected: function (args) {
                var message = 'Вы можете выбрать ' + args.maximum + ' элемент';

                if (args.maximum  >= 2 && args.maximum <= 4) {
                    message += 'а';
                } else if (args.maximum >= 5) {
                    message += 'ов';
                }

                return message;
            },
            noResults: function () {
                return 'Ничего не найдено';
            },
            searching: function () {
                return 'Поиск…';
            }
        };
    });
});