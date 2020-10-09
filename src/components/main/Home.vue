<template>
	<section class="hero" id="home">
		<div class="container">
			<div class="hero-col">
				<Baloon class="baloon-1" />
				<h3 class="title" v-html="newTitle"></h3>
				<p class="subtitle" v-html="subtitle"></p>
				<a href="https://www.instagram.com/matthewkormasela" target="_blank" class="button">Follow Me</a>
				<Baloon class="baloon-2" />
			</div>
			<div class="hero-col">
				<img src="../../assets/img/park.png" class="img-col" alt="Park">
				<Baloon class="baloon-3" />
			</div>
		</div>
	</section>
</template>

<script>
		
	import Baloon from "@/components/Baloon.vue";
	
	export default {
		name: 'Home',
		props: ['title', 'subtitle'],
		components: {
			Baloon
		},
		computed: {
			newTitle(){
				const validWork = /Web Developer|Software Engineer|Software Developer|Javascript Developer|Fullstack Developer|Fullstack Web Developer|Backend Developer|Frontend Developer|Database Administrator|Mobile Developer|Android Developer|IOS Developer/gi;
				const work = this.title.match(validWork);
				return this.title.replace(work, `<span style="color: #F9A826;">${work}</span>`);
			}
		}
	}

</script>

<style scoped>
	
	section.hero {
		background-color: white;
		height: 100vh;
		box-sizing: border-box;
		border-bottom: 5px solid #F9A826;
	}

	section.hero > .container {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.title, .subtitle {
		margin-bottom: 1.1rem;
	}

	.subtitle {
		width: 25rem;
		word-wrap: break-word;
	}
	
	section.hero > .container > .hero-col {
		width: 50%;
		position: relative;
	}

	.hero-col:last-child {
		text-align: right;
	}

	.baloon-1 {
		position: absolute;
		left: 2rem;
		top: -4.5rem;
	}

	.baloon-2 {
		position: absolute;
		bottom: -4rem;
		right: 28rem;
	}

	.baloon-3 {
		position: absolute;
		right: 8rem;
	}
	
	img.img-col {
		width: 100%;
	}

	.text-color {
		color: #F9A826;
	}

	a.button {
		display: inline-block;
		border-radius: 30px;
		font-size: 1rem;
		text-decoration: none;
		padding: .6rem 1.5rem;
		background-color: #F9A826;
		color: white;
	}

	@media screen and (max-width: 600px) {
		.container {
			width: 80%;
		}
		section.hero {
			height: 35.5rem;
		}
		.hero-col:last-child {
			display: none;
		}
		.baloon-1 {
			display: none !important;
		}
		.baloon-2 {
			bottom: -4.1rem;
			right: 0;
		}
		section.hero > .container > .hero-col {
			text-align: center;
			width: 100%;
		}
		.hero-col > .subtitle {
			width: 100%;
		}
	}

	@media screen and (min-width: 600px) and (max-width: 768px){
		.container {
			width: 80%;
		}
		section.hero {
			height: 35.5rem;
		}
		.hero-col:last-child {
			display: none;
		}
		.baloon-1 {
			display: none !important;
		}
		.baloon-2 {
			bottom: -4.1rem;
			right: 0;
		}
		section.hero > .container > .hero-col {
			text-align: center;
			width: 100%;
		}
		.hero-col > .subtitle {
			width: 100%;
		}
	}
	
	@media screen and (min-width: 768px) and (max-width: 920px){
		.container {
			width: 85%;
		}
		section.hero {
			height: 35.5rem;
		}
		section.hero > .container > .hero-col {
			width: 100%;
		}
		.hero-col > .subtitle {
			width: 100%;
		}
		.baloon-1, .baloon-2 {
			display: none !important;
		}
	}

	@media screen and (min-width: 920px) and (max-width: 1024px){
		.container {
			width: 85%;
		}
		section.hero {
			height: 35.5rem;
		}
		section.hero > .container > .hero-col {
			width: 100%;
		}
		.hero-col > .subtitle {
			width: 100%;
		}
		.baloon-1, .baloon-2 {
			display: none !important;
		}
	}
	
	@media screen and (min-width: 1024px) and (max-width: 1500px) {
		.baloon-2 {
			bottom: -5rem;
			left: 16rem;
		}	
	}
 
</style>
