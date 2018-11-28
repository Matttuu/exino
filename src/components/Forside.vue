<template>
<div id ="forside_bg">

	<div class="wrap">

		<div class="container"> 
			<!-- Example row of columns -->

			<div class="row">
				<div class="col-md-12 text-center">
					<h2>Exino</h2>
				</div>
			</div>
		
			<div class="row">
      	<div class="col-sm-12 col-md-12 col-xs-12 col-lg-12 col-xl-12">
    	    <div class="row">
						<div class="col-md-3 col-sm-3 col-xs-6"></div>
						<div class="col-md-3 col-sm-3 col-xs-6"> <a href="#" class="btn btn-sm animated-button left-button">Portfolio</a> </div>
						<div class="col-md-3 col-sm-3 col-xs-6"> <a href="#" class="btn btn-sm animated-button right-button">Factory</a> </div>
       		</div>
        </div>
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

<style scoped >


/* Text */
h2 {
	color: #BDC3C7;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Center Div */
.wrap {
  display: flex;
  justify-content: center;
  height: 800px;
}

.container {
  align-self: center;
  padding: 2rem;
}

/* Background image */
  #forside_bg{
  min-height:100%;
  width:100%;
  height:auto;
  position:fixed;
  top: 0;
  left: 0;
  background: url('~@/assets/forside_bg.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}  
/* Global Button Styles */
a.animated-button:link, a.animated-button:visited {
	position: relative;
	display: block;
	margin: 30px auto 0;
	padding: 14px 15px;
	color: #fff;
	font-size:14px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	letter-spacing: .08em;
	border-radius: 0;
	text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
	-webkit-transition: all 1s ease;
	-moz-transition: all 1s ease;
	-o-transition: all 1s ease;
	transition: all 1s ease;
}
a.animated-button:link:after, a.animated-button:visited:after {
	content: "";
	position: absolute;
	height: 0%;
	left: 50%;
	top: 50%;
	width: 150%;
	z-index: -1;
	-webkit-transition: all 0.75s ease 0s;
	-moz-transition: all 0.75s ease 0s;
	-o-transition: all 0.75s ease 0s;
	transition: all 0.75s ease 0s;
}
a.animated-button:link:hover, a.animated-button:visited:hover {
	color: #FFF;
	text-shadow: none;
}
a.animated-button:link:hover:after, a.animated-button:visited:hover:after {
	height: 450%;
}
a.animated-button:link, a.animated-button:visited {
	position: relative;
	display: block;
	margin: 30px auto 0;
	padding: 14px 15px;
	color: #fff;
	font-size:14px;
	border-radius: 0;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	overflow: hidden;
	letter-spacing: .08em;
	text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
	-webkit-transition: all 1s ease;
	-moz-transition: all 1s ease;
	-o-transition: all 1s ease;
	transition: all 1s ease;
}

/*  Buttons */

a.animated-button.left-button {
	border: 2px solid #D24D57;
}
a.animated-button.left-button:after {
	background: #D24D57;
	-moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
	-ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
	-webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
	transform: translateX(-50%) translateY(-50%) rotate(-25deg);
}
a.animated-button.right-button {
	border: 2px solid #D24D57;
}
a.animated-button.right-button:after {
	background: #D24D57;
	-moz-transform: translateX(-50%) translateY(-50%) rotate(25deg);
	-ms-transform: translateX(-50%) translateY(-50%) rotate(25deg);
	-webkit-transform: translateX(-50%) translateY(-50%) rotate(25deg);
	transform: translateX(-50%) translateY(-50%) rotate(25deg);
}
</style>