---
title: Carousel
type: bootstrap
section: sections
---

<div id="carousel1" class="carousel slide" data-interval="3000" data-carousel>
  <ol class="carousel-indicators">
    <li data-target="#carousel1" data-slide-to="0" class="active"></li>
    <li data-target="#carousel1" data-slide-to="1"></li>
    <li data-target="#carousel1" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="item active">
      <img src="/ui/img/sample/slide-1.png" alt="Slide 1">
      <div class="carousel-caption">slide caption...</div>
    </div>
    <div class="item">
      <img src="/ui/img/sample/slide-2.png" alt="Slide 2">
      <div class="carousel-caption">slide caption...</div>
    </div>
    <div class="item">
      <img src="/ui/img/sample/slide-3.png" alt="Slide 3">
      <div class="carousel-caption">slide caption...</div>
    </div>
  </div>
  <a class="left carousel-control" href="#carousel1" data-slide="prev">
    <span data-symbol="previous" class="symbol-large"></span>
  </a>
  <a class="right carousel-control" href="#carousel1" data-slide="next">
    <span data-symbol="next" class="symbol-large"></span>
  </a>
</div>
