---
layout: default
title: Home
---

<h1>🌧 Rain Deep Sleep</h1>

<div class="post-list">
{% for post in site.posts %}
  <div class="post-item">
    <a href="{{ post.url | relative_url }}">

      <!-- 썸네일 -->
      <img src="{{ '/assets/thumb.png' | relative_url }}" alt="thumbnail">

      <!-- 제목 -->
      <h2>{{ post.title }}</h2>

    </a>
  </div>
{% endfor %}
</div>
