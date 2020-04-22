<template>
  <div class="page page-home__wrapper">
    <div class="page-home">
      <h1 class="title">
        <span class="title__word">Hi.</span>
      </h1>
      <h1 class="title">
        <span class="title__word">I'm Alexey.</span>
      </h1>
      <h2 class="subtitle">Front End Developer / Freelancer</h2>

      <div class="ellipse-container">
        <div class="ellipse thin"></div>
        <div class="ellipse thick"></div>
        <div class="ellipse yellow"></div>
        <div class="circle1">
          <router-link to="/contact">Ready for work</router-link>
        </div>
        <div class="circle2">
          <router-link to="/works">Portfolio</router-link>
        </div>
      </div>
    </div>

    <div class="page-home__alert">
      <p class="text">The site is still under construction.</p>
    </div>
  </div>
</template>  

<script>
// import { TimeLineMax } from "gsap";

export default {
  name: "Index",
  mounted() {
    setTimeout(() => {
      this.$root.loading = false;
    }, 600);
    var tl = new TimelineMax();
    tl.delay(0.8).from(".title__word", 1.5, {
      y: "100%",
      ease: Power4.easeOut
    });
    TweenMax.from(".ellipse-container", 1, {
      delay: 2,
      opacity: 0,
      ease: Expo.easeInOut
    });

    TweenMax.from(".yellow", 1, {
      delay: 3.5,
      opacity: 0,
      ease: Expo.easeInOut
    });

    TweenMax.from(".circle1", 1, {
      delay: 2.4,
      opacity: 0,
      ease: Expo.easeInOut
    });

    TweenMax.from(".circle2", 1, {
      delay: 2.6,
      opacity: 0,
      ease: Expo.easeInOut
    });

    tl.delay(0.3).from(".page-home__alert", 0.5, {
      y: "100%",
      opacity: 0,
      ease: Power4.easeOut
    });
  },
  beforeDestroy() {
    this.$root.loading = true;
  }
};
</script>
