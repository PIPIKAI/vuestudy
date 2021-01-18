<template>
  <div id="app">
    {{result}}
  </div>
</template>

<script>
import {request} from './network/request'
export default {
  name: 'App',
  components: {
    
  },
  data (){
    return {
      result : null
    }
  },
  created() {
    request({
    url :'/home/multidata'
    }).then(res => {
      this.result = res
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
}
</script>

<style>

</style>
