<template>
  <div class="page page-about__wrapper">
    <div class="page-about">
      <h1>About page asd asda sdas dsa da sdsa dasdas dasd asd asd asd asda sd asd asd asd asda sd as</h1>
    </div>
  </div>
</template>  

<script>
export default {
  name: "About",
  mounted() {
    setTimeout(() => {
      this.$root.loading = false;
    }, 750);
  },
  beforeDestroy() {
    this.$root.loading = true;
  }
};
</script>