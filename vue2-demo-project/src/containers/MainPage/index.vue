<template>
  <div class="main">
    <top-bar/>
    <div class="middle">
      <left-bar/>
      <div class="right">
        <action-bar/>
        <draw-area/>
        <bottom-bar/>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from '../TopBar'
import LeftBar from '../LeftBar'
import ActionBar from '../ActionBar'
import DrawArea from '../DrawArea'
import BottomBar from '../BottomBar'

export default {
  name: 'MainPage',
  components: {
    TopBar,
    LeftBar,
    ActionBar,
    DrawArea,
    BottomBar
  },
  data() {
    return {}
  }
}

</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
}

.middle {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 50px);
}
.right {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  width: calc(100% - 260px);
  height: 100%;
}

</style>
