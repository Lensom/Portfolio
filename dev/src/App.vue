<template>
  <Resize id="app" class="app-layout" :class="{ 'mobile' : $root.isMobile}">
    <div class="background"></div>
    <div class="content">
      <Header></Header>
      <Preloader />
      <router-view></router-view>

      <Footer></Footer>
    </div>
  </Resize>
</template>

<script>
import Resize from "@/components/common/Resize";
import Header from "@/components/parts/Header";
import Footer from "@/components/parts/Footer";
import Preloader from "@/components/parts/Preloader";

export default {
  name: "app",
  components: {
    Resize,
    Header,
    Footer,
    Preloader
  },
  data() {
    return {};
  },
  computed: {
    routerName() {
      return this.$route.name;
    }
  }
};
</script>
