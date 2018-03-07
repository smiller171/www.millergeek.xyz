<template>
  <span>
    <span class="name">Scott </span><span class="name">Miller</span>
  </span>
</template>

<style lang="scss" scoped>
.name {
  display: inline-block;
  font-family: 'Rubik', sans-serif;
  white-space: pre;
  line-height: 1.2;
  vertical-align: middle;
  &:first-letter {
    font-family: 'Merienda One', cursive;
  }
  &::selection {
    color: #fff;
  }
}
</style>
