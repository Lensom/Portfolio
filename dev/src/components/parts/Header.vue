<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="logotype">
        <router-link to="/">
          <logotype />
        </router-link>
      </div>
      <div class="nav__wrapper">
        <ul class="nav__menu">
          <li class="nav__menu--item">
            <router-link to="/" class="nav__menu--link">
              <i class="icon icon-home-run"></i>
            </router-link>
          </li>
          <li class="nav__menu--item">
            <router-link to="/about" class="nav__menu--link">
              <i class="icon icon-user"></i>
            </router-link>
          </li>
          <li class="nav__menu--item">
            <router-link to="/skills" class="nav__menu--link">
              <i class="icon icon-thunder"></i>
            </router-link>
          </li>
          <li class="nav__menu--item">
            <router-link to="/works" class="nav__menu--link">
              <i class="icon icon-sport-team"></i>
            </router-link>
          </li>
          <li class="nav__menu--item">
            <router-link to="/contact" class="nav__menu--link">
              <i class="icon icon-mail"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="social__wrapper">
        <ul class="social">
          <li class="social__menu--item">
            <a href="#" class="social__menu--item"></a>
          </li>
          <li class="social__menu--item">
            <a href="#" class="social__menu--item"></a>
          </li>
          <li class="social__menu--item">
            <a href="#" class="social__menu--item"></a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import logotype from "@/assets/svg/logotype.svg";

export default {
  name: "Header",
  components: {
    logotype
  }
};
</script>
