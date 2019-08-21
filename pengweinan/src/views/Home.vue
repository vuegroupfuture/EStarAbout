<template>
  <div class="home">
    <Navbar :navTitles = navTitles></Navbar>
    <CarouselImage :carouselImages = carouselImages></CarouselImage>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import CarouselImage from '@/components/CarouselImage.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    CarouselImage
  },
  data: function () {
    return {
      navTitles: ["热门", "推荐" , "女装" , "百货" , "母婴" , "手机" , "鞋包" , "电器" , "食品" , "农产品" , "猪肉" , "狗肉" , "驴肉" ,"电器" , "食品"],
      carouselImages: [
        {
          src:'@/assets/carousel-image1'
        },
        {
          src:'@/assets/carousel-image2'
        },
        {
          src:'@/assets/carousel-image3'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.home {
  width: 600px;
  height: 1000px;
  .navBar {
  width: 100%;
  height: 30px;
  overflow-x: scroll;
  }
}
</style>
