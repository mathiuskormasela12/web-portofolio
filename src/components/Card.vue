<template>
	<div class="card" @dblclick="edit(results.id)" v-if="logged">
		<div class="card-header">
			<img class="card-img" :src="results.photo" :alt="'Fotonya ' + results.title">
		</div>
		<div class="card-content">
			<p class="card-title">{{ results.title }}</p>
			<p class="card-subtitle">{{ results.description }}</p>
		</div>
	</div>
	<div class="card" v-else>
		<div class="card-header">
			<img class="card-img" :src="results.photo" :alt="'Fotonya ' + results.title">
		</div>
		<div class="card-content">
			<p class="card-title">{{ results.title }}</p>
			<p class="card-subtitle">{{ results.description }}</p>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'Card',
		props: ['results'],
		data: function() {
			return {
				logged: this.$session.has('token')
			}
		},
		methods: {
			edit: function(id) {
				this.$router.push(`/edit/portofolio/${id}`);
			}
		}
	}

</script>

<style scoped>
	
	.card {
		width: 100%;
		min-height: 15rem;
		height: auto;
	}

	.card > .card-header {
		width: 100%;
		background-color: #C4C4C4;
	}

	.card-img {
		width: 100%;
		height: 100%;
	}

	.card > .card-content {
		padding-top: 1.1rem;
	}

	.card-title {
		font-size: 1.1rem;
		margin-bottom: .5rem;
	}

	.card-subtitle {
		font-size: .9rem;
	}
	
</style>
