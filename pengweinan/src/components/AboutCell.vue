<template>
    <div class="about-cell-common">
        <div class="about-cell-common-left">{{content.leftLab}}</div>
        <div class="about-cell-common-right">{{content.rightLab}}</div>
    </div>
</template>

<script>
export default {
    name: 'AboutCell',
    props: {
        content: {
          leftLab:String,
          rightLab:String
        }
    }
}
</script>

<style lang="less">
.about-cell-common {
    width: 100%;
    background-color: white;
    border: 1;
    border-bottom-color: gray;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .about-cell-common-left {
        padding-left: 10px;
        text-align: left;
        flex: auto;
    }
    .about-cell-common-right {
        text-align: right;
        padding-right: 10px;
        flex: auto;
    }
}
</style>
