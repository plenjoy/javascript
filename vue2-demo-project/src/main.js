import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
const dispatchEvent = (type) => {
  console.log(type);
}
Vue.prototype.$dispatch = dispatchEvent;
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
