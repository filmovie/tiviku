let script = document.createElement('script');
script.src = "../js/vod1.js";
document.body.appendChild(script);

let gambar1 = document.createElement('img');
gambar1.id = "gambar1";
gambar1.src = "../tiviku.gif";
document.getElementById('flm2k').appendChild(gambar1);
let marquee = document.createElement('marquee');
marquee.id = "marquee1";
marquee.innerHTML = "<!--<b>Mohon bergabung di grup agar selalu terhubung dengan kami.!!! &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; facebook grup. ( https://tinyurl.com/tiviku ) &#128516;</b>-->";
document.getElementById('flm1').appendChild(marquee);

let vdo1 = document.createElement('div');
vdo1.innerHTML = "<video controls preload='auto' controlslist='nofullscreen nodownload' class='video' id='myvideo' src='../iklan1.mp4'></video>";
document.getElementById('vdo').appendChild(vdo1);

let div1 = document.createElement('div');
div1.id = "div1";
div1.innerHTML = "<div id='clock'><p class='date'>{{ date }}</p><p class='time'>{{ time }}</p></div>";
document.getElementById('flm2').appendChild(div1);

let div2 = document.createElement('div');
div2.id = "div2";
div2.innerHTML = "<div class='controls'> <div class='progress'> <div class='progress__filled'></div> </div> <button class='controls__button' data-skip='-10'><b>« 10s</b></button> <button class='controls__button toggleButton' title='Toggle Play'><b>▶</b></button> <button class='controls__button' data-skip='25'><b>10s »</b></button> </div> </div>";
document.getElementById('cntrl').appendChild(div2);

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
