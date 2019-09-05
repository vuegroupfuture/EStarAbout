<template>
    <div class="tab-bg">
        <TabBarItem class="iconItem" :style="WitdhAdjust" v-for="(item, index) in tabBarItems" :key="index" :item = item></TabBarItem>
    </div>
</template>

<script>
import TabBarItem from './TabBarItem.vue'
export default {
    name: 'tabbar',
    components: {
        TabBarItem
    },
    data: function() {
        return {
            tabBarItems: [
                {
                    icon: "icon-home",
                    title: "首页"
                },
                {
                    icon: "icon-search",
                    title: "搜索"
                },
                {
                    icon: "icon-chat",
                    title: "聊天"
                },
                {
                    icon: "icon-my",
                    title: "我的"
                }
            ]
        }
    },
    computed: {
        WitdhAdjust () {
            return {
                width: `${414/this.tabBarItems.length}px`
            }
        }
    }
}
</script>

<style lang="less">
.tab-bg {
    width: 100%;
    height: 100%;
    display: flex;
    .iconItem {
        flex: none;
    }
}
</style>