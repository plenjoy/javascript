<template>
  <div>
    <h1>{{ newMsg }}</h1>
    <button v-on:click="sonClick">son add</button>
  </div>
</template>
<script>
export default {
  name: 'son',
  data: function () { return { msg: 'This is son component' } },
  props: {
    message: Number
  },
  computed: {
    newMsg: function () {
      return this.message + ' !'
    }
  },
  methods: {
    sonClick: function () {
      this.$emit('add')
    }
  }

}

</script>
<style scoped>

</style>
