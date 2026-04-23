---
layout: default
title: Home
---

# Rain Deep Sleep 🌧️

Calm rain ambience for sleep, focus, and relaxation.

<div class="player-box">

<button onclick="playRain()">▶ Play</button>
<button onclick="pauseRain()">⏸ Pause</button>

<input type="range" min="0" max="1" step="0.01" onchange="setVolume(this.value)">

<audio id="rainAudio" loop>
  <source src="assets/audio/rain.mp3" type="audio/mpeg">
</audio>

</div>

---

## Latest Posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
