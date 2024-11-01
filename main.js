const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-rigth"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider-section"),
  btnPlay = document.querySelector(".play-btn"),
  audio1 = document.querySelector("#audio1"),
  audio2 = document.querySelector("#audio2")

let operator = 0,
  position = 0,
  widthSections = 100 / sliderSection.length

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRigth())
const playBtn = document.querySelectorAll('.play-btn');
const audios = document.querySelectorAll('audio');

playBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => playAudio(index));
});

let currentPlayingIndex = -1;

function playAudio(position) {
  if (currentPlayingIndex !== -1 && currentPlayingIndex !== position) {
    audios[currentPlayingIndex].pause();
    audios[currentPlayingIndex].currentTime = 0;
  }

  if (position === currentPlayingIndex) {
    if (audios[position].paused) {
      audios[position].play();
    } else {
      audios[position].pause();
    }
  } else {
    audios[position].play();
  }

  currentPlayingIndex = position;
}

function moveToRigth() {
  if (position >= sliderSection.length - 1) {
    operator = 0
    position = 0
    slider.style.transform = `translateX(-${operator}%)`
    slider.style.transition = "none"
    audio1.play()
    audio2.pause()
    audio2.currentTime = 0
    btnPlay.addEventListener("click", e => {
      if (audio1.play()) {
        audio1.pause()
      }
    })
    return
  }
  position++
  operator = operator + widthSections
  slider.style.transform = `translateX(-${operator}%)`
  slider.style.transition = "all ease-in .5s"
  audio2.play()
  audio1.pause()
  audio1.currentTime = 0
}

function moveToLeft() {
  position--
  if (position < 0) {
    operator = widthSections * (sliderSection.length - 1)
    position = sliderSection.length - 1
    slider.style.transform = `translateX(-${operator}%)`
    slider.style.transition = "none"
    audio2.play()
    audio1.pause()
    audio1.currentTime = 0
  }
  operator = operator - widthSections
  slider.style.transform = `translateX(-${operator}%)`
  slider.style.transition = "all ease .5s"
  audio1.play()
  audio2.pause()
  audio2.currentTime = 0
  btnPlay.addEventListener("click", e => {
    if (audio1.play()) {
      audio1.pause()
    }
  })
}