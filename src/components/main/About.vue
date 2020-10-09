<template>
	<section id="about">
		<div class="container">
			<div class="row-title">
				<h5>About Me</h5>
				<center><div class="hr-width"><hr class="hr-color" /></div></center>
				<Baloon class="baloon-1" />
			</div>
			<div class="row-content">
				<div class="content-col">
					<div class="img-container">
						<img :src="photo" class="img"  alt="Foto Mathius">
					</div>
				</div>
				<div class="content-col">
					<p class="text-content" v-html="text"></p>
				</div>
			</div>
			<div class="row-baloon">
				<Baloon class="baloon-2" />
			</div>
		</div>
	</section>
</template>

<script>

	import Baloon from "@/components/Baloon.vue";

	export default {
		name: 'About',
		props: {
			photo: String,
			text: String
		},
		components: {
			Baloon
		}
	}

</script>

<style scoped>

	section {
		/*min-height: 100vh;*/
		height: auto;
		padding: 3rem 0;
		border-bottom: 5px solid #F9A826;
	}

	.row-title {
		text-align: center;
		position: relative;
	}

	.hr-width {
		width: 5rem;	
	}

	hr.hr-color {
		margin-top: .5rem;
		border: 1px solid #F9A826;
	}

	.row-baloon {
		margin-top: 1.2rem;
		position: relative;
		height: 2.5rem;
	}

	.baloon-1 {
		position: absolute;
		left: 0;
		top: 0;
	}

	.baloon-2 {
		position: absolute;
		right: 0;
		top: 0;
	}
	
	.row-content {
		margin-top: 3rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.row-content > .content-col:first-child {
		width: 25%;
	}

	.row-content > .content-col:last-child {
		width: 73%;
	}

	.img-container {
		position: relative;
		width: 100%;
		height: 30rem;
		border-radius: 15px;
		box-shadow: 0 0 10px -8px black;
		overflow: hidden;
	}

	img.img {
		width: 100%;
		height: 100%;
	}

	.text-content {
		font-size: 1.1rem;
		text-align: justify;
	}

	@media screen and (max-width: 600px) {
		.container {
			width: 80%;
		}
		.img-container {
			width: 100%;
			height: 25rem !important;
		}
		.row-content > .content-col {
			width: 100% !important;
		}
		.text-content {
			font-size: 1rem;
			margin-top: 1.3rem;
		}
		.baloon-1 {
			display: none !important;
		}
	}

	@media screen and (min-width: 600px) and (max-width: 1024px) {
		.container {
			width: 80%;
		}	
		.row-content > .content-col {
			width: 100% !important;
		}
		.img-container {
			width: 80%;
			margin: 0 auto;
		}
		.text-content {
			font-size: 1rem !important;
			margin-top: 1.3rem;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1200px) {
		.img-container {
			width: 100%;	
		}
		.row-content > .content-col:first-child {
			width: 33% !important;
		}				
		.row-content > .content-col:last-child {
			width: 65% !important;
		}				
	}

	@media screen and (min-width: 1200px) and (max-width: 1300px) {
		.img-container {
			width: 100%;	
		}
		.row-content > .content-col:first-child {
			width: 33% !important;
		}				
		.row-content > .content-col:last-child {
			width: 65% !important;
		}				
	}

	@media screen and (min-width: 1300px) and (max-width: 1500px) {
		.img-container {
			width: 100%;	
		}
		.row-content > .content-col:first-child {
			width: 28% !important;
		}				
		.row-content > .content-col:last-child {
			width: 70% !important;
		}				
	}
	
	@media screen and (min-width: 2000px) and (max-width: 3000px) {
		.img-container {
			height: 40rem;
		}
		.row-content > .content-col:first-child {
			width: 20% !important;
		}
		.row-content > .content-col:last-child {
			width: 78% !important;
		}
	}

	@media screen and (min-width: 3000px) {
		.img-container {
			height: 40rem;
		}
		.row-content > .content-col:first-child {
			width: 15% !important;
		}
		.row-content > .content-col:last-child {
			width: 84% !important;
		}
	}

</style>
