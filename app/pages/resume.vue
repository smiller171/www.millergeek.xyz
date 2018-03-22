<template>
  <main class="main">
    <div class="qualContainer">
      <v-card>
        <qualData class="card-body"/>
      </v-card>
    </div>
    <div class="resumeContainer">
      <v-card
        v-for="(item, index) in files.slice().reverse()"
        :key="index"
        class="jobCard"
      >
        <component
          :is="item"
          class="card-body"
        />
      </v-card>
      <div class="filler"/>
    </div>
  </main>
</template>

<script>
import qualData from '@/assets/markdown/resume/qualifications.md';

const files = (function () {
  var context = require.context('@/assets/markdown/resume/jobs/', true, /\.md$/);
  const obj = {};
  const arr = [];
  context.keys().forEach(function (key) {
    obj[key] = context(key);
    arr.push(context(key).default);
  });
  return arr;
})();


export default {
  components: {
    qualData
  },
  props: {
    fileUri: {
      type: String,
      default: '//api.github.com/repos/smiller171/www.millergeek.xyz/contents/app/static/markdown/resume/jobs'
    }
  },
  data() {
    return {
      mdData: null,
      qualFile: '/markdown/resume/qualifications.md',
      files
    };
  }
};
</script>

<style lang="scss" scoped>
.qualContainer {
  display: flex;
  justify-content: center;
  padding: 1rem;    
}
.resumeContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: -1rem;
  margin-top: -1rem;
  @media only screen and (max-width: 499px) {
  }
  @media (min-width: 500px) {
  }
  padding: 1rem;
  padding-top: 0;
}
.jobCard {
  margin-right: 1rem;
  margin-top: 1rem;
  max-width: 775px;
  min-width: 230px;
  flex-basis: 450px;
  flex-shrink: 1;
  flex-grow: 1;
}
.filler {
  flex-grow: 100;
  min-width: 450px;
  height: 0px;
}
</style>
