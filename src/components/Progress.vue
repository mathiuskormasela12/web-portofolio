<template>
	<div>
		<p class="progress-title">{{ skill.skill }}</p>
		<div class="progress">
			<abbr :title="skill.level">
				<div class="bar" :style="{width: skill.level - 5 + '%'}" v-if="logged" @dblclick="edit(skill.id)"></div>
				<div class="bar" :style="{width: skill.level - 5 + '%'}" v-else></div>
			</abbr>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'Progress',
		props: {
			skill: Object
		},
		data: function() {
			return {
				logged: this.$session.has('token')
			}
		},
		methods: {
			edit(id) {
				this.$router.push('/edit/skill/' + id);
			}
		}
	}

</script>

<style scoped>
	
	.progress-title {
		margin-bottom: .5rem;
	}

	.progress {
		height: 2.1rem;
		width: 100%;
		background-color: #C4C4C4;
		overflow: hidden;
		border-radius: 1px;
	}

	.progress > abbr > .bar {
		height: 100%;
		background-color: #F9A826;
	}
</style>
