<template>
  <v-app>
    <v-toolbar
      tabs
      dark
      color="primary darken-2"
      class="header"
      fixed
    >
      <h1 class="header-title">
        <span class="name">Scott </span><span class="name">Miller</span>
      </h1>
      <v-tabs
        slot="extension"
        v-model="tab"
        color="primary"
        grow
      >
        <v-tabs-slider
          color="accent"
        />
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
    <nuxt/>
    <v-footer
      class="footer"
      dark
      app
      color="primary darken-2"
      height="60px"
    >
      <div class="footer-left">
        <span class="name">Scott </span><span class="name">Miller</span>
      </div>
      <div class="footer-right">
        <div
          v-for="icon in socialIcons"
          :key="icon.key"
          class="iconDiv"
        >
          <nuxt-link :to="icon.target">
            <img
              :title="icon.title"
              :src="icon.img" 
              :alt="icon.title"
              height="40"
              class="iconImg"
            >
          </nuxt-link>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  theme: {
    primary: '#691b99',
    secondary: '#e1e2e1',
    accent: '#00b0ff'
  }
});



export default {
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
  // height: 100%;
  width: 100%;
  text-align: center;
  font-weight: 400;
}
.name {
  display: inline-block;
  font-family: 'Rubik', sans-serif;
  white-space: pre;
  line-height: 1.2;
  vertical-align: middle;
  &:first-letter {
    font-family: 'Merienda One', cursive;
  }
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

.iconDiv {
  // height: auto;
  text-align: center;
  margin-right: 8px;
  &:last-of-type {
    margin-right: 0;
  }
}

.iconImg {
  vertical-align: middle;
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
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
</style>
