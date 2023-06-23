<script setup lang="ts">
import { useData } from 'vitepress'
import { data as tools } from './tools.data'
import CloudIcon from './CloudIcon.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="about-container">
    <Card class="about">
      <Content />
    </Card>
    <Card class="tools">
      <h2>Favorite Tools</h2>
      <div class="icon-cloud">
        <CloudIcon v-for="tool in tools" :src="tool.file" :title="tool.name"/>
      </div>
    </Card>
  </div>
</template>

<style>
.about-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1em;
}

img[alt~="Headshot"] {
  max-width: 100%;
  height: auto;
  border-radius: 1em;
}

.about {
  max-width: 25rem;
  flex: 3 3 18rem;
}

.tools {
  max-width: 33rem;
  flex: 5 5 31rem;
  display: flex;
  flex-flow: column nowrap;

  > h2 {
    margin-bottom: 0;
  }
}

.icon-cloud {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
  grid-row-gap: 1rem;
  justify-items: stretch;
  align-items: center;
  height: 100%;
  width: 100%;
}

</style>
