let sleepTimer = null;
let countdownInterval = null;

let defaultTimerMinutes = localStorage.getItem("sleepTimer")
  ? parseInt(localStorage.getItem("sleepTimer"))
  : 60;

function getAudio() {
  return document.getElementById("main-audio");
}

function setActiveButton(minutes) {
  const buttons = document.querySelectorAll(".timer-container button");

  buttons.forEach(btn => {
    btn.classList.remove("active");

    if (btn.dataset.time == minutes) {
      btn.classList.add("active");
    }
  });
}

function setSleepTimer(minutes) {
  const audio = getAudio();
  const display = document.getElementById("timer-display");

  if (!audio) {
    alert("Audio not found");
    return;
  }

  if (sleepTimer) clearTimeout(sleepTimer);
  if (countdownInterval) clearInterval(countdownInterval);

  setActiveButton(minutes);

  if (minutes === 0) {
    if (display) display.innerText = "⛔ Timer OFF";
    localStorage.setItem("sleepTimer", 0);
    return;
  }

  localStorage.setItem("sleepTimer", minutes);

  let remainingSeconds = minutes * 60;

  countdownInterval = setInterval(() => {
    let m = Math.floor(remainingSeconds / 60);
    let s = remainingSeconds % 60;

    if (display) {
      display.innerText = `⏳ ${m}:${s.toString().padStart(2, "0")}`;
    }

    remainingSeconds--;

    if (remainingSeconds < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  sleepTimer = setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;

    if (display) display.innerText = "😴 Sleep well";

    setActiveButton(null);

  }, minutes * 60 * 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const audio = getAudio();

  if (!audio) return;

  if (defaultTimerMinutes >= 0) {
    setActiveButton(defaultTimerMinutes);
  }

  audio.addEventListener("play", () => {
    if (!sleepTimer && defaultTimerMinutes > 0) {
      setSleepTimer(defaultTimerMinutes);
    }
  });
});
