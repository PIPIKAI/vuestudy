export default {
    powerCounter(state) {
      return state.count * state.count
    },
    filterAge(state){
      return age => {
        return state.walks.filter(s => s.age < age)
      }
    }
  }