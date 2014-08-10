console.log('content-loader.js loaded');

function injectScript(source){
	var s = document.createElement('script');
	s.src = chrome.extension.getURL(source);
	s.onload = function() {
	    this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(s);
}

injectScript('lib/jquery.js');

setTimeout(function(){
	injectScript('src/video-pop-out.js');
}, 1000);