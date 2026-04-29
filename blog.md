---
layout: default
title: Blog
---

<h1>📚 Blog</h1>

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
