<template>
  <v-app
    class="myapp"
  >
    <v-toolbar
      dark
      color="primary darken-2"
      class="header"
    >
      <h1 class="header-title">
        <word-mark/>
      </h1>
    </v-toolbar>
    <v-toolbar
      dark
      color="primary darken-2"
      class="tabbar"
      dense
    >
      <v-tabs
        v-model="tab"
        color="primary"
        grow
      >
        <v-tabs-slider color="accent"/>
        <v-tab
          v-for="(item, index) in tabs"
          :key="item.key"
          :to="item.target"
          :class="{ 'active': index === 0 && tab === '/about'}"
          nuxt
        >
          {{ item.label }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-app
      id="nuxtApp"
      class="nuxtApp"
    >
      <nuxt
        id="nuxt"
      />
    </v-app>
    <v-footer
      class="footer"
      dark
      app
      color="primary"
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
import SocialIcon from '@/components/SocialIcon';
import WordMark from '@/components/WordMark';

export default {
  transition: 'page',
  components: {
    SocialIcon,
    WordMark
  },
  data() {
    return {
      fontsError: null,
      fontsLoaded: false,
      tab: '/about',
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
  },
  mounted() {
    const WebFont = require('webfontloader');
    WebFont.load({
      google: {
        families: [
          'Merienda One',
          'Rubik',
          'Istok Web'
        ]
      },
      async: true,
      timeout: 5000
    });
    this.$root.$on('tabChange', this.setTab);
  },
  methods: {
    setTab(v) {
      this.tab = v;
    }
  }
};
</script>

<style lang="scss">
.active a {
  opacity: 1 !important;
}
</style>

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
  width: 100vw;
  justify-content: space-between;
  font-size: 1.5rem;
  padding-left: .5rem;
  padding-right: .5rem;
  line-height: 60px;
  box-shadow: 0 -2px 4px -1px rgba(0, 0, 0, .2), 0 -4px 5px 0 rgba(0, 0, 0, .14), 0 -1px 10px 0 rgba(0, 0, 0, .12);
}

.footer-right {
  display: flex;
  justify-content: flex-end;
}
</style>


<style lang="scss">
.header {
  .toolbar__content {
    height: auto !important;
  }
}

.myapp {
  overflow: visible;
}

.tabs__div {
  font-size: 16px;
}

:not(.wf-rubik-n4-active) .tabs__div > a {
  font-family: sans-serif;
}
.wf-rubik-n4-active .tabs__div > a {
  font-family: Rubik;
}

.nuxtApp {
  overflow-x: hidden;
  margin-bottom: 60px;
  min-height: unset;
  > * {
    min-height: unset;
  }
}

.tabbar {
  position: sticky;
  top: 0px;
  z-index: 1;
}

</style>
