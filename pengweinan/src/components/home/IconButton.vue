<template>
    <div class="button">
        <div class="icon" :class=iconBtn.iconClass></div>
        <div class="title">{{iconBtn.title}}</div>
    </div>
</template>

<script>
export default {
    name: 'iconButton',
    props: {
        iconBtn: {
            iconClass: String,
            title: String
        },
    }
}
</script>

<style lang="less">
.button {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: white;
    border: 0.5px dotted red;
    .icon {
        width: 100%;
        height: 50%;
        margin: 0;
        font-size: 30px;
        flex: 0 0 30px;
    }
    .title {
        padding-top: 10px;
        width: 100%;
        height: 50%;
        font-size: 14px;
        flex: 0 0 14px;
    }
}
</style>