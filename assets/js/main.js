let sleepTimer = null;
let countdownInterval = null;

function getAudio() {
  return document.getElementById("main-audio");
}

function clearAllTimers() {
  if (sleepTimer) clearTimeout(sleepTimer);
  if (countdownInterval) clearInterval(countdownInterval);
  sleepTimer = null;
  countdownInterval = null;
}

function setActiveButton(minutes) {
  document.querySelectorAll(".timer-container button").forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.time == minutes) {
      btn.classList.add("active");
    }
  });
}

function setSleepTimer(minutes) {
  const audio = getAudio();
  const display = document.getElementById("timer-display");

  if (!audio || !display) return;

  clearAllTimers();
  setActiveButton(minutes);

  if (minutes === 0) {
    display.innerText = "⛔ Timer OFF";
    return;
  }

  let remaining = minutes * 60;

  display.innerText = `⏳ ${minutes}:00`;

  countdownInterval = setInterval(() => {
    let m = Math.floor(remaining / 60);
    let s = remaining % 60;

    display.innerText = `⏳ ${m}:${s.toString().padStart(2, "0")}`;
    remaining--;

    if (remaining < 0) clearInterval(countdownInterval);
  }, 1000);

  // 🔥 핵심: 확실한 종료
  sleepTimer = setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0;

    display.innerText = "😴 Sleep well";

    clearAllTimers();
    setActiveButton(null);
  }, minutes * 60 * 1000);
}
