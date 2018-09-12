<template>
  <div id="app">
    <app-tool-bar/>
    <router-view/>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar'

export default {
  name: 'App',
  components: {
    AppToolBar: ToolBar
  }
}
</script>

<style>
@import 'https://unpkg.com/vuetify/dist/vuetify.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
