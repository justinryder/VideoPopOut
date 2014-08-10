console.log('video-pop-out.js loaded');

function onYouTubePlayerReady(id){
  console.log('onYouTubePlayerReady', id);
}

(function($){
	$(function(){
		console.log('domready');

		var popup = $.popupWindow('#/');
		console.log(popup);

		//var youtubePlayer = $('.player-api');
		//console.log(youtubePlayer);
	});
}(jQuery));