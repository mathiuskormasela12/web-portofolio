<template>
	<section>
		<Navbar :Profile="true"/>
		<Alert v-if="flash" />
		<div class="container">
			<div class="col">
				<Baloon class="baloon-1" />
				<h6>
					Let’s change your password
					for customize your website.
				</h6>
				<img src="../assets/img/proud.png" class="img" alt="Proud">
				<Baloon class="baloon-2" />
			</div>
			<div class="col">
				<form method="POST" @submit.prevent="edit">
					<div class="control">
						<input type="email" class="input" placeholder="Type Your Email" v-model="email" autocomplete="off">
					</div>
					<div class="control">
						<input type="password" class="input" placeholder="Type Your New Password" v-model="new_password" autocomplete="off">
					</div>
					<div class="control">
						<button type="submit" class="btn">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script>

	import Baloon from "@/components/Baloon.vue";
	import Alert from "@/components/Alert.vue";
	import Navbar from "@/components/Navbar.vue";
	import HTTP from "@/http/HTTP.js";

	export default {
		name: 'EditPassword',
		components: {
			Baloon,
			Navbar,
			Alert
		},
		data() {
			return {
				email: '',
				new_password: ''
			}
		},
		computed: {
			flash() {
				return this.$session.has('message');
			}
		},
		methods: {
			async edit() {
				const formData = new FormData();
				formData.append('email', this.email);
				formData.append('newPassword', this.new_password);

				const result = await HTTP.connect('PUT', '/user/edit/password', formData, '');

				this.$session.start();
				this.$session.set('type', result.type);
				this.$session.set('message', result.message);
				
				if(result.type != 'success') 
					window.location.reload();
				else 
					this.$router.push('/login')
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
		width: 10rem;
		cursor: pointer;
		line-height: 3rem;
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
			width: 100%;
			height: 3rem;
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
		}
		h6 {
			width: 100%;
		}
	}	

</style>
