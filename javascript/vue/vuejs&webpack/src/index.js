/**
 * Created by dev on 2016/9/22.
 */
var Vue = require('vue');

var container = Vue.extend(require('./containers/Container.vue'));
Vue.component('container', container);

var view1 = Vue.extend(require('./components/view01.vue'));
Vue.component('view1', view1);

var view2 = Vue.extend(require('./components/view02.vue'));
Vue.component('view2', view2);

var element = Vue.extend(require('./components/element.vue'));
Vue.component('element', element);

Store.element=element;
var vm = new Vue({
    el: '#app',
    mixins: [
        require('./actions/DispatchCentre.js')
    ],
    data: {
        privateStore: {},
        sharedStore: Store
    },
    computed: {},
    methods: {

    },
    events: {},
    created: function () {

    },
    ready: function () {
        console.log($('#app'));
    }
});