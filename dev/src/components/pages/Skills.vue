<template>
  <div class="page page-skills__wrapper">
    <div class="page-skills">
      <h1>Skills page asd asda sdas dsa da sdsa dasdas dasd asd asd asd asda sd asd asd asd asda sd asd</h1>
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
