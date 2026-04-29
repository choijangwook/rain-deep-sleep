---
layout: default
title: Blog
---

<div class="post-list">

{% for post in site.posts %}

<div class="post-item"
     onclick="openPost('{{ post.title }}','{{ post.youtube_id }}')">

  <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/hqdefault.jpg"
       alt="thumbnail">

  <h2>{{ post.title }}</h2>

</div>

{% endfor %}

</div>
