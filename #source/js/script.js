

//====================  <!-- GoTO -->  ========================//
const links = document.querySelectorAll('.scroll-to');
const navBtn = document.querySelector('.page-navigation-btn');
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', (e) => {
      e.preventDefault();
      $('.page-navigation ul').slideToggle();

      navBtn.style.display = "block";

      const blockId = e.target.getAttribute('href').substring(1);

      document.getElementById(blockId).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}
//====================  <!-- GoTO -->  ========================//
function pageNavigation() {
   $('.page-navigation-btn').on('click', function () {
      $(this).css('display', 'none');
      $(this).closest('.page-navigation').find('ul').slideToggle();
      $('.navigation-close').fadeIn();
   });
   $('.navigation-close').on('click', function () {
      $(this).fadeOut();
      setTimeout(() => {
         $('.page-navigation-btn').fadeIn();
      }, 400);
      $('.page-navigation ul').slideUp();
   });
}
pageNavigation();


const positionFixed = (element, poinst) => {

   let elementTarget = document.querySelector("footer");

   window.addEventListener('scroll', () => {
      let scrollDistens = window.scrollY;
      const scrollPos = poinst,
         elements = document.getElementById(element);

      if (scrollDistens >= scrollPos) {
         elements.classList.add('btn-fixed');
      } else {
         elements.classList.remove('btn-fixed');
      }
   });
}
//====================  <!-- Header-Fixed -->========================//
positionFixed('btn-fixed', 600)


// generate video url
let generateUrl = function (id) {
   let query = '?rel=0&showinfo=0&autoplay=1';

   return 'https://www.youtube.com/embed/' + id + query;
};

// creating iframe
let createIframe = function (id) {
   let iframe = document.createElement('iframe');

   iframe.setAttribute('allowfullscreen', '');
   iframe.setAttribute('allow', 'autoplay; encrypted-media');
   iframe.setAttribute('src', generateUrl(id));

   return iframe;
};
const videos = document.querySelectorAll('.section-video');

let closeOldVideo = function () {
   $('.section-video').find('.video').html('');
   $('.section-video').find('.video-play-btn').fadeIn();
   $('.video-btn-close').css("opacity", "0");
   $('.video-poster').fadeIn();
}
$(videos).each(function (e) {

   let videoCnt = $(this).closest('.section-video').find('.video'),
      videoId = videoCnt.attr('data-video'),
      img = $(this).find('.video-poster'),
      youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg',
      playBtn = $(this).find('.video-btn-play'),
      closeBtn = $(this).find('.video-btn-close'),
      videoOverlay = $(this).find('.section-video__overlay');


   if (img.length > 0) {
      $(img).attr('src', youtubeImgSrc);
   }

   playBtn.click(function () {
      videoOverlay.fadeOut();
      closeBtn.css({ 'opacity': '0.7', 'display': 'block' });
      playBtn.fadeOut();
      img.fadeOut();

      let iframe = createIframe(videoId);
      videoCnt.html(iframe);
   })

   closeBtn.click(function () {
      closeBtn.fadeOut();
      playBtn.fadeIn();
      img.fadeIn();
      videoOverlay.fadeIn();
      videoCnt.html(' ');
   });
});
//====================  <!-- Video -->  ========================//
//=================== <!-- Accordeon --> =========================//

document.querySelectorAll(".accordion__item-head").forEach((item) =>
   item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
         item.classList.remove('active');
         item.nextElementSibling.style.maxHeight = null;


      } else {
         document.querySelectorAll(".accordion__item-head").forEach((e) =>
            e.classList.remove('active'));

         document.querySelectorAll(".accordion__item-content").forEach((e) =>
            e.style.maxHeight = null);

         item.classList.add('active');
         item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + "px";

      }
   })
)
//=================== <!-- Accordeon --> =========================//

$('.success-slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   nextArrow: '.success-slider__arrow-next',
   prevArrow: '.success-slider__arrow-prev',
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 986,
         settings: {
            variableWidth: true,
         }
      }
   ]
});
$(window).on('load resize', function () {
   if ($(window).width() < 768) {
      $('.develop-slider:not(.slick-initialized)').slick({
         infinite: true,
         speed: 300,
         arrows: false,
         responsive: [
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  variableWidth: true,
               }
            }
         ]
      });
   } else {
      $(".develop-slider.slick-initialized").slick("unslick");
   }
});

$('.cooperate-slider').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   autoplay: false,
   fade: false,
   dots: false,
   nextArrow: '.cooperate-slider__arrow-next',
   prevArrow: '.cooperate-slider__arrow-prev',
   responsive: [
      {
         breakpoint: 986,
         settings: {
            dots: true
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
         }
      }
   ]
});

$(window).on('load resize', function () {
   if ($(window).width() < 768) {
      $('.work__slider:not(.slick-initialized)').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: false,
         fade: false,
         dots: true,
         arrows: true,
         nextArrow: '.work__slider-arrow-next',
         prevArrow: '.work__slider-arrow-prev'

      });
   } else {
      $(".work__slider.slick-initialized").slick("unslick");
   }
});