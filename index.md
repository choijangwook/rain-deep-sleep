---
layout: default
title: Home
---

<h1>🌧 Rain Deep Sleep</h1>
<p>Relaxing rain sounds for deep sleep.</p>

<div class="post-list">
{% for post in site.posts %}
  <div class="post-item">
    <a href="{{ site.baseurl }}{{ post.url }}">
      <img src="{{ site.baseurl }}/assets/thumb.jpg" alt="thumbnail">
      <h2>{{ post.title }}</h2>
    </a>
  </div>
{% endfor %}
</div>
