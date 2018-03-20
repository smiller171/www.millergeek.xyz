<template>
  <div v-html="html"/>
</template>

<script>
import axios from 'axios';
import showdown from 'showdown';

const classMap = {
  h1: 'card-title h1',
  h2: 'card-title h2',
  h3: 'card-subtitle text-muted h6',
  ul: 'card-text pl-3',
  ol: 'card-text pl-3'
};

const bindings = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}>`, 'g'),
    replace: `<${key} class="${classMap[key]}">`
  }));

const conv = new showdown.Converter({
  extensions: [ bindings ],
  noHeaderId: true // important to add this, else regex match doesn't work
});


export default {
  props: {
    file: {
      type: String,
      required: true
    }
  },
  asyncComputed: {
    async html() {
      return await this.getHtml(this.file);
    }
  },
  methods: {
    async getHtml(file) {
      const response = await axios.get(file);
      this.$emit('mdData', {
        file: this.file,
        data: response.data
      });
      return conv.makeHtml(response.data);
    }
  }
};
</script>
