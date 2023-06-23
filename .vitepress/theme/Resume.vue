<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <content />
</template>

<style>
  .qual-container {
    margin-bottom: 1em;
  }

  .jobs-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;
    gap: 1em;
  }

  .job {
    min-width: 14rem;
    max-width: 48rem;
    flex: 1 1 31rem;

    h2 {
      margin-bottom: 0.5rem;
    }

    h3 {
      margin-bottom: 0;
      margin-top: 0.5rem;
      font-size: 1rem;
    }

    ul {
      margin-top: 0;
    }

    @media print {
      h2 {
        font-size: 1.2rem;
      }

      ul {
        font-size: 0.7rem;
      }

    }
  }

  .filler {
    visibility: hidden;
    height: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

</style>
