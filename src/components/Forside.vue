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
#forside_bg{
  min-height:100%;
  min-width:1024px;
  width:100%;
  height:auto;
  position:fixed;
  top: 0;
  left: 0;
  background: url('https://www.placehold.it/1920x1080.png') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>