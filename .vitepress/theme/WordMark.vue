<script setup lang="ts">

</script>

<template>
  <h1>
    <span class="name">Scott </span>
    <span class="name">Miller</span>
  </h1>
</template>

<style scoped>
.name {
  display: inline-block;
  white-space: pre;
  line-height: 1.2;
  vertical-align: middle;
  font-family: Rubik, sans-serif;

  &::first-letter {
    font-family: Merienda, cursive;
  }

  @media print {
      color: #000 !important;
  }
}

</style>

