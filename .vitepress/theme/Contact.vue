<script setup lang="ts">
import { Content, useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();

</script>

<template>
  <Card class="">
    <Content />
  </Card>
</template>

<style>

</style>
