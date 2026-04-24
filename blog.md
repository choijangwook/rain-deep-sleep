---
layout: default
title: Blog
---

# Blog

<div class="card-container">

{% for post in site.posts %}
  <div class="card">
    <a href="{{ site.baseurl }}{{ post.url }}">
      <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/0.jpg">
      <h3>{{ post.title }}</h3>
    </a>
  </div>
{% endfor %}

</div>
