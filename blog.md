---
layout: default
title: Blog
---

# Blog

<div class="card-container">

{% for post in site.posts %}
  <div class="card">
    <a href="{{ site.baseurl }}{{ post.url }}">
      
      <div class="thumb">
        <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/0.jpg">
        <div class="play-button"></div>
      </div>

      <h3>{{ post.title }}</h3>
    </a>
  </div>
{% endfor %}

</div>
