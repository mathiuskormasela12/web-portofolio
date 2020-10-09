<template>
	<section id="portofolio">
		<div class="container">
			<div class="row-title">
				<h5>Portofolio</h5>
				<center><div class="hr-width"><hr></div></center>
				<Baloon class="baloon-1" />
			</div>
			<div class="row-content">
				<div class="col-content" v-for="item in portofolios" :key="item.id">
					<Card :results="item" />
				</div>
			</div>
			<div class="row-show-all">
				<p @click="getPortofolios" v-if="portofolios.length < 7">Show All Portofolio</p>
				<p @click="getSeveralPortofolios" v-else>Hide Several Portofolio</p>
			</div>
			<div class="row-baloon">
				<Baloon class="baloon-2" />
			</div>
		</div>
	</section>
</template>

<script>
	
	import Baloon from "@/components/Baloon.vue";
	import Card from "@/components/Card.vue";

	export default {
		name: 'Portofolio',
		components: {
			Baloon,
			Card
		},
		props: {
			portofolios: Array,
			getPortofolios: Function,
			getSeveralPortofolios: Function
		},
	}

</script>

<style scoped>

	section {
		padding: 3rem 0 1.5rem 0;
	}

	.row-title {
		text-align: center;
		position: relative;
	}

	.hr-width {
		width: 5rem;
	}

	.hr-width > hr {
		border: 1px solid #F9A826;
		margin-top: .5rem;
	}

	.baloon-1 {
		position: absolute;
		top: 0;
		right: 0;
	}

	.row-content {
		margin-top: 4rem;
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}

	.row-content > .col-content {
		width: 28%;
		margin-bottom: 1.5rem;
		margin-right: 8%;
	}

	.row-content > .col-content:nth-child(3n + 0) {
		margin-right: 0 !important;
	}

	.row-show-all {
		margin-top: 1.1rem;
	}

	.row-show-all p {
		color: #F9A826;
		cursor: pointer;
		font-size: 1.1rem;
	}

	.row-baloon {
		position: relative;
		height: 5rem;
	}

	.baloon-2 {
		position: absolute;
		left: 0;
		bottom: 0;
	}

	@media screen and (max-width: 600px) and (orientation: portrait) {
		.container {
			width: 80%;
		}
		.baloon-1 {
			display: none !important;
		}
		.row-content {
			margin-top: 2.5rem;
		}
		.row-content > .col-content {
			width: 100%;
			margin-right: 0;
		}
	}

	@media screen and (max-width: 768px) and (orientation: landscape) {
		.container {
			width: 80%;
		}
		.baloon-1 {
			display: none !important;
		}
		.row-content {
			margin-top: 2.5rem;
		}
		.row-content > .col-content {
			width: 48%;
			margin-right: 2%;
		}
		.row-content > .col-content:last-child {
			margin-right: 0;
		}
	}

	@media screen and (min-width: 600px) and (max-width: 768px) and (orientation: portrait){
		.container {
			width: 80%;
		}
		.baloon-1 {
			display: none !important;
		}
		.row-content {
			margin-top: 2.5rem;
		}
		.row-content > .col-content {
			width: 100%;
			margin-right: 0;
		}	
	}

	@media screen and (min-width: 768px) and (max-width: 920px) {
		.container {
			width: 80%;
		}
		.baloon-1 {
			display: none !important;
		}
		.row-content {
			margin-top: 2.5rem;
		}
		.row-content > .col-content {
			width: 47%;
			margin-right: 3%;
		}
		.row-content > .col-content:last-child {
			margin-right: 0;
		}
	
	}

	@media screen and (min-width: 920px) and (max-width: 1024px) {
		.container {
			width: 80%;
		}
		.baloon-1 {
			display: flex !important;
		}
		.row-content {
			margin-top: 2.5rem;
		}
		.row-content > .col-content {
			width: 47%;
			margin-right: 3%;
		}
		.row-content > .col-content:last-child {
			margin-right: 0;
		}
	}

	@media screen and (min-width: 1024px) and (max-width: 1200px) {
		.container {
			width: 80%;
		}
		.baloon-1 {
			display: flex !important;
		}
		.row-content {
			margin-top: 2.5rem;
		}
		.row-content > .col-content {
			width: 47%;
			margin-right: 3%;
		}
		.row-content > .col-content:last-child {
			margin-right: 0;
		}
	}

	@media screen and (min-width: 2000px) {
		.row-content > .col-content {
			margin-bottom: 3rem;
		}
	}

</style>
