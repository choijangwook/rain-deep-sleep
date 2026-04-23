---
layout: default
title: Home
---

# Rain Deep Sleep 🌧️

<div>

<button id="playBtn" onclick="playRain()">▶ Play</button>
<button id="pauseBtn" onclick="pauseRain()">⏸ Pause</button>

<br><br>

<input type="range" min="0" max="1" step="0.01" onchange="setVolume(this.value)">

<audio id="rainAudio" loop>
  <source src="assets/audio/rain.mp3" type="audio/mpeg">
</audio>

</div>

---

## 🎬 Latest Videos

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
