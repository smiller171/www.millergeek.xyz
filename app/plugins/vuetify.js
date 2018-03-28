import {
  transitions,
  VApp,
  VBtn,
  VCard,
  VFooter,
  VForm,
  VTabs,
  VTextField,
  VToolbar,
  VTooltip,
  Vuetify
} from 'vuetify';
import { Ripple } from 'vuetify/es5/directives';
import Vue from 'vue';

// require('vuetify/src/stylus/app.styl');

Vue.use(Vuetify, {
  components: {
    transitions,
    VApp,
    VBtn,
    VCard,
    VFooter,
    VForm,
    VTabs,
    VTextField,
    VToolbar,
    VTooltip,
    Vuetify
  },
  theme: {
    primary: '#691b99',
    secondary: '#e1e2e1',
    accent: '#00b0ff'
  },
  directives: {
    Ripple
  }
});
