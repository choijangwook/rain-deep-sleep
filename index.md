---
layout: default
title: Home
---

<h1>🌧 Rain Deep Sleep</h1>

<p>Relaxing rain sounds for deep sleep.</p>

<div class="ad-box">
  <!-- 🔥 여기에 애드센스 코드 넣기 -->
  AdSense Area
</div>

{% for post in site.posts %}
<div class="post-item">
  <a href="{{ site.baseurl }}{{ post.url }}">
    <img src="/assets/thumb.jpg">
    <h2>{{ post.title }}</h2>
  </a>
</div>
{% endfor %}
