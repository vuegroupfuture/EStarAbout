<template>
    <div class="pdd">
        <Home class="home"></Home>
        <TabBar class="tabbar"></TabBar>
    </div>
</template>

<script>
import Home from './Home.vue'
import TabBar from '../components/tabBar/TabBar.vue'
export default {
    name: 'pdd',
    components: {
        Home,
        TabBar
    }
}
</script>

<style lang="less">
.pdd {
    width: 414px;
    height: 736px;
    overflow: hidden;
    position: relative;
    .tabbar {
        position: absolute;
        width: 100%;
        height: 50px;
        bottom: 0px;
    }
}
</style>