import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VToolbar,
  VTabs,
  VTab,
  VFooter
} from 'vuetify';
import { Ripple } from 'vuetify/es5/directives';

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VToolbar,
    VTabs,
    VTab,
    VFooter
  },
  directives: {
    Ripple
  }
})