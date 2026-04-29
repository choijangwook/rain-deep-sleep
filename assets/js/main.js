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
  if (!audio) return;

  clearAllTimers();
  setActiveButton(minutes);

  if (minutes === 0) return;

  sleepTimer = setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0;

    clearAllTimers();
    setActiveButton(null);
  }, minutes * 60 * 1000);
}

/* 🔥 핵심: 모바일 포함 모든 클릭 대응 */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".timer-container button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const minutes = parseInt(btn.dataset.time);
      setSleepTimer(minutes);
    });

    /* 🔥 모바일 터치 대응 */
    btn.addEventListener("touchstart", () => {
      const minutes = parseInt(btn.dataset.time);
      setSleepTimer(minutes);
    });
  });

  const audio = getAudio();
  if (!audio) return;

  audio.addEventListener("play", () => {
    if (!sleepTimer) {
      setSleepTimer(60);
    }
  });
});
