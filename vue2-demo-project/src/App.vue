<template>
    <div id="app">
        <!-- <hello-world/> -->
        <loading/>
    </div>
</template>
<script>
import HelloWorld from './components/HelloWorld'
import Loading from './containers/Loading'

export default {
    name: 'app',
    components: {
        HelloWorld,
        Loading
    }
}
</script>
<style>
html,body{
    height: 100%;
    width: 100%;
    padding:0;
    margin:0;
    box-sizing:border-box;
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
    padding:0;
    margin:0;
    box-sizing:border-box;
}
</style>