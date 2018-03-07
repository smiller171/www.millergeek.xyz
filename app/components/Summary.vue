<template>
  <v-card ref="summaryCard">
    <v-card-media
      :height="imgHeight"
      src="/images/Scott-Headshot.jpg"
    />
    <markdown
      file="/markdown/about/about.md"
      class="card-body"
    />
  </v-card>
</template>

<script>
import Markdown from '@/components/Markdown';

export default {
  components: {
    Markdown
  },
  data() {
    return {
      imgWidth: 0
    };
  },
  computed: {
    imgHeight() {
      return (74 / 100) * this.imgWidth;
    }
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
      const cardWidth = this.$refs.summaryCard.$el.clientWidth;
      this.imgWidth = cardWidth;
    }
  }
};
</script>

