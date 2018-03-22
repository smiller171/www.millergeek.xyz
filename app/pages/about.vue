<template>
  <main class="main">
    <about-summary
      class="summary"
    />
    <icon-cloud class="cloud"/>
  </main>
</template>

<script>
import AboutSummary from '@/components/Summary';
import IconCloud from '@/components/IconCloud';


export default {
  components: {
    AboutSummary,
    IconCloud
  },
  created() {
    this.$root.$emit('tabChange', '/about');
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  margin-right: -2rem;
  margin-top: -1rem;
  > * {
    margin-right: 2rem;
    margin-top: 1rem;
  }
}
.summary {
  max-width: 390px;
  flex-basis: 300px;
  flex-shrink: 3;
  flex-grow: 3;
}
.cloud {
  max-width: 530px;
  flex-basis: 500px;
  flex-grow: 5;
  flex-shrink: 5;
}
</style>

