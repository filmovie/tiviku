const jam = document.getElementById('jam');

const cntrl = document.getElementById('cntrl');

const meta = document.getElementById('mta');

let time = document.createElement('script');
time.src = "time.js";
document.body.appendChild(time);

meta.name ="viewport";
meta.content ="width=device-width,initial-scale=1.0, user-scalable=1";

jam.innerHTML = "<div id='clock'><p class='date'>{{ date }}</p><p class='time'>{{ time }}</p></div>";

cntrl.innerHTML = "<div class='controls'> <div class='progress'> <div class='progress__filled'></div></div> <button id='btn' onclick='buka()'><b>buka</b></button> <button class='controls__button' data-skip='-10'><b>« 10s</b></button> <button class='controls__button toggleButton' title='Toggle Play'><b>▶</b></button> <button class='controls__button' data-skip='25'><b>10s »</b></button> </div>";

const video = document.querySelector(".vimv");

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
