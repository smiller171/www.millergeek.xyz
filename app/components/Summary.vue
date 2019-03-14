<template>
  <v-card ref="summaryCard">
    <v-img
      :height="imgHeight"
      src="/images/Scott-Headshot.jpg"
    />
    <aboutData class="card-body" />
  </v-card>
</template>

<script>
import { VCard, VImg } from 'vuetify/lib';
import aboutData from '@/assets/markdown/about/about.md';

export default {
  components: {
    aboutData,
    VCard,
    VImg
  },
  data() {
    return {
      imgWidth: 100,
      imgHeight: 74
    };
  },
  mounted() {
    this.handleResize();
    addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.imgWidth = this.$refs.summaryCard.$el.clientWidth;
      this.imgHeight = (74 / 100) * this.imgWidth;
    }
  }
};
</script>

