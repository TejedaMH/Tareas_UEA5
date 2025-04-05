console.log ("RGB: Simulación del color")

const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');

playButton.addEventListener('click', function() {
           


    
if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pausar Audio'; // Cambia el texto del botón si se reproduce el audio
} else {
    audio.pause();
    playButton.textContent = 'Reproducir Audio'; // Cambia el texto del botón si esta pausado el audio
}
});