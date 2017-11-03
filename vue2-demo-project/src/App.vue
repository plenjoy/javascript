<template>
  <div id="app">
    <loading-page v-if="store.isShowLoading" />
    <main-page v-if="store.isShowMain" />
  </div>
</template>
<script>
import LoadingPage from './containers/LoadingPage'
import MainPage from './containers/MainPage'

export default {
  name: 'app',
  components: {
    LoadingPage,
    MainPage
  },
  data() {
    return {
      store: Store
    }
  },
  methods: {

  },
  mounted: function() {
    console.log(this.$root.Store.isShowLoading);
    this.$dispatch('abc');
  }
}

</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #f0f0f0;
}

</style>
