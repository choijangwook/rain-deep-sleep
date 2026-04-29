let sleepTimer = null;
let countdown = null;

function openModal(title, videoId) {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("yt-frame");

  document.getElementById("modal-title").innerText = title;

  // 🔥 핵심: 항상 새로 로드 (이전 오디오 제거)
  frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("yt-frame");

  modal.style.display = "none";

  // 🔥 완전 정지 핵심
  frame.src = "";

  clearTimeout(sleepTimer);
  clearInterval(countdown);

  document.getElementById("timer-display").innerText = "No timer";

  document.querySelectorAll(".timer-container button")
    .forEach(b => b.classList.remove("active"));
}

function setActive(btnTime) {
  document.querySelectorAll(".timer-container button").forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.time == btnTime) btn.classList.add("active");
  });
}

function setTimer(min) {
  const display = document.getElementById("timer-display");

  clearTimeout(sleepTimer);
  clearInterval(countdown);

  setActive(min);

  if (min == 0) {
    display.innerText = "OFF";
    return;
  }

  let t = min * 60;

  countdown = setInterval(() => {
    let m = Math.floor(t / 60);
    let s = t % 60;

    display.innerText = `⌛ ${m}:${s.toString().padStart(2, "0")}`;

    t--;

    if (t < 0) {
      clearInterval(countdown);
    }
  }, 1000);

  // 🔥 종료 처리 (핵심 수정)
  sleepTimer = setTimeout(() => {

    clearInterval(countdown);

    const frame = document.getElementById("yt-frame");

    // 🔥 유튜브 완전 종료 트릭
    frame.src = "";

    display.innerText = "😴 Sleep ended";

    document.querySelectorAll(".timer-container button")
      .forEach(b => b.classList.remove("active"));

  }, min * 60 * 1000);
}

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".timer-container button").forEach(btn => {
    btn.addEventListener("click", () => {
      setTimer(parseInt(btn.dataset.time));
    });
  });

});
