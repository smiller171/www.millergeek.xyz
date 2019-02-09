<template>
  <v-card class="iconCloudCard card-body">
    <h2 class="card-title h2">{{ title }}</h2>
    <div class="iconGrid">
      <cloud-icon
        v-for="icon in icons"
        :key="icon.key"
        :src="icon.src"
        :title="icon.title"
        :alt="icon.title"
        :height="iconHeight"
        :width="icon.width"
      />
    </div>
  </v-card>
</template>

<script>
import CloudIcon from '@/components/CloudIcon';

export default {
  components: {
    CloudIcon
  },
  data() {
    return {
      iconHeight: 48,
      icons: [
        {
          key: 'ansible',
          src: '/images/iconcloud/Ansible.svg',
          title: 'Ansible'
        },
        {
          key: 'docker',
          src: '/images/iconcloud/docker.svg',
          title: 'Docker'
        },
        {
          key: 'serverless',
          src: '/images/iconcloud/serverless-logo.svg',
          title: 'Serverless'
        },
        {
          key: 'aws',
          src: '/images/iconcloud/aws.svg',
          title: 'AWS'
        },
        {
          key: 'lambda',
          src: '/images/iconcloud/aws-lambda.svg',
          title: 'Lambda'
        },
        {
          key: 'apiGateway',
          src: '/images/iconcloud/aws-api-gateway.svg',
          title: 'API Gateway'
        },
        {
          key: 'firebase',
          src: '/images/iconcloud/firebase.svg',
          title: 'Firebase'
        },
        {
          key: 'github',
          src: '/images/iconcloud/github.svg',
          title: 'GitHub'
        },
        {
          key: 'circleci',
          src: '/images/iconcloud/circleci.svg',
          title: 'CircleCI'
        },
        {
          key: 'nodejs',
          src: '/images/iconcloud/nodejs-icon.svg',
          title: 'Node.js'
        },
        {
          key: 'golang',
          src: '/images/iconcloud/Go_Logo_Aqua.svg',
          title: 'GoLang',
          width: 48
        },
        {
          key: 'kubernetes',
          src: '/images/iconcloud/kubernetes.svg',
          title: 'Kubernetes'
        }
      ],
      title: 'Favorite Tools'
    };
  }
};
</script>


<style lang="scss" scoped>
.iconCloudCard {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.iconGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-row-gap: 2rem;
  justify-items: stretch;
  align-items: center;
  height: 100%;
  width: 100%;

}
</style>
