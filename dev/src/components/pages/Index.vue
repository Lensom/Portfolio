<template>
  <div class="page page-home__wrapper">
    <div class="page-home">
      <h1>Home page asd Home page asdHome page asdHome page asdHome page asdHome page asdHome page asdHome page asdHome page asdHome page asd asd asd asda sd asd</h1>
    </div>
  </div>
</template>  

<script>
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
