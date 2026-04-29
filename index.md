---
layout: default
title: Home
---

<h1>🌧 Rain Deep Sleep</h1>

<div class="post-list">

{% assign sorted_posts = site.posts | sort: "views" | reverse %}

{% for post in sorted_posts %}

  <div class="post-item">
    <a href="{{ post.url | relative_url }}">

      <!-- 🔥 유튜브 썸네일 자동 -->
      <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/hqdefault.jpg"
           alt="thumbnail">

      <h2>{{ post.title }}</h2>

    </a>
  </div>

{% endfor %}

</div>
