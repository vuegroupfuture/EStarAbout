<template>
    <div class="search">
        <div class="search-title">搜索</div>
        <div class="container">
            <div class="commodity-type-list">
               <div class="commodity" :class="[(selected == index)? 'selectedCommodity' : 'normalCommodity']"
               v-for="(commodity, index) in commodityTypeList" 
               :key="index"
               @click="selectedIndex(index)"
               >{{commodity}}</div>
            </div>
            <div class="right-commodities">
                <SingleCommodity v-for="n in commodityTypeList.length" class="single-commodity" commodityName = '家店'></SingleCommodity>
            </div>
        </div>
        

    </div>
</template>

<script>
import SingleCommodity from './SingleCommodity.vue'
export default {
    name: 'search',
    components: {
        SingleCommodity
    },
    data: function() {
        return {
            commodityTypeList: ['家店','电脑','家装','手机','百货','美妆','运动','鞋包','女装','食品','内衣','男装','母婴','水果','家纺','汽车','健康','充值','海淘','品牌','女性','风扇','iphone'],
            selected: 0,
            commodityCellHeight: 50
        }
    },
    methods: {
        selectedIndex: function(index) {
            this.selected = index
            document.documentElement.scrollTop=100;
        }
    },
    computed: {
        commodityHeight () {
            return {
                height: `${this.commodityCellHeight}px`
            }
        }
    }
    
}
</script>

<style lang="less">
.search {
    .search-title {
        width: 100%;
        height: 5%;
        text-align: center;
        border-bottom: 1px solid black;
    }
    .container {
        width: 100%;
        height: 95%;
        overflow: hidden;
        display: flex;
        .commodity-type-list {
            width: 20%;
            height: 100%;
            overflow-y: scroll;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
            .commodity {
                width: 100%;
                height: 5%;
                flex: 0 0 5%;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .selectedCommodity {
                border-left: 5px solid red;
                color: red;
                background-color: white;
            }
            .normalCommodity {
                color: black;
                background-color: rgba(241, 234, 234, 0.979);
            }
        }
        .right-commodities {
            width: 80%;
            height: 100%;
            background-color: green;
            overflow-y: scroll;
            .single-commodity {
                width: 100%;
                height:420px;
                background-color: red;
            }
        }
    }
    
    
}
</style>