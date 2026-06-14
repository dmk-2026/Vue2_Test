<template>
  <div>
    <h1>This is Comment</h1>
    <el-button @click="handleClick" type="primary">go back</el-button>
  </div>
</template>

<script>
export default {
  name: 'Comment',
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