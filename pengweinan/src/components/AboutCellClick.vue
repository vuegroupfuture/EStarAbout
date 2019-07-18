<template>
    <div class="about-cell-click">
        <div class="about-cell-click-left">{{baseInfo.leftLab}}</div>
        <div class="about-cell-click-right">{{baseInfo.rightLab}}</div>
        <div class="icon-super">
            <div class="icon-about-right-arrow"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about-cell-click',
    props: {
        baseInfo: {
          leftLab:String,
          rightLab:String
        }
    }
}
</script>


<style lang="less">
.about-cell-click {
    width: 100%;
    background-color: white;
    border: 1;
    border-bottom-color: gray;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .about-cell-click-left {
        padding-left: 10px;
        text-align: left;
        flex: 0 0 auto;
    }
    .about-cell-click-right{
        text-align: right;
        flex: auto;
    }
    .icon-super {
        flex: 0 0 30px;
        .icon-about-left-arrow {
        text-align: left;
    }
    }
}

</style>
