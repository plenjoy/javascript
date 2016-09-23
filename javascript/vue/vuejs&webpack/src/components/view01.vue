<template>
    <div style="width: 100%;height: 400px;background-color: aquamarine" v-on:click="handleViewClick">
        <h4>view 1</h4>
        <h4>{{privateStore.receiveText}}</h4>
        <textarea style="width: 300px;height: 200px">{{sharedStore.serviceText}}</textarea>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                privateStore: {
                    receiveText:''
                },
                sharedStore: Store
            };
        },
        computed: {
        },
        methods: {
            handleViewClick:function () {
                this.$dispatch('receiveChangeView',2);
            }

        },
        ready: function () {
        },
        events: {
            broadcastText:function (text) {
                this.privateStore.receiveText=text;

            }
        }

    }
</script>

<style>


</style>
