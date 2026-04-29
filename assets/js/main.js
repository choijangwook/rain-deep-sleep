let sleepTimer = null;
let countdownInterval = null;

function openPost(title, youtubeId) {
  const area = document.getElementById("player-area");

  document.getElementById("player-title").innerText = title;

  const thumb = document.getElementById("player-thumb");
  thumb.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  area.style.display = "block";

  window.scrollTo({ top: area.offsetTop, behavior: "smooth" });
}

function setActiveButton(minutes) {
  document.querySelectorAll(".timer-container button").forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.time == minutes) btn.classList.add("active");
  });
}

function setSleepTimer(minutes) {
  const display = document.getElementById("timer-display");

  clearInterval(countdownInterval);
  clearTimeout(sleepTimer);

  setActiveButton(minutes);

  if (minutes == 0) {
    display.innerText = "OFF";
    return;
  }

  let t = minutes * 60;

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
      setSleepTimer(parseInt(btn.dataset.time));
    });
  });
});
