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
    </div>
  </div>
</template>  

<script>
import { TimeLineMax } from "gsap";

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
  },
  beforeDestroy() {
    this.$root.loading = true;
  }
};
</script>
