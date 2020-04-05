<template>
  <div class="page page-skills__wrapper">
    <div class="page-skills">
      <section class="container">
        <div class="section">
          <div class="overlay first"></div>

          <div class="cplanet">
            <div class="planet"></div>
            <div class="planetname">
              <span class="line"></span>
            </div>
          </div>
          <div class="desc"></div>
          <div class="ccmoon">
            <div class="cmoon">
              <div class="moon"></div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="overlay second"></div>
          <div class="cplanet">
            <div class="planet"></div>
            <div class="planetname">
              <span class="line"></span>
            </div>
          </div>
          <div class="desc"></div>
          <div class="ccmoon">
            <div class="cmoon">
              <div class="moon"></div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="overlay third"></div>
          <div class="cplanet">
            <div class="planet"></div>
            <div class="planetname">
              <span class="line"></span>
            </div>
          </div>
          <div class="desc"></div>
          <div class="ccmoon">
            <div class="cmoon">
              <div class="moon"></div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="overlay fourth"></div>
          <div class="cplanet">
            <div class="planet"></div>
            <div class="planetname">
              <span class="line"></span>
            </div>
          </div>
          <div class="desc"></div>
          <div class="ccmoon">
            <div class="cmoon">
              <div class="moon"></div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="overlay fifth"></div>
          <div class="cplanet">
            <div class="planet"></div>
            <div class="planetname">
              <span class="line"></span>
            </div>
          </div>
          <div class="desc"></div>
          <div class="ccmoon">
            <div class="cmoon">
              <div class="moon"></div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="overlay sixth"></div>
          <div class="cplanet">
            <div class="planet"></div>
            <div class="planetname">
              <span class="line"></span>
            </div>
          </div>
          <div class="desc"></div>
          <div class="ccmoon">
            <div class="cmoon">
              <div class="moon"></div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="overlay seventh"></div>
          <div class="cplanet">
            <div class="planet"></div>
            <div class="planetname">
              <span class="line"></span>
            </div>
          </div>
          <div class="desc"></div>
          <div class="ccmoon">
            <div class="cmoon">
              <div class="moon"></div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="overlay eighth"></div>
          <div class="cplanet">
            <div class="planet"></div>
            <div class="planetname">
              <span class="line"></span>
            </div>
          </div>
          <div class="desc"></div>
          <div class="ccmoon">
            <div class="cmoon">
              <div class="moon"></div>
            </div>
          </div>
        </div>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
        <span class="star"></span>
      </section>
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

    // OVERLAY
    TweenMax.to(".first", 1, {
      delay: 0.5,
      top: "-100%",
      ease: Expo.easeInOut
    });

    TweenMax.to(".second", 1, {
      delay: 0.7,
      top: "-100%",
      ease: Expo.easeInOut
    });

    TweenMax.to(".third", 1, {
      delay: 0.9,
      top: "-100%",
      ease: Expo.easeInOut
    });
    TweenMax.to(".fourth", 1, {
      delay: 1.1,
      top: "-100%",
      ease: Expo.easeInOut
    });
    TweenMax.to(".fifth", 1, {
      delay: 1.3,
      top: "-100%",
      ease: Expo.easeInOut
    });
    TweenMax.to(".sixth", 1, {
      delay: 1.5,
      top: "-100%",
      ease: Expo.easeInOut
    });
    TweenMax.to(".seventh", 1, {
      delay: 1.7,
      top: "-100%",
      ease: Expo.easeInOut
    });
    TweenMax.to(".eighth", 1, {
      delay: 1.9,
      top: "-100%",
      ease: Expo.easeInOut
    });
  },
  beforeDestroy() {
    this.$root.loading = true;
  }
};
</script>


<style>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  background: #181818;
  z-index: 1;
}
</style> 
