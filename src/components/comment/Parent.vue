<template>
  <div>
    <h1>Parent</h1>
    <div>{{ `msg2: ${msg2}` }}</div>
    <el-button @click="handleChangeSecretMsg">修改秘密消息</el-button>
    <Child :msgFromParent="msg" :msg2.sync="msg2"></Child>
  </div>
</template>

<script>
import Child from './Child.vue'
import bus from '../../tools/bus.js';
export default {
  name: 'Parent',
  components: {
    Child
  },
  data() {
    return {
      msg: 'hello parent',
      msg2: 'hello parent2'
    }
  },
  methods: {
    handleChangeSecretMsg() {
        bus.$emit('updateSecretMsg', '修改秘密消息')
    }
  }
}
</script>

<style scoped>

</style>