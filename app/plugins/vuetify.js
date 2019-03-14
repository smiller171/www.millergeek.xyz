import Vuetify, {
  VApp,
  VBtn,
  VCard,
  VFadeTransition,
  VFooter,
  VForm,
  VTabs,
  VTextField,
  VToolbar,
  VTooltip
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';
import Vue from 'vue';

// require('vuetify/src/stylus/app.styl');

Vue.use(Vuetify, {
  components: {
    VFadeTransition,
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
