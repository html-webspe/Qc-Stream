
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