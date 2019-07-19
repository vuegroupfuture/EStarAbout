<template>
  <div class="about">
    <img class="estarlogo" src="../assets/estarlogo.png" alt="estar logo">
    <h5 class="estartitle">易星</h5>
    <AboutCell class="about-cell" v-for="packageInfo in packageInfos" :key="packageInfo.id" :packageInfo="packageInfo"/>
    <div class="about-cells-clickable">
      <AboutCellClick @click="openNewPage(baseInfo) class="about-cell-click" v-for="baseInfo in baseInfos" :key="baseInfo.id" :baseInfo="baseInfo" "/>
    </div>
  </div>
</template>

<script>
import AboutCell from '@/components/AboutCell.vue'
import AboutCellClick from '@/components/AboutCellClick.vue'
import '@/assets/icon/iconfont.css'
export default {
  name: 'about',
  components: {
    AboutCell,
    AboutCellClick
  },
  data:function() {
    return {
      packageInfos:[
      {
        leftLab: "包号",
        rightLab: "000734"
      },
      {
        leftLab: "即时行情",
        rightLab: "120.136.160.83:55013"
      },
      {
        leftLab: "历史行情",
        rightLab:"212.21.23.23.23.43"
      },
      {
        leftLab: "云交易地址",
        rightLab: "43.4.45.544.344.3343"
      }
      ],
      baseInfos:[
      {
        leftLab: "官网",
        rightLab: "www.epolestar.info"
      },
      {
        leftLab: "客服热线",
        rightLab: "4006156869"
      },
      {
        leftLab: "公众号",
        rightLab:"极易星财"
      },
      {
        leftLab: "版本",
        rightLab: "2.1.51"
      }
      ],
    }
  },
  methods: {
    openNewPage(baseInfo) {
      
    }
  }
}
</script>

<style lang="less">
.about {
  width: 100%;
  height: 100%;
  background: rgb(230, 230, 230);
  .estarlogo { 
    padding-top: 50px;
    width: 100px;
    height: 100px;
  }
  .estartitle {
    font-size: 16px;
  }
  .about-cell {
    width: 100%;
    height: 40px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .about-cells-clickable {
    padding-top: 20px;
    .about-cell-click {
      width: 100%;
      height: 40px;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
   }
  }
  
}
</style>
