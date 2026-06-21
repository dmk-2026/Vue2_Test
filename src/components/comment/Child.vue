<template>
  <div>
    <h1>Child</h1>
    <div>{{ msgFromParent }}</div>
    <el-input v-model="msg2InChild" placeholder="请输入"></el-input>
    <div>{{ reactiveSecret.secret }}</div>
  </div>
</template>
<script>
export default {
  name: 'Child',
  inject: ['reactiveSecret'],
  props: ['msgFromParent', 'msg2'],
  computed: {
    msg2InChild: {
      get() {
        return this.msg2
      },
      set(val) {
        this.$emit('update:msg2', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
>