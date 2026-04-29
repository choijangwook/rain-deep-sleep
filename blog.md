---
layout: default
title: Blog
---

<div class="post-list">

{% for post in site.posts %}

<div class="post-item"
     onclick="openModal('{{ post.title }}','{{ post.youtube_id }}')">

  <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/hqdefault.jpg">

  <h2>{{ post.title }}</h2>

</div>

{% endfor %}

</div>

<!-- 모달 -->
<div id="modal" class="modal">

  <div class="modal-content">

    <span class="close" onclick="closeModal()">×</span>

    <h2 id="modal-title"></h2>

    <div class="video-wrapper">
      <iframe id="yt-frame"
        src=""
        allow="autoplay; encrypted-media"
        allowfullscreen></iframe>
    </div>

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

</div>
