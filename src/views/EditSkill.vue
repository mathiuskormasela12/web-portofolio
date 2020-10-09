<template>
	<section>
		<Navbar :Profile="true"/>
		<Alert v-if="flash" />
		<div class="container">
			<div class="col">
				<Baloon class="baloon-1" />
				<h6>
					Let’s Edit your new skill
					here.
				</h6>
				<img src="../assets/img/proud.png" class="img" alt="Proud">
				<Baloon class="baloon-2" />
			</div>
			<div class="col">
				<form method="POST" @submit.prevent="editSkill">
					<div class="control">
						<input type="text" class="input" placeholder="Type Your New Skill" v-model="skill" autocomplete="off">
					</div>
					<div class="control">
						<input type="text" class="input" placeholder="Type Your New Skill Range" v-model="level" autocomplete="off">
					</div>
					<div class="control">
						<button type="submit" class="btn">Submit</button>
						<button type="button" class="btn" @click="removeSkill()">Delete</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>

	import HTTP from "@/http/HTTP";
	import Baloon from "@/components/Baloon.vue";
	import Alert from "@/components/Alert.vue";
	import Navbar from "@/components/Navbar.vue";

	export default {
		name: 'EditSkill',
		components: {
			Baloon,
			Navbar,
			Alert
		},
		mounted: function() {
			this.getSkills();
		},
		data: function() {
			return {
				id: this.$route.params.id,
				flash: this.$session.has('message'),
				skill: '',
				level: ''
			}
		},
		methods: {
			getSkills: async function() {
				const res = await HTTP.connect('get', `/skill/${this.id}`, null, this.$session.get('token'));
				this.skill = res.result.skill;
				this.level = res.result.level;
			},
			editSkill: async function() {
				const formData = new FormData();
				formData.append('skill', this.skill);
				formData.append('level', this.level);
				formData.append('id', this.id);

				const res = await HTTP.connect('put', '/skill', formData, this.$session.get('token'));

				this.$session.set('type', res.type);
				this.$session.set('message', res.message);
				
				if(res.type != 'success')
					window.location.reload();
				else
					this.$router.push('/');
			},
			removeSkill: async function() {
				const res = await HTTP.connect('delete', `/skill/${this.id}`, null, this.$session.get('token'));
				
				this.$session.set('type', res.type);
				this.$session.set('message', res.message);
				
				if(res.type != 'success')
					window.location.reload();
				else
					this.$router.push('/');
			}
		}
	}

</script>

<style scoped>

	section {
		height: 100vh;
		background-color: white;
	}

	section > .container {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 80%;
	}

	section > .container > .col {
		position: relative;
	}

	section > .container > .col:first-child {
		width: 50%;
	}

	section > .container > .col:last-child {
		width: 37%;
	}

	img.img {
		width: 80%;
		display: inline-block;
		margin-bottom: 2rem;
	}

	h6 {
		color: #F9A826;
		font-weight: normal;
		font-size: 1.7rem;
		width: 60%;
		margin-top: 2.5rem;
	}

	.baloon-1 {
		position: absolute;
		right: 0;
	}

	.baloon-2 {
		position: absolute;
		left: 15rem;
		bottom: -2rem;
	}

	form {
		width: 90%;
		margin: 0 auto;
	}
	
	input.input {
		border: none;
		outline: none;
		background-color: #E9EFF6;
		box-sizing: border-box;
		padding-left: 1rem;
		height: 3rem;
		border-radius: 15px;
		width: 100%;
		font-size: .9rem;
	}

	.control {
		margin-bottom: 1.3rem;
	}

	::-webkit-input-placeholder, ::-moz-input-placeholder, ::-ms-input-placeholder, ::-o-input-placeholder {
		color: #A1A5AA !important;
		opacity: 1;
	}

	::placeholder {
		color: #A1A5AA !important;
		opacity: 1;
	}

	button.btn {
		outline: none;
		border: none;
		border-radius: 15px;
		color: white;
		font-size: 1rem;
		background-color: #F9A826;
		width: 45%;
		cursor: pointer;
		line-height: 3rem;
	}
	.control:last-child {
		display: flex;	
		flex-wrap: wrap;
		justify-content: space-between;
	}

	@media screen and (max-width: 600px) {
		section {	
			height: auto;
			padding: 3.5rem 0;
		}
		section > .container > .col {
			width: 100% !important;
		}
		section > .container > .col:first-child {
			text-align: center;
		}
		section > .container {
			width: 90%;
			flex-wrap: wrap;	
		}
		.baloon-1, .baloon-2 {
			display: none !important;
		}
		button.btn {
			padding: 0;
			width: 100% !important;
			height: 3rem;
			margin-bottom: 1rem;
		}
		button.btn:last-child {
			margin-bottom: 0;
		}
		h6 {
			width: 100%;
		}
	}	

	@media screen and (min-width: 600px) and (max-width: 1024px) {
		section {	
			height: auto;
			padding: 3.5rem 0;
		}
		section > .container > .col {
			width: 100% !important;
		}
		section > .container > .col:first-child {
			text-align: center;
		}
		section > .container {
			width: 90%;
			flex-wrap: wrap;	
		}
		.baloon-1, .baloon-2 {
			display: none !important;
		}
		button.btn {
			padding: 0;
			width: 100%;
			height: 3rem;
			margin-bottom: 1rem;
		}
		button.btn:last-child {
			margin-bottom: 0;
		}
		h6 {
			width: 100%;
		}
	}	

</style>
