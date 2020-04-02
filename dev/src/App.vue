<template>
  <Resize id="app" class="app-layout" :class="{ 'mobile' : $root.isMobile}">
    <CustomCursor></CustomCursor>
    <div class="background"></div>
    <Loader v-if="this.$root.mainLoading"></Loader>
    <div class="content" v-else>
      <Preloader />
      <Header></Header>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <!-- <Footer></Footer> -->
    </div>
  </Resize>
</template>

<script>
import Resize from "@/components/common/Resize";
import Header from "@/components/parts/Header";
import Footer from "@/components/parts/Footer";
import Preloader from "@/components/parts/Preloader";
import Loader from "@/components/parts/Loader";
import CustomCursor from "@/components/parts/CustomCursor";

export default {
  name: "app",
  components: {
    Resize,
    Header,
    Footer,
    Preloader,
    Loader,
    CustomCursor
  },
  data() {
    return {};
  },
  computed: {
    routerName() {
      return this.$route.name;
    }
  },
  mounted() {
    this.$root.animation = true;
    this.$root.loading = false;

    setTimeout(() => {
      this.$root.mainLoading = false;
    }, 1000);
  }
};
</script>