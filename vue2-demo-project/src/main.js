import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
const data = {
  Store: Store
}
console.log(Store);
var vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: data
})
