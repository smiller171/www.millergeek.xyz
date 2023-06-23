<script setup lang="ts">
import { useData, useRoute } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="card elevation-3 secondary-container on-secondary-container-text">
    <slot />
  </div>
</template>

<style>
  .card {
    padding: 1em;
    border-radius: 1em;
    page-break-inside: avoid;

    :first-child {
      margin-top: 0;
    }

    @media print {
      border: 1px solid grey;
      box-sizing: border-box;
      display: block;
      color: black;
    }
  }
</style>

