<template>
  <div>
    <h1>This is Comment</h1>
    <el-button @click="handleClick" type="primary">go back</el-button>
    <Parent></Parent>
  </div>
</template>

<script>
import Parent from './Parent.vue'
export default {
  name: 'Comment',
  components: {
    Parent
  },
  methods: {
    handleClick() {
      this.$router.push({name: 'Home', params: {
        data: {
          fromPage: 'comment'
        }
      }})
    }
  }
}
</script>