---
layout: default
title: Home
---

# Rain Deep Sleep

Calm rain ambience for sleep, focus, and relaxation.

▶ Click play below:

<audio controls loop>
  <source src="assets/audio/rain.mp3" type="audio/mpeg">
</audio>

---

## Latest Posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
