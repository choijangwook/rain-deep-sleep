---
layout: default
title: Blog
permalink: /blog/
---

# 🎬 All Videos

<div class="video-grid">

{% for post in site.posts %}
  <a href="{{ post.url | relative_url }}" class="video-card">
    <img src="https://img.youtube.com/vi/{{ post.video }}/hqdefault.jpg">
    <div class="video-title">{{ post.title }}</div>
  </a>
{% endfor %}

</div>
