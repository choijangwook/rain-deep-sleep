let sleepTimer = null;
let countdownInterval = null;

function setActiveButton(minutes) {
  document.querySelectorAll(".timer-container button").forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.time == minutes) {
      btn.classList.add("active");
    }
  });
}

function clearTimers() {
  if (sleepTimer) clearTimeout(sleepTimer);
  if (countdownInterval) clearInterval(countdownInterval);
}

function setSleepTimer(minutes) {
  const display = document.getElementById("timer-display");

  clearTimers();
  setActiveButton(minutes);

  if (minutes == 0) {
    display.innerText = "Timer OFF";
    return;
  }

  let remaining = minutes * 60;

  countdownInterval = setInterval(() => {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;

    display.innerText = `${m}:${s.toString().padStart(2, "0")}`;
    remaining--;

    if (remaining < 0) clearInterval(countdownInterval);
  }, 1000);

  sleepTimer = setTimeout(() => {
    display.innerText = "Sleep time finished";
    clearTimers();
    setActiveButton(null);
  }, minutes * 60 * 1000);
}

/* 🔥 핵심: click만 사용 (Brave 안정) */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".timer-container button").forEach(btn => {
    btn.addEventListener("click", () => {
      setSleepTimer(parseInt(btn.dataset.time));
    });
  });
});
