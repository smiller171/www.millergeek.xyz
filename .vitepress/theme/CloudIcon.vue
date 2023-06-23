<script setup lang="ts">
import { useData } from 'vitepress'

const props = defineProps({
  src: String,
  title: String
})

</script>

<template>
  <div class="cloud-icon">
    <img :src="src" :alt="title" :title="title">
    <br>
    <span>{{ title }}</span>
  </div>
</template>

<style>
.cloud-icon {
  text-align: center;
  justify-self: center;
  align-self: center;

  > img {
    height: 3rem;
    max-width: 3rem;
  }
}
</style>

