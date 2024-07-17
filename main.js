const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-rigth"),
  slider = document.querySelector("#slider"),
  sliderSection = document.querySelectorAll(".slider-section"),
  btnPlay = document.querySelector(".play-btn"),
  audio1 = document.querySelector("#audio1"),
  audio2 = document.querySelector("#audio2")

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRigth())
//btnPlay.addEventListener("click", e => playAudio())
// btnPlay.addEventListener("click", e => pauseAudio())

// function pauseAudio() {
//   if (audio == audio.play()) return
//   audio.pause()
// }


let operator = 0,
  position = 0,
  widthSections = 100 / sliderSection.length

  console.log(sliderSection.length)
  console.log(widthSections)
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
      }})
    return
  }
  position++
  operator = operator + widthSections
  slider.style.transform = `translateX(-${operator}%)`
  slider.style.transition = "all ease-in .5s"
  audio2.play()
  audio1.pause()
  audio1.currentTime = 0
  btnPlay.addEventListener("click", e => {
    if (audio2.play()) {
      audio2.pause()
    }})
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
    btnPlay.addEventListener("click", e => {
      if (audio2.play()) {
        audio2.pause()
      }})
    return
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
    }})
}