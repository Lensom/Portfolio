<template>
  <div class="page page-works__wrapper">
    <div class="page-works">
      <h1 class="title">
        <span class="title__word">Some works:</span>
      </h1>
      <div class="cursor" ref="cursorPhotos"></div>

      <div class="project__list">
        <div
          v-for="item in items"
          :key="item.id"
          class="project"
          @mousemove="showImage(item.id)"
          @click="show(item.text)"
        >
          <h2 class="project__title">{{item.title}}</h2>
          <div class="project__category">{{item.category}}</div>
          <div class="project__overlay" @mousemove="onOverlay" mouseout="outOverlay"></div>
        </div>
      </div>

      <modal name="project">{{text}}</modal>
    </div>
  </div>
</template>  

<script>
export default {
  name: "Index",
  data() {
    return {
      text: "",
      flag: false,
      items: [
        {
          id: 1,
          title: "Personal Impulse",
          category: "Development",
          link: "https://www.personalimpulse.nl/",
          text: "Text about Personal"
        },
        {
          id: 2,
          title: "Owhataday Studio",
          category: "Development",
          link: "http://owhataday.studio/",
          text: "Text about Owhataday"
        },
        {
          id: 3,
          title: "Fenit Protector",
          category: "Development",
          link: "https://www.fenix-protector.com/",
          text: "Text about Protector"
        },
        {
          id: 4,
          title: "Deltavision",
          category: "Development",
          link: "https://deltavision.cz/",
          text: "Text about Deltavision"
        }
      ]
    };
  },
  beforeDestroy() {
    this.$root.loading = true;
  },
  methods: {
    show(text) {
      this.$modal.show("project");
      this.text = text;
    },
    hide() {
      this.$modal.hide("project");
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