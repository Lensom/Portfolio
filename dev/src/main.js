import Vue from 'vue';
import App from './App';
import router from './router';
import { store } from './store';
import Typograf from 'typograf';
import VueValidate from 'vee-validate'
import { dictionary } from './validate';
import Helpers from './tools/Helpers';
import ShareLink from './tools/share';
import VModal from 'vue-js-modal';
import VueI18n from 'vue-i18n'

import "./assets/scss/app.scss";


Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })


Vue.use(VueValidate, {
    locale: 'ru',
    dictionary: {
        en: dictionary.en,
        ru: dictionary.ru
    }
});

Vue.use(VueI18n)

let Tp = new Typograf({ locale: ['ru', 'en-US'] });
Vue.directive('typograph', {
    bind: (el, binding, vnode) => {
        el.innerHTML = Tp.execute(el.innerHTML)
    }
});

Vue.use(ShareLink);


Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    data() {
        return {
            isMobile: Helpers.isMobile(),
            isIE: Helpers.isIE(),
            macOs: Helpers.isMac(),
            Helpers: Helpers,
            loading: true,
            mainLoading: true,
            animation: false
        }
    },
    created() {
        window.vue = this;
        this.$on('onResize', () => {
            this.isMobile = Helpers.isMobile();
        })
        function setDocHeight() {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
        };

        window.addEventListener('resize', setDocHeight)
        window.addEventListener('orientationchange', setDocHeight)

        setDocHeight();

        // Get orientation mobile
        function getOrientation() {
            let orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
            return orientation == 'Landscape'
                ? document.querySelector('body').style.overflow = 'auto'
                : document.querySelector('body').style.overflow = 'hidden'
        }

        window.onresize = function () {
            getOrientation();
        }

        getOrientation();


    },
    components: { App },
});
