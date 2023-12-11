var vid1 = 'https://video.e-droid.net/files_busc/v2261770_2572817406.mp4';
let vid2 =
'https://video.e-droid.net/files_busc/v2261790_2572817406.mp4';
let vid3 =
'https://video.e-droid.net/files_busc/v2261805_2572817406.mp4';
let vid4 =
'https://video.e-droid.net/files_busc/v2261817_2572817406.mp4';
let vid5 =
'https://video.e-droid.net/files_busc/v2261827_2572817406.mp4';
let vid6 =
'https://video.e-droid.net/files_busc/v2261843_2572817406.mp4';


let post1 =
'https://www.appcreator24.com/srv/imgs/videos_busc/v2261770_2572817406_th.jpg';
let post2 = 'https://www.appcreator24.com/srv/imgs/videos_busc/v2261790_2572817406_th.jpg';
let post3 = 'https://www.appcreator24.com/srv/imgs/videos_busc/v2261805_2572817406_th.jpg';
let post4 = 'https://www.appcreator24.com/srv/imgs/videos_busc/v2261817_2572817406_th.jpg';
let post5 = 'https://www.appcreator24.com/srv/imgs/videos_busc/v2261827_2572817406_th.jpg';


$('.thumb-1').on('click', function(){
	console.log('hola');
	$('video').attr('src', vid1);
	$('.vimv').attr('poster',post1)
});

$('.thumb-2').on('click', function(){
	$('.vimv').attr('src',vid2);
	$('.vimv').attr('poster',post2);
});

$('.thumb-3').on('click', function(){
	$('.vimv').attr('src',vid3);
	$('.vimv').attr('poster',post3);
});

$('.thumb-4').on('click', function(){
	$('.vimv').attr('src',vid4);
	$('.vimv').attr('poster',post4);
});

$('.thumb-5').on('click', function(){
	$('.vimv').attr('src',vid5);
	$('.vimv').attr('poster',post5);
});


const video = document.querySelector(".video");
const toggleButton = document.querySelector(".toggleButton");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const sliders = document.querySelectorAll(".controls__slider");
const skipBtns = document.querySelectorAll("[data-skip]");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}
function updateToggleButton() {
  toggleButton.innerHTML = video.paused ? "<b>▶</b>" : "❚ ❚";
}

function handleProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercentage}%`;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleSliderUpdate() {
  video[this.name] = this.value;
}
function handleSkip() {
  video.currentTime += +this.dataset.skip;
}
toggleButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
video.addEventListener("timeupdate", handleProgress);
sliders.forEach((slider) => {
  slider.addEventListener("change", handleSliderUpdate);
});
skipBtns.forEach((btn) => {
  btn.addEventListener("click", handleSkip);
});

sliders.forEach((slider) => {
  slider.addEventListener("change", handleSliderUpdate);
});
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") togglePlay();
});
