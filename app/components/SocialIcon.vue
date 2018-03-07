<template>
  <div class="iconDiv">
    <a
      :href="target"
      target="_blank"
    >
      <img
        :title="title"
        :src="src" 
        :alt="alt"
        :height="height"
        class="iconImg"
      >
    </a>
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
      default: 40,
      type: Number
    },
    src: {
      required: true,
      type: String
    },
    target: {
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

