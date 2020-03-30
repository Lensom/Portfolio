<template></template>  

<script>
export default {
  name: "About",
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