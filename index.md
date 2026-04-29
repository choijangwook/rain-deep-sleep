---
layout: default
title: Home
---

<div class="post-list">

{% for post in site.posts %}

<div class="post-item"
     onclick="openPost('{{ post.title }}','{{ post.youtube_id }}')">

  <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/hqdefault.jpg"
       alt="thumbnail">

  <h2>{{ post.title }}</h2>

</div>

{% endfor %}

</div>

<!-- 🔥 플레이어 + 타이머 영역 -->
<div id="player-area" class="player-area">

  <h2 id="player-title"></h2>

  <img id="player-thumb" src="">

  <div id="timer-display">No timer</div>

  <div class="timer-container">
    <button data-time="30">30m</button>
    <button data-time="60">1h</button>
    <button data-time="120">2h</button>
    <button data-time="240">4h</button>
    <button data-time="480">8h</button>
    <button data-time="0">OFF</button>
  </div>

</div>
