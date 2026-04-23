const audio = document.getElementById("rainAudio");

function playRain() {
    audio.volume = 0;
    audio.play();

    // 🌿 fade in
    let v = 0;
    let fade = setInterval(() => {
        if (v < 1) {
            v += 0.05;
            audio.volume = v;
        } else {
            clearInterval(fade);
        }
    }, 100);
}

function pauseRain() {
    // 🌿 fade out
    let v = audio.volume;
    let fade = setInterval(() => {
        if (v > 0) {
            v -= 0.05;
            audio.volume = v;
        } else {
            audio.pause();
            clearInterval(fade);
        }
    }, 100);
}

function setVolume(val) {
    audio.volume = val;
}
