<template>
	<div id="app">
		<router-view />	
	</div>
</template>

<script>
	
	export default {
		name: 'App',	
	}

</script>

<style>
	
	@font-face {
		src: url('assets/fonts/Poppins-Regular.ttf');
		font-family: poppins;
	}	
	
	* {
		margin: 0;
		padding: 0;
	}

  html {
		font-size: 16px;
		scroll-behavior: smooth;
	}

	#app {
		font-family: poppins;
		background-color: white;
	}

	.container {
		width: 90%;
		margin: 0 auto;
	}

	h1 {
		font-size: 3rem;
	}
	
	h2 {
		font-size: 2.8rem;
	}

	h3 {
		font-size: 2.5rem;
	}

	h4 {
		font-size: 2.2rem;
	}

	h5 {
		font-size: 2rem;
	}

	h6 {
		font-size: 1.8rem;
	}

</style>
