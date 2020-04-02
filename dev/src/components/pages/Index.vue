<template>
  <div class="page page-home__wrapper">
    <div class="page-home">
      <h1 class="title anim-typewriter">
        Hi.
        <br />I'm Alexey.
      </h1>
      <h2 class="subtitle">Front End Developer / Freelancer</h2>
    </div>
  </div>
</template>  

<script>
import { gsap } from "gsap";

export default {
  name: "Index",
  mounted() {
    setTimeout(() => {
      this.$root.loading = false;
    }, 600);
  },
  beforeDestroy() {
    this.$root.loading = true;
  }
};
</script>
