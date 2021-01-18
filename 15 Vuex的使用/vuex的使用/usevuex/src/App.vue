<template>
  <div id="app">
    <h2>----------App内容: modules中的内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <!-- models里的函数名字不能和root 里的一样 -->
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <h2>--------- APP ---------</h2>
    <h2>count:{{this.$store.state.count}}</h2>
    <button @click="increasement"> + </button>
    <button @click="decreasement"> - </button>
    <button @click="addcc(5)"> +5 </button>
    <button @click="addwalk"> 添加Alan </button>
    <button @click="changeName"> 修改info姓名 </button>
    <h2>count的平方{{$store.getters.powerCounter}}</h2>
    <h2>info : {{this.$store.state.info}}</h2>
    <div>
      输入年龄:<input type="number" v-model.lazy="age" >
    </div>
    <div>
      <h2>年龄小于:{{age}}的人有:</h2>
      <ul>
        <h2><li v-for="item in $store.getters.filterAge(age)" :key="item.id">{{item}}</li></h2>
      </ul>
    </div>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      count : 1,
      age : 20, 
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    increasement(){
      this.$store.commit('increasement')
    },
    decreasement(){
      this.$store.commit('decreasement')
    },
    addwalk(){
      const stu = {id: "005", name: 'alan', age: 35}
      // 第一种传参方式
      this.$store.commit('addwalk' , stu)
    },
    addcc(count){
      // 第二种传参方式
      this.$store.commit({
        type : 'addcc',
        count
      })
    },
    changeName(){
      // 如果是异步操作 , 不能直接这样
      // this.$store.commit('changeName')
      // dispatch -> commit -> state
      this.$store
      .dispatch('aUpdateInfo','我是携带的信息')
      .then(res =>{
        console.log('完成了提交');
        console.log(res);
      })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
