var requestFullscreen = function (element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

var fullscreenVideo = document.getElementById('video-button');
var video = document.getElementById('video');

fullscreenVideo.addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(video);
});