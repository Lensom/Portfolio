<template>
  <div class="page page-works__wrapper">
    <div class="page-works">
      <h1
        @click="show"
        this.text="Whatever you want to show"
      >Works page asd asda sdas dsa da sdsa dasdas dasd asd asd asd asda sd asd asd asd asda sd asd</h1>
      <modal name="hello-world">{{text}}</modal>
    </div>
  </div>
</template>  

<script>
export default {
  name: "Index",
  data() {
    return {
      text: "adsad"
    };
  },
  mounted() {
    setTimeout(() => {
      this.$root.loading = false;
    }, 600);
  },
  beforeDestroy() {
    this.$root.loading = true;
  },
  methods: {
    show() {
      // this.text = "Whatever you want to show";
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    }
  }
};
</script>
