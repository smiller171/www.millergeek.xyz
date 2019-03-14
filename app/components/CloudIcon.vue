<template>
  <div class="iconDiv">
    <v-tooltip 
      top
      color="primary darken-2"
      offset-overflow
    >
      <img 
        slot="activator"
        :src="src" 
        :alt="alt"
        :title="title"
        :height="width ? null : height"
        :width="width"
      >
      <span>{{ title }}</span>
    </v-tooltip>
  </div>
</template>

<script>
import { VTooltip } from 'vuetify/lib';

export default {
  components: {
    VTooltip
  },
  props: {
    alt: {
      default: '',
      type: String
    },
    height: {
      default: 48,
      type: Number
    },
    width: {
      default: null,
      type: Number
    },
    src: {
      required: true,
      type: String
    },
    title: {
      default: '',
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.iconDiv {
  text-align: center;
}
</style>
