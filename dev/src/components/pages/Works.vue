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
          @click="show(item)"
        >
          <h2 class="project__title">{{item.title}}</h2>
          <div class="project__category">{{item.category}}</div>
          <div class="project__overlay" @mousemove="onOverlay" mouseout="outOverlay"></div>
        </div>
      </div>

      <transition name="fade">
        <modal name="project" :width="900" :height="500">
          <h3 class="v--modal__title">{{title}}</h3>
          <p class="v--modal__text">{{text}}</p>
          <h4 class="v--modal__subtitle">Used technologies:</h4>
          <ul class="v--modal__list">
            <li v-for="(technology, index) in this.technologies" :key="index">{{technology}}</li>
          </ul>
          <div class="v--modal__btn">
            <a class="btn--submit" :href="this.link" target="_blank" rel="nofollow">Go to Website</a>
          </div>
        </modal>
      </transition>
    </div>
  </div>
</template>  

<script>
export default {
  name: "Index",
  data() {
    return {
      text: "",
      title: "",
      technologies: "",
      link: "",
      flag: false,
      items: [
        {
          id: 1,
          title: "Personal Impulse",
          category: "Development",
          link: "https://www.personalimpulse.nl/",
          text: "WordPress Blog for Personal Trainer Deventer",
          technologies: [
            "HTML5/CSS3",
            "JavaScript",
            "jQuery",
            "WordPress",
            "Youtube API",
            "Animation"
          ]
        },
        {
          id: 2,
          title: "Owhataday Studio",
          category: "Development",
          link: "http://owhataday.studio/",
          text: "Wordpress Blog for Wedding Studio",
          technologies: [
            "HTML5/CSS3",
            "JavaScript",
            "jQuery",
            "WordPress",
            "AJAX",
            "Animation"
          ]
        },
        {
          id: 3,
          title: "Fenix Protector",
          category: "Development",
          link: "https://www.fenix-protector.com/",
          text: "Online Store for ammunition store",
          technologies: [
            "HTML5/CSS3",
            "JavaScript",
            "jQuery",
            "WordPress",
            "AJAX",
            "Animation"
          ]
        },
        {
          id: 4,
          title: "C&com",
          category: "Development",
          link: "https://ccom.cz/",
          text: "Blog for online marketing company",
          technologies: [
            "HTML5/CSS3",
            "JavaScript",
            "jQuery",
            "WordPress",
            "AJAX",
            "Animation"
          ]
        }
      ]
    };
  },
  beforeDestroy() {
    this.$root.loading = true;
  },
  methods: {
    show(obj) {
      this.$modal.show("project");
      this.text = obj.text;
      this.title = obj.title;
      this.technologies = obj.technologies;
      this.link = obj.link;
    },
    hide() {
      this.$modal.hide("project");
    },
    showImage(index) {
      this.$refs.cursorPhotos.style.backgroundImage = `url(/static/img/image-${index}.png)`;
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>