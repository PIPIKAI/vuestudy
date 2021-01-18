<template>
  <div class="hello">
    <h2>--------- hello ---------</h2>
    <h2>{{this.$store.state.count}}</h2>
    <div>
      <h2>所有人:</h2>
      <ul>
        <h2><li v-for="item in $store.getters.filterAge(1000)" :key="item.id">{{item}}</li></h2>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
