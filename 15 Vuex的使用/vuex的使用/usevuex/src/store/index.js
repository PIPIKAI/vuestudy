import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import modelA from './modules/modelA'
import actions from './actions'

Vue.use(Vuex)
const state ={
  count : 10,
  walks : [
    {id: '001',name:'ppk',age:18},
    {id: '002',name:'tsy',age:17},
    {id: '003',name:'kobe',age:38},
    {id: '004',name:'zzk',age:25},
  ],
  info : {name : 'codewhy' , age : 18 ,height : 1.98}
}
export default new Vuex.Store({
  state,
  mutations ,
  getters,
  actions,
  modules :{
    a :modelA
  }
})


// 对象的解构
const obj = {
  name: 'why',
  age: 18,
  height: 1.88,
  address: '洛杉矶'
}

const {name, height, age} = obj;