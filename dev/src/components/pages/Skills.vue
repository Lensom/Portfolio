<template>
  <div class="page page-skills__wrapper">
    <div class="page-skills">
      <section class="container">
        <div class="section">
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
  },
  beforeDestroy() {
    this.$root.loading = true;
  }
};
</script>
