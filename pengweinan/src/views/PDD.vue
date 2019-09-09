<template>
    <div class="pdd">
        <div class="main-views">
            <!-- <Home class="home"></Home>
            <Search class="search"></Search>
            <Chat class="chat"></Chat>
            <MyPersonal class="mypersonal"></MyPersonal> -->
            <router-view/>
        </div>
        
        <TabBar class="tabbar" @selectedBarIndex="selectedBarIndex"></TabBar>
        
    </div>
</template>

<script>
import Home from './Home.vue'
import Search from '../components/search/Search.vue'
import Chat from '../components/chat/Chat.vue'
import MyPersonal from '../components/my/MyPersonal.vue'
import TabBar from '../components/tabBar/TabBar.vue'
export default {
    name: 'pdd',
    components: {
        Home,
        TabBar,
        Search,
        Chat,
        MyPersonal
    },
    data: function() {
        return {
            mainViews: ["home","search","chat","mypersonal"]
        }
    },
    mounted: function() {
        this.init()
    },
    methods: {
        selectedBarIndex: function(index) {
            console.log('selectedindexx = ' + index)
            var tmpView = this.viewFromIndex(index)
            this.$router.push(tmpView)
        },
        viewFromIndex: function(index) {
            console.log('selectedinde = ' + index)
            return this.mainViews[index]
        },
        init() {
            // this.$router.replace(this.mainViews[0])
        }
    }
}
</script>

<style lang="less">
.pdd {
    width: 414px;
    height: 736px;
    overflow: hidden;
    position: relative;
    .main-views {
        width: 400%;
        height: 686px;
        display: flex;
        flex-flow: row nowrap;
        .home {
            width: 100%;
            flex: 0 0 414px;
        }
        .search {
            width: 100%;
            flex: 0 0 414px;
        }
        .chat {
            width: 100%;
            flex: 0 0 414px;
        }
        .mypersonal {
            width: 100%;
            flex: 0 0 414px;
        }

    }
    .tabbar {
        position: absolute;
        width: 100%;
        height: 50px;
        bottom: 0px;
    }
}
</style>