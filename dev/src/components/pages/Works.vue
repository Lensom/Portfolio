<template>
  <div class="page page-works__wrapper">
    <div class="page-works">
      <h1
        @click="show"
        this.text="Whatever you want to show"
      >Works page asd asda sdas dsa da sdsa dasdas dasd asd asd asd asda sd asd asd asd asda sd asd</h1>
      <div class="cursor" ref="cursorPhotos"></div>

      <div class="project-list">
        <div class="project p-1" @mouseover="showImage(1)">
          <div class="project-title">
            <h1>Motionland</h1>
          </div>
          <div class="project-categ">Branding</div>
          <div class="project-overlay" @mouseover="onOverlay" mouseout="outOverlay"></div>
        </div>

        <div class="project p-2" @mouseover="showImage(2)">
          <div class="project-title">
            <h1>Focus Reactive</h1>
          </div>
          <div class="project-categ">Photography</div>
          <div class="project-overlay" @mouseover="onOverlay" mouseout="outOverlay"></div>
        </div>

        <div class="project p-3" @mouseover="showImage(3)">
          <div class="project-title">
            <h1>Aspect</h1>
          </div>
          <div class="project-categ">Web Design</div>
          <div class="project-overlay" @mouseover="onOverlay" mouseout="outOverlay"></div>
        </div>

        <div class="project p-4" @mouseover="showImage(4)">
          <div class="project-title">
            <h1>Logomark</h1>
          </div>
          <div class="project-categ">Branding</div>
          <div class="project-overlay" @mouseover="onOverlay" mouseout="outOverlay"></div>
        </div>
      </div>

      <modal name="hello-world">{{text}}</modal>
    </div>
  </div>
</template>  

<script>
export default {
  name: "Index",
  data() {
    return {
      text: "adsad",
      flag: false
    };
  },
  beforeDestroy() {
    this.$root.loading = true;
  },
  methods: {
    show() {
      this.$modal.show("hello-world");
    },
    hide() {
      this.$modal.hide("hello-world");
    },
    showImage(index) {
      this.$refs.cursorPhotos.style.backgroundImage = `url(/static/img/image-${index}.jpg)`;
    },
    moveCircle(event) {
      console.log(event);
      TweenLite.to(this.$refs.cursorPhotos, 0.5, {
        css: {
          left: event.pageX,
          top: event.pageY
        },
        delay: 0.03
      });
    },
    onOverlay() {
      this.flag = true;
      TweenLite.to(this.$refs.cursorPhotos, 0.3, { scale: 1, autoAlpha: 1 });
      this.moveCircle(event);
    },
    outOverlay() {
      this.flag = false;
      TweenLite.to(this.$refs.cursorPhotos, 0.3, { scale: 0.1, autoAlpha: 0 });
    }
  },
  mounted() {
    setTimeout(() => {
      this.$root.loading = false;
    }, 600);
  }
};
</script>

<style scoped>
.project-title h1 {
  font-weight: 300;
}

.project-categ {
  font-weight: lighter;
}

.cursor {
  position: absolute;
  width: 600px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: scale(0.1);
  opacity: 0;
  margin: -100px 0 0 -100px;
  background-size: cover;
  z-index: 1;
}

.project {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 1;
  position: relative;
  z-index: 2;
  color: white;
  mix-blend-mode: difference;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
