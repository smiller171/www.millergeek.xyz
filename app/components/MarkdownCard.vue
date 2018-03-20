<template>
  <v-card ref="qualCard">
    <markdown
      :file="file"
      class="card-body"
      @mdData="setData"
    />
  </v-card>
</template>

<script>
import Markdown from '@/components/Markdown';

export default {
  components: {
    Markdown
  },
  props: {
    file: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      mdData: null
    };
  },
  methods: {
    setData(v) {
      this.mdData = v;
      this.$emit('mdData', v);
    }
  }
};
</script>

