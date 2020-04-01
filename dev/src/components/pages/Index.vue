<template>
  <div class="page page-home__wrapper">
    <div class="page-home">
      <h1>Home page asd asda sdas dsa da sdsa dasdas dasd asd asd asd asda sd asd asd asd asda sd asd</h1>
    </div>
  </div>
</template>  

<script>
export default {
  name: "Index",
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.$root.loading = false;
    }, 750);
  },
  beforeDestroy() {
    this.$root.loading = true;
  }
};
</script>
