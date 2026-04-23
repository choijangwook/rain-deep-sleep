const audio = document.getElementById("rainAudio");

function playRain(btn) {
    audio.play();
    btn.innerText = "▶ Playing...";
}

function pauseRain(btn) {
    audio.pause();
    btn.innerText = "⏸ Paused";
}

function setVolume(val) {
    audio.volume = val;
}
