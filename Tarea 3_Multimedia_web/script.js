console.log ("RGB: Simulación del color")


//PEQUEÑOS DETALLES DE SUMA SOBERBÍA

// Botón y audio
const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');

// Función para controlar el audio
playButton.addEventListener('click', function() {
           
// Si el audio está pausado, se reproduce y viceversa
if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pausar Audio'; // Cambia el texto del botón si se reproduce el audio
} else {
    audio.pause();
    playButton.textContent = 'Reproducir Audio'; // Cambia el texto del botón si esta pausado el audio
}
});