---
layout: default
title: Rain Deep Sleep
---

# Rain Deep Sleep 🌧️

<!-- 광고 영역 -->
<div class="ad-box">

<!-- Google AdSense 코드 넣는 곳 -->
<script async 
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
crossorigin="anonymous"></script>

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXX"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

</div>

## Latest Posts

<div class="card-container">

{% for post in site.posts limit:6 %}
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
