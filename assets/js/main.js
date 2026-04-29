let sleepTimer = null;
let countdownInterval = null;

function openModal(title, videoId) {
  const modal = document.getElementById("modal");
  const frame = document.getElementById("yt-frame");

  document.getElementById("modal-title").innerText = title;

  frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("yt-frame").src = "";

  clearInterval(countdownInterval);
  clearTimeout(sleepTimer);
}

function setActiveButton(min) {
  document.querySelectorAll(".timer-container button").forEach(b => {
    b.classList.remove("active");
    if (b.dataset.time == min) b.classList.add("active");
  });
}

function setTimer(min) {
  const display = document.getElementById("timer-display");

  clearInterval(countdownInterval);
  clearTimeout(sleepTimer);

  setActiveButton(min);

  if (min == 0) {
    display.innerText = "OFF";
    return;
  }

  let t = min * 60;

  countdownInterval = setInterval(() => {
    let m = Math.floor(t / 60);
    let s = t % 60;
    display.innerText = `${m}:${s.toString().padStart(2, "0")}`;
    t--;
    if (t < 0) clearInterval(countdownInterval);
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".timer-container button").forEach(btn => {
    btn.addEventListener("click", () => {
      setTimer(parseInt(btn.dataset.time));
    });
  });
});
