<template>
  <span>
    <span class="name">Scott </span><span class="name">Miller</span>
  </span>
</template>

<style lang="scss" scoped>
.name {
  display: inline-block;
  font-family: sans-serif;
  white-space: pre;
  line-height: 1.2;
  vertical-align: middle;
  &:first-letter {
    font-family: cursive;
  }
  &::selection {
    color: #fff;
  }
}

.wf-meriendaone-n4-active .name {
  font-family: 'Rubik';
  &:first-letter {
    font-family: 'Merienda One'
  }
}

@media print {
  .name {
    color: #000 !important;
  }
}
</style>
