<template>
  <div class="page page-works__wrapper">
    <div class="page-works">
      <h1 class="title" @click="show" this.text="Whatever you want to show">
        <span class="title__word">Some works:</span>
      </h1>
      <div class="cursor" ref="cursorPhotos"></div>

      <div class="project__list">
        <div v-for="item in items" :key="item.id" class="project" @mousemove="showImage(item.id)">
          <h2 class="project__title">{{item.title}}</h2>
          <div class="project__category">{{item.category}}</div>
          <div class="project__overlay" @mousemove="onOverlay" mouseout="outOverlay"></div>
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
      flag: false,
      items: [
        {
          id: 1,
          title: "Motionland",
          category: "Branding"
        },
        {
          id: 2,
          title: "Focus Reactive",
          category: "Photography"
        },
        {
          id: 3,
          title: "Aspect",
          category: "Web Design"
        },
        {
          id: 4,
          title: "Logomark",
          category: "Branding"
        }
      ]
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
      console.log("overlay");
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
    var tl = new TimelineMax();
    tl.delay(0.8).from(".title__word", 1.5, {
      y: "100%",
      ease: Power4.easeOut
    });
  }
};
</script>