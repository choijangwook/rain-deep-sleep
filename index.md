---
layout: default
title: Home
---

<h1>🌧 Rain Deep Sleep</h1>
<p>Relaxing rain sounds for deep sleep.</p>

{% for post in site.posts %}
<div class="post-item">
  <a href="{{ site.baseurl }}{{ post.url }}">
    <img src="/assets/thumb.jpg" alt="thumbnail">
    <h2>{{ post.title }}</h2>
  </a>
</div>
{% endfor %}
