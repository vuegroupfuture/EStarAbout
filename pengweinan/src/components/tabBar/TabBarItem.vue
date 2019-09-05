<template>
    <div class="item">
        <div class="icon"></div>
        <div class="title"></div>
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
        padding:0 25% 5px;
    }
    .title {
        padding: 0 25%;
    }
}

</style>