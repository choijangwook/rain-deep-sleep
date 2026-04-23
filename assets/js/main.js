const audio = document.getElementById("rainAudio");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

function playRain() {
    audio.play();
    playBtn.innerText = "▶ Playing...";
    pauseBtn.innerText = "⏸ Pause";
}

function pauseRain() {
    audio.pause();
    pauseBtn.innerText = "⏸ Paused";
    playBtn.innerText = "▶ Play";
}

function setVolume(val) {
    audio.volume = val;
}
