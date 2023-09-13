function enterFullScreen(id) { var element = document.getElementById(id);
element.parentNode.webkitRequestFullScreen();
element.style.height = screen.height;
element.style.width = screen.width; }
document.addEventListener("webkitfullscreenchange", function () { if(!document.webkitIsFullScreen) { // Restore CSS properties here which in this case is as follows :
var element = document.getElementById('myvideo');
element.style.height=240;
element.style.width=320; } }, false);