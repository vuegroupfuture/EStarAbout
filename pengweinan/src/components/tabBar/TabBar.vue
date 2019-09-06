<template>
    <div class="tab-bg">
        <TabBarItem class="iconItem" 
        :class="[index == currentIndex ? 'selectedItem' : 'normalItem']"
        :style="WitdhAdjust" 
        v-for="(item, index) in tabBarItems" :key="index" 
        :item = item
        @click.native="selectedItem(index)"
        ></TabBarItem>
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
            ],
            currentIndex: 0
        }
    },
    computed: {
        WitdhAdjust () {
            return {
                width: `${414/this.tabBarItems.length}px`
            }
        }
    },
    methods: {
        selectedItem(index) {
            console.log('indexxx =' + index)
            this.currentIndex = index
        }
    }
}
</script>

<style lang="less">
.tab-bg {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: white;
    .iconItem {
        flex: none;
    }
    .selectedItem {
        color: green;
    }
    .normalItem {
        color: black;
    }
}
</style>