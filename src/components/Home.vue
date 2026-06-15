<template>
  <div>
    <h1>Home</h1>
    <div v-if="fromPage">come from {{ fromPage }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState({
        count: state => state.count,
        loginStatus: state => state.loginStatus,
    }),
    fromPage() {
      return this.$route.params?.data?.fromPage || null
    }
  },
  mounted() {
    console.log('process ---', process.env)
    if (!this.loginStatus) {
        this.$store.commit('login')
    }
  }
}
</script>