<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { data as jobs } from './jobs.data'
import { default as quals } from './quals.data'
import Card from './Card.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="qualifications-container">
    <Card class="qual">
    {{ JSON.stringify(quals) }}
    </Card>
  </div>
  <div class="jobs-list">
    <Card class="job" v-for="job in jobs" v-html=job.html />
    <Card class="filler job" />
    <Card class="filler job" />
    <Card class="filler job" />
  </div>
  <Content />
</template>

<style>
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
  }
</style>
