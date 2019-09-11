<template>
  <div id="app">
      <!-- <router-link to="/home">Home</router-link> | -->
    <!-- <router-link to="/"></router-link> -->
    <!-- <router-view/> -->
    <PDD id="pdd"></PDD>
  </div>
</template>

<script>
import PDD from './views/PDD.vue'
export default {
  name: 'app',
  components: {
    PDD
  }
}
</script>

<style lang="less">
@import './assets/icon/iconfont.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#content {
  padding: 0px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html,
body {
    width: 100%;
    height: 100%;
    overflow: scroll;
    font-size: 14px;
    
}

#app {
    height: 100%;
    .pdd {
      width: 100%;
      height: 100%;
    }
}

</style>
