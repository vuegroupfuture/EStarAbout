<template>
    <div class="commodity" @click="clickBtn">
        <div class="image">
            <img class="img" :src="cellInfo.image" alt="commodity">
        </div>
        
        <div class="commodityInfo">
            <div class="commodityDetail">
                <div class="commodity-content">{{cellInfo.content}}</div>
                <div class="commodity-store">{{cellInfo.storeName}}</div>
            </div>
            <div class="sellInfo">
                <div class="sell-price">￥{{cellInfo.price}}</div>
                <div class="sell-amount">已拼{{cellInfo.sellAmount}}件</div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Black from '../Blank.vue'
export default {
    name: 'commodityCell',
    props: {
        cellInfo: {
            image: String,
            content: String,
            storeName: String,
            price: Number,
            sellAmount: Number
        }
    },
    methods: {
        clickBtn() {
            this.$emit('toBlank')
            // this.$router.push({path: '/home/blank'})
        }
    }
}
</script>

<style lang="less">
.commodity {
    width: 100%;
    height: 100%;
    display: flex;
    .image {
        width: 40%;
        height: 100%;
        border: solid blue;
        flex: 0 0 40%;
        margin-right: 10px;
        .img {
            width: 100%;
            height: 100%;
        }
    }
    .commodityInfo {
        width: 60%;
        height: 100%;
        flex: 0 0 60%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
        .commodityDetail {
            width: 100%;
            .commodity-content {
                height: 40px;
                font-size: 16px;
                overflow: hidden;
                text-align: left;
            }
            .commodity-store {
                height: 20px;
                background-color: red;
                text-align: left;
            }
        }
        .sellInfo {
            position: absolute;
            bottom: 0;
            display: flex;
            .sell-price {
                font-size: 18px;
                color: red;
                padding-right: 5px;
            }
            .sell-amount {
                font-size: 15px;
                color: black;
            }
        }
    }
}
</style>