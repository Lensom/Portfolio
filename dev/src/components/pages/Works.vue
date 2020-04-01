<template>
  <div class="page page-works__wrapper">
    <div class="page-works">
      <h1>Works page asd asda sdas dsa da sdsa dasdas dasd asd asd asd asda sd asd asd asd asda sd asd</h1>
    </div>
  </div>
</template>  

<script>
export default {
  name: "Index",
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
