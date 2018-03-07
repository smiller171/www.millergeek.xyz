<template>
  <main class="main">
    <about-summary class="summary"/>
    <div class="cloud"/>
  </main>
</template>

<script>
import AboutSummary from '@/components/Summary';

export default {
  components: {
    AboutSummary
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
}
.summary {
  max-width: 390px;
  flex-basis: 300px;
  flex-shrink: 3;
  flex-grow: 3;
  padding-right: 2rem;
}
.cloud {
  max-width: 530px;
  flex-basis: 500px;
  flex-grow: 5;
  flex-shrink: 5;
}
</style>

