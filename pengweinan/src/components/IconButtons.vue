<template>
    <div class="buttons">
        <!-- <IconButton class="icon-button" v-for="(iconBtn ,index) in iconsBtns" :iconBtn=iconBtn>fds</IconButton> -->
        <IconButton class="icon-button" v-for="(iconBtn ,index) in iconsBtns" :iconBtn=iconBtn>fds</IconButton>
    </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'

export default {
    name: 'iconButton',
    components: {
        IconButton
    },
    props: {
        iconsBtns: Array
    }
}
</script>

<style lang="less">
.buttons {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: stretch;
    .icon-button {
        width: 20%;
        height: 50%;
    }
}
</style>