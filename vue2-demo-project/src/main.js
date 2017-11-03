import Vue from 'vue'
import axios from 'axios'
import App from './App'
import EventCore from './manager/EventCore'
import * as JsonUtil from './utils/JsonUtil'

function service1 () {

  return axios.get('/userid/getEnv', {
      params: {
        webClientId: 1
      }
    })/*
    .then(function(response) {

      var x2js = new X2JS();
      var xmlText = response.data;
      var jsonObj = x2js.xml2js(xmlText);
      console.log(jsonObj);

    })
    .catch(function(error) {
      console.log(error);
    });*/
}

function service2 () {

  return axios.get('/BigPhotoBookServlet/getSessionUserInfo', {
      params: {
        webClientId: 1
      }
    })/*
    .then(function(response) {

      var x2js = new X2JS();
      var xmlText = response.data;
      var jsonObj = x2js.xml2js(xmlText);
      console.log(jsonObj);

    })
    .catch(function(error) {
      console.log(error);
    });*/
}

axios.all([service1(), service2()])
  .then(axios.spread((one, two) => {
    console.log(JsonUtil.xmlToJs(one.data));
  }));

Vue.config.productionTip = false;

/*const dispatchEvent = (type) => {
  console.log(type);
}
Vue.prototype.$dispatch = dispatchEvent;*/

Vue.prototype.$dispatch = EventCore;
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
