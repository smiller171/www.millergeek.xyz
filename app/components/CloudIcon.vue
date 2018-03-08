<template>
  <div class="iconDiv">
    <v-tooltip 
      top 
      offset-overflow
    >
      <img 
        slot="activator"
        :src="src" 
        :alt="alt"
        :title="title"
        :height="height"
      >
      <span>{{ title }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    alt: {
      default: '',
      type: String
    },
    height: {
      default: 48,
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
