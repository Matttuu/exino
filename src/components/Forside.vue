<template>
<div id ="forside_bg">

 <div class="parent">
    <div class="middle">
        <div class="circle">
            <div class="circle"></div>
        </div>
    </div>
</div>

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

.parent{
    display: table; 
    margin: 50 auto;
    background: lightgray;
    height: 200px;
    width: 200px;
}
.middle {display: table-cell; vertical-align: middle;}

.circle
    {
    
    margin: auto;
    border: solid 10px blue;
    border-radius: 50%;
    padding-bottom: 30%;
    opacity: 0.3;
    width: 30%;
    height: 30%;

}

</style>