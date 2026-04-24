---
layout: default
title: Rain Deep Sleep
---

# Rain Deep Sleep 🌧️

Calming rain sounds for sleep, focus, and relaxation.

## Latest Posts

<div style="display:flex; gap:20px; flex-wrap:wrap;">

{% for post in site.posts limit:3 %}
  {% assign youtube_id = "" %}

  {% if post.title contains "Wooden House" %}
    {% assign youtube_id = "qstgnUFHMHA" %}
  {% elsif post.title contains "Forest Tent" %}
    {% assign youtube_id = "z9EeJnHKQ1M" %}
  {% endif %}

  <div style="width:300px;">
    <a href="{{ site.baseurl }}{{ post.url }}">
      <img src="https://img.youtube.com/vi/{{ youtube_id }}/0.jpg" 
           style="width:100%; border-radius:10px;">
      <p><strong>{{ post.title }}</strong></p>
    </a>
  </div>

{% endfor %}

</div>
