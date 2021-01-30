<template>
    <div id="home" class="wrapper">
      <nav-bar class="home-nav" ref="homenav" v-show="!isTabFixed">
        <template v-slot:center>
          <div>购物街</div>
        </template>
      </nav-bar>
      <tab-control  
      class="tab-control" 
      @tabClick="tabClick" 
      :titles="['流行','新款','精选']" 
      :style="tabS" 
      ref = "tabControl1"
      v-show="isTabFixed"/>
      <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :observeImage="true"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control  class="tab-control" @tabClick="tabClick" ref = "tabControl2" :titles="['流行','新款','精选']" />
      <goods-list :goods="showGoods"/>
      </scroll>
      <back-top @click = "backClick" v-show = "isShowBackTop"></back-top>
    </div>
</template>
<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import VueSticky from 'vue-sticky'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'
import { getHomeMultidata, getHomeGoods } from "network/home"
import {debounce}  from "common/utils"
export default {
    name : "Home",
    components :{
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
      VueSticky
    },
    data(){
        return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: [] ,scrolly : 0},
          'new': {page: 0, list: [] , scrolly : 0},
          'sell': {page: 0, list: [], scrolly : 0},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        navOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
        initPosition: 0,
      }
    },
    computed :{
      showGoods() {
        return this.goods[this.currentType].list
      },
      tabS(){
        return {
          'display': 'flex',
          'position': 'relative',
          'background-color': '#fff',
          'box-shadow': '0px -3px 1px rgba(100, 100, 100, 0.07)',
          'z-index' : 9
        }
      }
    },
    methods :{
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = this.$refs.tabControl2.currentIndex = index
        this.$refs.scroll.scrollTo(0, this.goods[this.currentType].scrolly ,0)
        // console.log(this.goods[this.currentType].scrolly);
            
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000
        // if((this.tabOffsetTop + this.navOffsetTop) != 0)
        this.isTabFixed = -position.y >= this.initPosition
        if(this.initPosition == 0 ){
          this.isTabFixed =false
        }
        this.goods[this.currentType].scrolly = position.y
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        console.log(offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        this.navOffsetTop = this.$refs.navbar.$el.offsetTop;

      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
          
        })
      }
    },
    created(){
      // 1.请求多个数据
      this.getHomeMultidata()
      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // 1.图片加载完成的事件监听
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      this.$bus.on('itemImageLoad', () => {
        refresh()
      })

      
    },
    beforeUpdate(){
      // 
      if(this.tabOffsetTop == 0){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        this.navOffsetTop = this.$refs.homenav.$el.offsetHeight;
        this.initPosition = this.tabOffsetTop + this.navOffsetTop; 
        // console.log(this.initPosition);
      }
      for( let good in this.goods){
        if(this.goods[good].scrolly >= -this.initPosition)
          this.goods[good].scrolly = -this.initPosition
      }
    }

}
</script>
<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .content {
    /* overflow: hidden; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }



  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>