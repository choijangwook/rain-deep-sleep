---
layout: default
title: Blog
---

<div class="post-list">

{% assign posts = site.posts | sort: "date" | reverse %}

{% for post in posts %}

<div class="post-item"
     onclick="openModal('{{ post.title }}','{{ post.youtube_id }}')">

  <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/hqdefault.jpg">

  <h2>{{ post.title }}</h2>

</div>

{% if forloop.index % 5 == 0 %}
<div class="ad-slot">AdSense Inline</div>
{% endif %}

{% endfor %}

</div>
