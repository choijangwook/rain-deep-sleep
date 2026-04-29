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

  // 🔥 사용자 제스처 안에서 실행 (중요)
  audio.play().catch(()=>{});

  clearAllTimers();
  setActiveButton(minutes);

  if (minutes === 0) {
    display.innerText = "⛔ OFF";
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

  sleepTimer = setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
    audio.src = "";

    display.innerText = "😴 Sleep well";

    clearAllTimers();
    setActiveButton(null);
  }, minutes * 60 * 1000);
}

document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".timer-container");

  if (!container) return;

  // 🔥 핵심: 부모에서 처리 (Brave 안정)
  container.addEventListener("click", (e) => {

    const btn = e.target.closest("button");
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const time = parseInt(btn.dataset.time);
    setSleepTimer(time);

  });

});
