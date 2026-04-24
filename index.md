---
layout: default
title: Rain Deep Sleep
---

<h1 class="main-title">
8시간 연속재생, 10분후 화면 꺼짐 8H Play, Screen Off in 10 Min
</h1>

<!-- 광고 -->
<div class="ad-box">
  <!-- 애드센스 코드 넣는 자리 -->
</div>

## Latest Posts

<div class="card-container">

{% for post in site.posts limit:6 %}
  <div class="card">

    <!-- 썸네일 → 유튜브 이동 -->
    <a href="https://www.youtube.com/watch?v={{ post.youtube_id }}">
      <div class="thumb">
        <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/0.jpg">
        <div class="play-button"></div>
      </div>
    </a>

    <!-- 제목 → 상세페이지 -->
    <h3 class="card-title">
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h3>

  </div>
{% endfor %}

</div>
