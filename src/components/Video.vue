<template>
  <div>
    <h1>Current Video is {{ videoId }}</h1>
    <router-view></router-view>
    <router-link :to="{name: 'comment', params: {id: videoId}}">To Comment</router-link>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: ['id'],
  data() {
    return {
    //   id: this.$route.params.id
    }
  },
  computed: {
    videoId() {
      return this.$route.params.id
    }
  },
  mounted() {
    console.log(this.videoId)
  }
}
</script>