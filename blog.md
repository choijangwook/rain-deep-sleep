---
layout: default
title: Blog
---

<h1>📚 Blog</h1>

<div class="post-list">
{% for post in site.posts %}
  <div class="post-item">
    <a href="{{ post.url | relative_url }}">

      <img src="{{ '/assets/thumb.png' | relative_url }}" alt="thumbnail">

      <h2>{{ post.title }}</h2>

    </a>
  </div>
{% endfor %}
</div>
