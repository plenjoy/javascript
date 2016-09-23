<template>
    <div style="width: 100%;height: 30px;background-color: crimson;margin: 0;padding: 0" >
        <h4>add element</h4>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                privateStore: {
                },
                sharedStore: Store
            };
        },
        computed: {
        },
        methods: {


        },
        ready: function () {
        },
        events: {
            broadcastText:function (text) {
                console.log(text);

            }
        }

    }
</script>

<style>


</style>
