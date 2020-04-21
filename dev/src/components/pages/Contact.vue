<template>
  <div class="page page-contact__wrapper">
    <div class="page-contact">
      <h1 class="title">
        <span class="title__word">Contact me</span>
      </h1>
      <div class="page-contact__form">
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "@/components/parts/Form";

export default {
  name: "Index",
  components: {
    Form
  },
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