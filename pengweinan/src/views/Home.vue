<template>
  <div class="home">
    <div class="navbar-container">
      <Navbar class="navbar" :navTitles = navTitles @clickIndex = "clickAtIndex"></Navbar>
    </div>
    <div class="content-container">
      <div class="container-bgview" :style="[computedWidth, movedAnimaitonStyle]">
        <div class="singleView" v-for="(item, index) in navTitles" :key="index">
          <div class="nn">{{index}}</div>
          <div class="swiper">
            <CarouselImage :carouselImages = carouselImages class="carouselImages"></CarouselImage>
          </div>
          <div class="icons">
            <IconButtons class="iconButtons" :iconsBtns = iconButtons></IconButtons>
          </div>
          <CommodityCell class="commodityCell" 
          v-for="(info, index) in commodityInfo" :key="index" 
          :cellInfo = info
          @toBlank = 'toBlank'
          ></CommodityCell>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import {navTitles, carouselImages, iconButtons, commodityInfo} from './onLineData.js'
import HelloWorld from '@/components/home/HelloWorld.vue'
import Navbar from '@/components/home/Navbar.vue'
import CarouselImage from '@/components/home/CarouselImage.vue'
import IconButtons from '@/components/home/IconButtons.vue'
import CommodityCell from '@/components/home/CommodityCell.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    CarouselImage,
    IconButtons,
    CommodityCell
  },
  data: function () {
    return {
      navTitles: ["热门", "推荐" , "女装" , "百货" , "母婴" , "手机" , "鞋包" , "电器" , "食品" , "产品" , "猪肉" , "狗肉" , "驴肉" ,"电器" , "食品"],
      carouselImages: [
        {
          img:require('@/assets/carousel-image1.png')
        },
        {
          img:require('@/assets/carousel-image2.png')
        },
        {
          img:require('@/assets/carousel-image3.png')
        }
      ],
      iconButtons:[
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
        {
          iconClass:"icon-dragon",
          title:"限时秒杀"
        },
      ],
      commodityInfo: [
        {
        image: require('@/assets/commodityImage.png'),
        content: "指纹感应打火机冲ID那发那个风个性USB电子烟送老公送情人送小三送二奶送老公送情送老公送情送老公送情",
        storeName: "三桥打火机专营店",
        price: 7.99,
        sellAmount: 129939
        },
        {
        image: require('@/assets/commodityImage.png'),
        content: "指纹感应打火机冲ID那发那个风个性USB电子烟送老公送情人送小三送二奶送老公送情送老公送情送老公送情",
        storeName: "三桥打火机专营店",
        price: 7.99,
        sellAmount: 129939
        },
        {
        image: require('@/assets/commodityImage.png'),
        content: "指纹感应打火机冲ID那发那个风个性USB电子烟送老公送情人送小三送二奶送老公送情送老公送情送老公送情送老公送情",
        storeName: "三桥打火机专营店",
        price: 7.99,
        sellAmount: 129939
        },
        {
        image: require('@/assets/commodityImage.png'),
        content: "指纹感应打火机冲ID那发那个风个性USB电子烟送老公送情人送小三送二奶送老公送情送老公送情送老公送情",
        storeName: "三桥打火机专营店",
        price: 7.99,
        sellAmount: 129939
        },
        {
        image: require('@/assets/commodityImage.png'),
        content: "指纹感应打火机冲ID那发那个风个性USB电子烟送老公送情人送小三送二奶送老公送情送老公送情送老公送情",
        storeName: "三桥打火机专营店",
        price: 7.99,
        sellAmount: 129939
        },
        {
        image: require('@/assets/commodityImage.png'),
        content: "指纹感应打火机冲ID那发那个风个性USB电子烟送老公送情人送小三送二奶送老公送情送老公送情送老公送情",
        storeName: "三桥打火机专营店",
        price: 7.99,
        sellAmount: 129939
        }
      ],
      computedWidth: {
        width: `${15 * 414}px`
      },
      currentIndex: 0,
      distance: 0
      
    }
  },
  computed: {
    movedAnimaitonStyle () {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      }
    }
  },
  methods: {
    clickAtIndex: function (index) {
      var tmpIndex = this.currentIndex- index
      this.currentIndex = index;
      this.distance += (tmpIndex * 414)
      console.log('distanceeeee =' +this.distance)
    },
    toBlank () {
      this.$router.push({path: '/home/blank'})
    }
  }
}
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .navbar-container {
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  .navbar {
    overflow-x: scroll;
  }
  }
  .content-container {
    width: 100%;
    height: 750px;
    overflow: hidden;
    .container-bgview {
      width: 100%;
      height: 100%;
      overflow-x: scroll;
      display: flex;
      .singleView {
        width: 414px;
        height: 100%;
        flex: 0 0 414px;
        .swiper {
          width: 100%;
          height: 120px;
          overflow: hidden;
          .carouselImages {
          width: 100%;
          height: 100%;
          } 
        }
        .icons {
          width: 100%;
          height: 140px;
          .iconButtons {
          width: 100%;
          height: 100%;
          }
        }
        .commodityCell {
          width: 100%;
          height: 140px;
          margin-top: 10px;
        }
      }
    }
  }
  
  
}
</style>
