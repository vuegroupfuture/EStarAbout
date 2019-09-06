<template>
    <div class="item">
        <div class="icon" :class="item.icon"></div>
        <div class="title">{{item.title}}</div>
    </div>
</template>

<script>
export default {
    name: 'tabbarItem',
    props: {
        item: {
            icon: String,
            title: String
        }
    }
}
</script>

<style lang="less">
.item {
    width: 100%;
    height: 100%;
    .icon {
        font-size: 17px;
        padding:10% 25% 5px;
    }
    .title {
        font-size: 14px;
        padding: 0 25%;
    }
}

</style>