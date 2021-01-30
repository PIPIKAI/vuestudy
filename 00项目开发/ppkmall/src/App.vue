<template>
  <div id="app" class="wrapper">
    <!-- <keep-alive exclude="">
    <router-view/>
    </keep-alive> -->
    
  <router-view v-slot="{ Component }">
    <keep-alive exclude="Detail">
      <component class="view" :is="Component" />
    </keep-alive>
  </router-view>

    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar' 

  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
