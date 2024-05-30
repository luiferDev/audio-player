const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-rigth"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider-section"),
  btnPlay = document.querySelector(".play-btn"),
  audio = document.querySelector(".player__audio")

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRigth())
btnPlay.addEventListener("click", e => playAudio())
// btnPlay.addEventListener("click", e => pauseAudio())

function playAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// function pauseAudio() {
//   if (audio == audio.play()) return
//   audio.pause()
// }


let operator = 0,
  position = 0,
  widthSections = 100 / sliderSection.length

function moveToRigth() {
  if (position >= sliderSection.length - 1) {
    operator = 0
    position = 0
    slider.style.transform = `translateX(-${operator}%)`
    slider.style.transition = "none"
    return
  }
  position++
  operator = operator + widthSections
  slider.style.transform = `translateX(-${operator}%)`
  slider.style.transition = "all ease-in .5s"

}

function moveToLeft() {
  position--
  if (position < 0) {
    operator = widthSections * (sliderSection.length - 1)
    position = sliderSection.length - 1
    slider.style.transform = `translateX(-${operator}%)`
    slider.style.transition = "none"
    return
  }
  operator = operator - widthSections
  slider.style.transform = `translateX(-${operator}%)`
  slider.style.transition = "all ease .5s"

}