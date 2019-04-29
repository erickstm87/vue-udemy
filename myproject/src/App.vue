<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Very Own Vue.js App"/>
    <Navbar />
    <Blogs @thisEventType='aFunction' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Blogs from './components/Blogs.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Navbar,
    Blogs
  },
  methods: {
    aFunction: (stuff) => {
        alert(`here is some stuff: ${stuff}`)
    }
  },
  data() {
    return {
     
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
