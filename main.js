// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

var audio = document.getElementById('audio');
var reproductor = document.getElementById('reproductor');
var barra = document.getElementById('barra');
var tiempo = document.getElementById('tiempo');

audio.addEventListener('loadedmetadata', function() {
  reproductor.addEventListener('click', function(e) {
    var x = e.offsetX / this.offsetWidth;
    audio.currentTime = x * audio.duration;
  });

  audio.addEventListener('timeupdate', function() {
    var porcentaje = (audio.currentTime / audio.duration) * 100;
    barra.style.width = porcentaje + '%';

    var minutos = Math.floor(audio.currentTime / 60);
    var segundos = Math.floor(audio.currentTime - minutos * 60);
    var duracionMinutos = Math.floor(audio.duration / 60);
    var duracionSegundos = Math.floor(audio.duration - duracionMinutos * 60);

    tiempo.textContent = minutos + ':' + segundos + ' / ' + duracionMinutos + ':' + duracionSegundos;
  });

  reproductor.addEventListener('mouseenter', function() {
    audio.play();
  });

  reproductor.addEventListener('mouseleave', function() {
    audio.pause();
  });
});
