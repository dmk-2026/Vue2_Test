<template>
  <div id="app">
    <nav>
      <h1>Hello Vue2 + Webpack!</h1>
      <p>This is a Vue2 project built with Webpack.</p>
      <button @click="count++">Click me: {{ count }}</button>
      <router-link to="/">Home</router-link>
      <router-link :to="{name: 'foo'}">Foo</router-link>
      <router-link :to="{path: '/video', name: 'video', params: {id: count}}">Video</router-link>
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
#app {
  text-align: center;
  padding: 40px;
}
nav {
  padding: 20px;
}
h1 {
  color: #42b983;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #379a6b;
}
</style>