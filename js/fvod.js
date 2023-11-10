let script = document.createElement('script');
script.src = "../js/time.js";
document.body.appendChild(script);

var ggg = document.querySelector('.tiviku');

let tiviku = document.createElement('img');
tiviku.src="https://github.com/filmovie/tiviku/blob/main/gambar/tiviku.png?raw=true";
tiviku.className="tiv";
ggg.appendChild(tiviku);

var ply = document.getElementById("wpo");
ply.src ='../iklan1.mp4';
ply.preload = "none";

var vide = document.getElementById("myvideo");
vide.src ='https://dl.dropbox.com/scl/fi/p57infaytbffqiofwt7c4/1p.mp4?rlkey=8pexarsdkxi95kn6jbm2at4sv&dl=0';
vide.preload = "none";

var vidy = document.querySelector(".vid1");

var vidd3 = document.querySelector(".vid3")

setTimeout(function(){
				vidy.pause()
},1000);

setTimeout(function(){
				vidy.classList.add("vid3")
				vide.pause()
				vidy.play()
},600000);

vidy.addEventListener("ended", function() {
				vidy.classList.remove("vid3")
				vide.play()
				vidy.pause()
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
