<template>
	<section id="skills">
		<div class="container">
			<div class="row-title">
				<h5>My Skills</h5>
				<center><div class="hr-width"><hr></div></center>
				<Baloon class="baloon-1" />
			</div>
			<div class="row-skill">
				<div class="col-skill" v-for="skill in skills" :key="skill.id">
					<Progress :skill="skill"/>
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
	import Progress from "@/components/Progress.vue";

	export default {
		name: 'Skills',
		props: {
			skills: Array
		},
		components: {
			Baloon,
			Progress
		},
	}

</script>

<style scoped>

	section {
		padding: 3rem 0;
		border-bottom: 5px solid #F9A826;
	}

	.row-title {
		text-align: center;
		position: relative;
	}

	.hr-width {
		width: 6rem;
	}

	.hr-width > hr {
		margin-top: .5rem;
		border: 1px solid #F9A826;
	}

	.row-baloon {
		height: 5rem;	
		position: relative;
	}

	.baloon-1 {
		position: absolute;
		right: 0;
		top: 0;
	}

	.baloon-2 {
		position: absolute;
		left: 0;
		bottom: 0;
	}

	.row-skill {
		margin-top: 2rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.row-skill > .col-skill {
		width: 45%;
		margin-bottom: 1.5rem;
	}

	@media screen and (max-width: 600px) {
		.container {
			width: 80%;
		}
		.row-skill > .col-skill {
			width: 100%;
		}
		.baloon-1 {
			display: none !important;
		}
		.row-baloon {
			height: 3.8rem;
		}
	}

	@media screen and (min-width: 600px) and (max-width: 920px){
		.container {
			width: 80%;
		}
		.row-skill > .col-skill {
			width: 100%;
		}
		.baloon-1 {
			display: none !important;
		}
		.row-baloon {
			height: 3.8rem;
		}
	}

</style>
