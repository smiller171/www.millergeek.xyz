<template>
  <main class="main">
    <div class="qualContainer">
      <mdCard :file="qualFile"/>
    </div>
    <div class="resumeContainer">
      <mdCard
        v-for="(item, index) in files"
        :key="index"
        :file="item.file"
        class="jobCard"
        @mdData="setData"
      />
      <div class="filler"/>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import mdCard from '@/components/MarkdownCard';
export default {
  components: {
    mdCard
  },
  props: {
    fileUri: {
      type: String,
      default: '//api.github.com/repos/smiller171/www.millergeek.xyz/contents/markdown/resume/jobs'
    }
  },
  data() {
    return {
      mdData: null,
      qualFile: '/markdown/resume/qualifications.md'
    };
  },
  asyncComputed: {
    async files() {
      const response = await axios.get(this.fileUri, {
        headers: { 'Accept': 'application/vnd.github.v3.raw' }
      });
      return response.data.map(file => ({
        file: file.path
      }));
    }
  },
  methods: {
    setData(v) {
      const fileIndex = this.files.findIndex(item => item.file === v.file);
      this.files[fileIndex].data = v.data;
      this.files[fileIndex].date = this.getDate(v.data);
      this.files.sort(function(a, b) {
        if (a.date > b.date) {
          return -1;
        } else if (a.date < b.date) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    getDate(data) {
      const regex = /(\w+ \d{4})/m;
      return new Date(regex.exec(data)[0]);
    }
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
