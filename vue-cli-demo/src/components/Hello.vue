<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <son v-bind:message="message" v-on:add="addNumber" />
    <button v-on:click="onClick" >click</button>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data: function () { return { msg: 'Welcome to Your Vue.js App', message: 35 } },
  methods: {
    onClick: function () {
      ++this.message
    },
    addNumber: function () {
      ++this.message
    }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
