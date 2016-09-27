<template>
    <div style="width: 100%;height: 100%">

        <h3>main container</h3>

        <span>
            <input type="button" value="broadcast" v-on:click="broadcastText">
            <input type="button" value="addComponent" v-on:click="addELement">
            <input type="button" value="deleteComponent" v-on:click="deleteELement">
            <input type="button" value="requestService" v-on:click="dispatchService">
        </span>
        <view1 v-show="showView1"></view1>
        <view2 v-show="showView2"></view2>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                privateStore: {
                    currentSelectTitle: '',
                },
                sharedStore: Store
            };
        },
        computed: {
            showView1: function () {
                if (this.sharedStore.showViewIndex == 1) {
                    return true;
                }
                return false;
            },
            showView2: function () {
                if (this.sharedStore.showViewIndex == 2) {
                    return true;
                }
                return false;
            }

        },
        methods: {
            broadcastText: function () {
                this.$dispatch("broadcastText");
            },
            dispatchService: function () {
                this.$dispatch("dispatchService");
            },
            addELement: function () {
                this.$dispatch("dispatchAdd");
            },
            deleteELement: function () {
                this.$dispatch("dispatchDelete");
            }


        },
        ready: function () {
            console.log(this.sharedStore.label)
        },
        events: {}

    }
</script>

<style>


</style>
