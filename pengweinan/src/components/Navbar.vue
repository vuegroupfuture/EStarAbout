<template>
    <div class="navBars">
        <div :class="[index==selected?'selected-nav':'normal-nav']" 
        v-for="(title, index) in navTitles" 
        :key="index" 
        @click="$emit('clickIndex', index); btnClick(index)"
        >
        {{title}}
        </div>
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
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    .selected-nav {
        width: 40px;
        height: 50px;
        text-align: center;
        flex: 0 0 40px;
        border-bottom: solid red;
    };
    .normal-nav {
        width: 40px;
        height: 50px;
        text-align: center;
        flex: 0 0 40px;
        
    }
}

</style>