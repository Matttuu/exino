<template>
  <div id ="forside_bg">
    
  </div>
</template>

<script>
export default {
  name: 'Forside',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

#forside_bg {
  background: url('http://placehold.it/1920x1080') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  height:100vh;
  width:100vw;
}
</style>