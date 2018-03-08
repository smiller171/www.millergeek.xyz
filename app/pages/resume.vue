<template>
  <main class="main">
    <div class="qualContainer">
      <qualifications/>
    </div>
    <div class="resumeContainer">
      <resume-item
        v-for="item in resumeItems"
        :key="item.key"
      />
    </div>
  </main>
</template>

<script>
import Qualifications from '@/components/Qualifications';
import ResumeItem from '@/components/ResumeItem';
export default {
  components: {
    Qualifications,
    ResumeItem
  },
  data() {
    return {
      resumeItems: [
        {
          key: 'test'
        }
      ]
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
  padding: 1rem;
  padding-top: 0;
}
</style>
