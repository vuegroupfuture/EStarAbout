<template>
    <div class="navBars">
        <span :class="[index==selected?'selected-nav':'normal-nav']" 
        v-for="(title, index) in navTitles" 
        :key="index" 
        @click="btnClick(index)">
        {{title}}
        </span>
    </div>
    
</template>

<script>
export default {
    name: 'navbar',
    props: {
        navTitles:Array,
        default() {
            return {}
        }
    },
    data: function () {
        return {
            selected: 0
        }
    },
    methods: {
        btnClick: function(index) {
            this.selected = index;
        }
    }
    
}
</script>

<style lang="less">
.navBars {
    .selected-nav {
        padding: 0px;
        width: 40px;
        height: 100%;
        display: inline-block;
        // background-color: red;
        border-bottom: solid red;
    };
    .normal-nav {
        width: 40px;
        // height: 100%;
        display: inline-block;
    }
}

</style>