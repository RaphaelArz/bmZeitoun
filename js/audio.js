function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

// Arrêter la musique lorsque l'utilisateur quitte la page
window.addEventListener("beforeunload", function () {
    var audio = document.getElementById("myAudio");
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Réinitialiser à zéro
    }
});
