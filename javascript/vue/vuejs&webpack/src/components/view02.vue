<template>
    <div style="width: 100%;height: 400px;background-color: bisque" v-on:click="handleViewClick">
        <h4>view 2</h4>
        <h4>{{privateStore.receiveText}}</h4>
        <div style="width: 100%;height: 200px;" id="elementContainer"></div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                privateStore: {
                    receiveText:'',
                    elements:[]
                },
                sharedStore: Store
            };
        },
        computed: {
        },
        methods: {
            handleViewClick:function () {
                this.$dispatch('receiveChangeView',1);
            }

        },
        ready: function () {
        },
        events: {
            broadcastText:function (text) {
                this.privateStore.receiveText=text;

            },
            broadcastAdd:function () {
                var Vue = require('vue');
                var Element = Vue.component('element');
                //var el=new Store.element();
                var el=new Element();
                el.$mount().$appendTo("#elementContainer");
                this.privateStore.elements.push(el);
            },
            broadcastDelete:function () {
                var el=this.privateStore.elements.pop();
                if(el){
                    el.$destroy(true);
                }
            }
        }

    }
</script>

<style>


</style>
