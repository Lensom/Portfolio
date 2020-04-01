<template>
  <div class="preloader" :class="{ active: this.$root.loading }">
    <div class="preloader__line preloader__line--first"></div>
    <div class="preloader__line preloader__line--second"></div>
  </div>
</template>
