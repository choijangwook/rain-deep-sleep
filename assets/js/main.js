let sleepTimer = null;
let countdownInterval = null;

// 저장된 값 불러오기
let defaultTimerMinutes = localStorage.getItem("sleepTimer")
  ? parseInt(localStorage.getItem("sleepTimer"))
  : 60;

// 버튼 active 처리
function setActiveButton(minutes) {
  const buttons = document.querySelectorAll(".timer-container button");

  buttons.forEach(btn => {
    btn.classList.remove("active");

    if (btn.dataset.time == minutes) {
      btn.classList.add("active");
    }
  });
}

// 타이머 설정
function setSleepTimer(minutes) {
  const audio = document.querySelector("audio");
  const display = document.getElementById("timer-display");

  if (sleepTimer) clearTimeout(sleepTimer);
  if (countdownInterval) clearInterval(countdownInterval);

  setActiveButton(minutes);

  if (minutes === 0) {
    if (display) display.innerText = "Timer OFF";
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
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    if (display) display.innerText = "😴 Sleep well";

    setActiveButton(null);

  }, minutes * 60 * 1000);
}

// 초기 로드
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio");

  if (!audio) return;

  // 저장된 값 버튼 표시
  if (defaultTimerMinutes) {
    setActiveButton(defaultTimerMinutes);
  }

  audio.addEventListener("play", () => {
    if (!sleepTimer && defaultTimerMinutes > 0) {
      setSleepTimer(defaultTimerMinutes);
    }
  });
});

// 정리
window.addEventListener("beforeunload", () => {
  if (sleepTimer) clearTimeout(sleepTimer);
  if (countdownInterval) clearInterval(countdownInterval);
});
