<template>
    <div>
        <div class='loading-div'>
            <img class='loading-img' src='./Loading.gif' />
        </div>
        <div class='loading-txt'>loading...</div>
    </div>
</template>
<script>
export default {
    name: 'Loading',
    data() {
        return {}
    }
}
</script>
<style scoped>
.loading-div {
    width: 68px;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-img {
    height: 60px;
    width: 60px;
}

.loading-txt {

    text-align: center;
}
</style>