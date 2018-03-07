<template>
  <v-app class="myapp">
    <v-toolbar
      dark
      tabs
      color="primary darken-2"
      class="header"
    >
      <h1 class="header-title">
        <word-mark/>
      </h1>
      <v-tabs
        slot="extension"
        v-model="tab"
        color="primary"
        grow
      >
        <v-tabs-slider color="accent"/>
        <v-tab
          v-for="item in tabs"
          :key="item.key"
          :to="item.target"
          nuxt
        >
          {{ item.label }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <nuxt id="nuxt"/>
    <v-footer
      class="footer"
      dark
      app
      color="primary darken-2"
      height="60px"
    >
      <div class="footer-left">
        <word-mark/>
      </div>
      <div class="footer-right">
        <social-icon
          v-for="icon in socialIcons"
          :key="icon.key"
          :target="icon.target"
          :src="icon.img"
          :title="icon.title"
          :alt="icon.title"
        />
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css';
import AsyncComputed from 'vue-async-computed';
import SocialIcon from '@/components/SocialIcon';
import Vue from 'vue';
import Vuetify from 'vuetify';
import WordMark from '@/components/WordMark';

Vue.use(Vuetify, {
  theme: {
    primary: '#691b99',
    secondary: '#e1e2e1',
    accent: '#00b0ff'
  }
});
Vue.use(AsyncComputed);



export default {
  transition: 'page',
  components: {
    SocialIcon,
    WordMark
  },
  data() {
    return {
      tab: '',
      tabs: [
        {
          key: 'about',
          label: 'About',
          target: '/about'
        },
        {
          key: 'resume',
          label: 'Resume',
          target: '/resume'
        },
        {
          key: 'contact',
          label: 'Contact',
          target: '/contact'
        }
      ],
      socialIcons: [
        {
          key: 'googlePlus',
          title: 'Google+',
          img: '/images/social/google-plus.svg',
          target: 'https://plus.google.com/+ScottMiller171'
        },
        {
          key: 'twitter',
          title: 'Twitter',
          img: '/images/social/twitter.svg',
          target: 'https://twitter.com/Miller_Geek'
        },
        {
          key: 'gitHub',
          title: 'GitHub',
          img: '/images/social/github.svg',
          target: 'https://github.com/smiller171'
        },
        {
          key: 'keybase',
          title: 'KeyBase',
          img: '/images/social/keybase.svg',
          target: 'https://keybase.io/smiller171'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  line-height: 1.5;
}
.header-title {
  width: 100%;
  text-align: center;
  font-weight: 400;
}

@media all and (min-width: 465px) {
  .header-title {
    font-size: 70px;
  }
}
@media all and (max-width: 465px) and (min-width: 50px) {
  .header-title {
    font-size: 15vw;
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 60px;
  box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, .2), 0 -4px 5px 0 rgba(0, 0, 0, .14), 0 -1px 10px 0 rgba(0, 0, 0, .12);
}

.footer-right {
  display: flex;
  justify-content: flex-end;
}
</style>


<style lang="scss">
$aws-color: #f90;
$docker-color: #0db7ed;

.header {
  .toolbar__content {
    height: auto !important;
  }
}

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.myapp {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
}

</style>
