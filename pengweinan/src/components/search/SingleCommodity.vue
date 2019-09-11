<template>
    <div class="single-commodity">
        <div class="header">
            <div class="commodity-name"><span class="commodity-name-p">{{commodityName}}</span></div>
            <div class="see-more"><spna>查看更多</spna><span class="icon-right-arrow"></span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blank',
    props: {
        commodityName: String
    },
    components: {

    },
    data: function() {
        return {
            
        }
    }
}
</script>

<style lang="less">
.single-commodity {
    .header {
        padding: 0 20px;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: gray;
        .commodity-name {
            width: 30%;
            height: 100%;
            flex: 1 1 30%;
            text-align: left;
            line-height: 100%;
            .commodity-name-p {
                width: 100%;
                height: 100%;
                line-height: 100%;
            }
        }
        .see-more {
            width: 30%;
            height: 100%;
            flex: 1 1 30%;
            text-align: right;
            line-height: 100%;
        }
    }
}
</style>