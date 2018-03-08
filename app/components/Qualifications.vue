<template>
  <v-card ref="qualCard">
    <markdown
      file="/markdown/resume/qualifications.md"
      class="card-body"
    />
  </v-card>
</template>

<script>
import Markdown from '@/components/Markdown';

export default {
  components: {
    Markdown
  }
};
</script>

