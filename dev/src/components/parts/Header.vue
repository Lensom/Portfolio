<template>
  <header class="header" :class="{fadeInLeft: this.$root.animation}">
    <div class="header__wrapper">
      <div class="logotype">
        <router-link to="/">
          <logotype />
        </router-link>
      </div>
      <div class="nav__wrapper">
        <ul class="nav__menu">
          <li class="nav__menu--item" v-for="item in social" :key="item.text">
            <router-link :to="item.link" class="nav__menu--link">
              <i class="icon" :class="item.icon"></i>
              <span class="helper">{{item.text}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="social__wrapper">
        <ul class="social">
          <li class="social__menu--item">
            <a
              href="https://www.instagram.com/magurawork/"
              class="social__menu--link"
              target="_blank"
            >
              <i class="icon icon-instagram icon--sm"></i>
              <span class="helper">Instagram</span>
            </a>
          </li>
          <li class="social__menu--item">
            <a href="mailto:magurawork@gmail.com" class="social__menu--link">
              <i class="icon icon-gmail icon--sm"></i>
              <span class="helper">gmail</span>
            </a>
          </li>
          <li class="social__menu--item">
            <a
              href="https://www.linkedin.com/in/alexey-rybalko-20351714a/"
              class="social__menu--link"
              target="_blank"
            >
              <i class="icon icon-linkedin icon--sm"></i>
              <span class="helper">linkedin</span>
            </a>
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
  data() {
    return {
      social: [
        {
          text: "Home",
          link: "/",
          icon: "icon-home-run"
        },
        {
          text: "About",
          link: "/about",
          icon: "icon-user"
        },
        {
          text: "Skills",
          link: "/skills",
          icon: "icon-thunder"
        },
        {
          text: "Works",
          link: "/works",
          icon: "icon-sport-team"
        },
        {
          text: "Contact",
          link: "/contact",
          icon: "icon-mail"
        }
      ]
    };
  },
  components: {
    logotype
  }
};
</script>
