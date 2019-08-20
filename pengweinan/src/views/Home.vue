<template>
  <div class="home">
    <div class="navBars">
      
    </div>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      navTitles: ["热门", "推荐" , "女装" , "百货" , "母婴" , "手机" , "鞋包" , "电器" , "食品" , "农产品" , "猪肉" , "狗肉" , "驴肉" ,"电器" , "食品" , "农产品" , "猪肉" , "狗肉" ]
    }
  }
}
</script>
