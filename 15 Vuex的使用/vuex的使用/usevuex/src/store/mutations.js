export default {
    decreasement(state){
        state.count ++
    },
    increasement(state){
        state.count --
    },
    addwalk(state,walk){
        state.walks.push(walk)
    },
    addcc(state , payload){
    // 注意第二种传参数的方式是一个对象 payload
        state.count += payload.count
    },
    changeName(state) {
        state.info.name = 'kobe'
    
        // 错误的代码: 不能在这里进行异步操作
        // setTimeout(() => {
        //   state.info.name = 'coderwhy'
        // }, 1000)
    
        // state.info['address'] = '洛杉矶'
    
        // Vue.set(state.info, 'address', '洛杉矶')
        
        // 该方式做不到响应式
        // delete state.info.age
        // Vue.delete(state.info, 'age')
      }
      
}