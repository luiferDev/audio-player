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
