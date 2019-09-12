<template>
    <div class="single-commodity">
        <div class="header">
            <div class="commodity-name">{{commodityName}}</div>
            <div class="see-more"><span>查看更多</span><span class="icon-right-arrow"></span></div>
        </div>
        <div class="quick-access">
            <img class="img" src="../../assets/activity.png" alt="">
        </div>
        <div class="icon-buttons">
            <IconButton class="iconButton" v-for="n in 12" :key="n" :iconBtn = IconButton></IconButton>
        </div>
        
    </div>
</template>

<script>
import IconButton from '../home/IconButton.vue'
export default {
    name: 'blank',
    props: {
        commodityName: String
    },
    components: {
        IconButton
    },
    data: function() {
        return {
            IconButton: {
                iconClass:"icon-dragon",
                title:"商品"
            }
        }
    }
}
</script>

<style lang="less">
.single-commodity {
    .header {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(224, 216, 216);
        font-size: 15px;
        .commodity-name {
            width: 30%;
            height: 100%;
            flex: 1 1 30%;
            text-align: left;
            line-height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .see-more {
            width: 30%;
            height: 100%;
            flex: 1 1 30%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
    .quick-access {
        width: 100%;
        height: 70px;
        .img {
            width: 90%;
            height: 100%;
        }
    }
    .icon-buttons {
        width: 100%;
        height: 320px;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        .iconButton {
            width: 33%;
            height: 25%;
        }
    }
}
</style>