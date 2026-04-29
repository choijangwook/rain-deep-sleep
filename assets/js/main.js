let sleepTimer = null;
let countdownInterval = null;

// 기본값 (저장값 있으면 그걸 사용)
let defaultTimerMinutes = localStorage.getItem("sleepTimer")
  ? parseInt(localStorage.getItem("sleepTimer"))
  : 60;

// 타이머 설정
function setSleepTimer(minutes) {
  const audio = document.querySelector("audio");
  const display = document.getElementById("timer-display");

  // 기존 타이머 제거
  if (sleepTimer) clearTimeout(sleepTimer);
  if (countdownInterval) clearInterval(countdownInterval);

  if (minutes === 0) {
    if (display) display.innerText = "Timer OFF";
    localStorage.setItem("sleepTimer", 0);
    return;
  }

  // 저장
  localStorage.setItem("sleepTimer", minutes);

  let remainingSeconds = minutes * 60;

  // 카운트다운 표시
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

  // 실제 종료 타이머
  sleepTimer = setTimeout(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    if (display) display.innerText = "😴 Sleep well";

  }, minutes * 60 * 1000);
}

// 자동 타이머 (재생 시)
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio");

  if (!audio) return;

  audio.addEventListener("play", () => {
    if (!sleepTimer && defaultTimerMinutes > 0) {
      setSleepTimer(defaultTimerMinutes);
    }
  });
});

// 페이지 떠날 때 정리
window.addEventListener("beforeunload", () => {
  if (sleepTimer) clearTimeout(sleepTimer);
  if (countdownInterval) clearInterval(countdownInterval);
});
