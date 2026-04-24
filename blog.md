---
layout: default
title: Blog
---

# Blog

<div class="card-container">

{% for post in site.posts %}
  <div class="card">

    <a href="https://www.youtube.com/watch?v={{ post.youtube_id }}" target="_blank">
      
      <div class="thumb">
        <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/0.jpg">
        <div class="play-button"></div>
      </div>

    </a>

    <h3>
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h3>

  </div>
{% endfor %}

</div>
