<template>
  <div class="page page-about__wrapper">
    <div class="page-about">
      <h1 class="title">
        <span class="title__word">About me.</span>
      </h1>

      <div class="page-about__text--wrapper">
        <div class="page-about__text">
          <p class="text">
            I am a Front End developer based in Ukraine. I have been developing since 2017 and still study and improve my skills.
            National and international customers have relied on me for development, implementation, and management of their digital products.
          </p>
          <p class="text">
            As a freelancer, I works also with web agencies, companies,
            startups and individuals to create a awesome websites and applications for the digital business.
          </p>
          <p class="text">
            You can
            <router-link class="page-about__link" to="/contact">contact me here</router-link>, or in social networks.
          </p>
        </div>
        <div class="page-about__exp--wrapper">
          <div class="page-about__exp">
            <h3 class="title-sm">Experiences</h3>
            <ul class="page-about__list">
              <li
                class="page-about__list--item"
              >Nikitin Team / Front End Developer / APR 2019 - FEB 2020</li>
              <li
                class="page-about__list--item"
              >Yesgroup / junior Front End Developer / OCT 2018 - APR 2019</li>
              <li class="page-about__list--item">Freelancer / OCT 2017 - OCT 2018</li>
              <li class="page-about__list--item">The beginning of the Front End way / MAY 2017</li>
            </ul>
          </div>
          <div class="page-about__rec">
            <h3 class="title-sm">Recognition</h3>
            <ul class="page-about__list">
              <li
                class="page-about__list--item"
              >Postcard web application by March 8, Sberbank of Russia, 3 million users, sharing and augmented reality (AR)</li>
              <li
                class="page-about__list--item"
              >Website postcard for Valentine's Day in Belarus. 15 thousand people shared in social networks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  

<script>
export default {
  name: "About",
  mounted() {
    setTimeout(() => {
      this.$root.loading = false;
    }, 600);
    var tl = new TimelineMax();
    tl.delay(0.8).from(".title__word", 1.5, {
      y: "100%",
      ease: Power4.easeOut
    });
  },
  beforeDestroy() {
    this.$root.loading = true;
  }
};
</script>