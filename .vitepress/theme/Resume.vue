<script setup lang="ts">
import { useData } from 'vitepress'
import { data as jobs } from './jobs.data'
import { data as quals } from './quals.data'
import Card from './Card.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="jobs-list qual-container">
    <Card class="job" v-html=quals[0].html />
  </div>
  <div class="jobs-list">
    <Card class="job" v-for="job in jobs" v-html=job.html />
    <Card class="filler job" />
  </div>
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
