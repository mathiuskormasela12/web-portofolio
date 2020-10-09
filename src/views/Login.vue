<template>
	<section>
		<Navbar/>
		<Alert v-if="flash"/>
		<div class="container">
			<div class="col">
				<Baloon class="baloon-1" />
				<h6>
					Let’s Login for customize 
					your website .
				</h6>
				<img src="../assets/img/proud.png" class="img" alt="Proud">
				<Baloon class="baloon-2" />
			</div>
			<div class="col">
				<form method="POST" @submit.prevent="login">
					<div class="control">
						<input type="email" class="input" placeholder="Type Your Email" autocomplete="off" v-model="email">
					</div>
					<div class="control">
						<input type="password" class="input" placeholder="Type Your Password" autocomplete="off" v-model="password">
					</div>
					<div class="control">
						<div class="control-col">
							<input type="checkbox" class="input-check" value="remember" v-model="remember" id="remember">
							<div class="checkmark">
								<label for="remember" class="checkmark-box"></label>
								<label for="remember">Keep me logged in</label>
							</div>
						</div>
						<div class="control-col">
							<router-link to="/edit/password" class="link-forgot">Forgot Password ?</router-link>
						</div>
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
	import HTTP from "@/http/HTTP";

	export default {
		name: 'Login',
		components: {
			Baloon,
			Navbar,
			Alert
		},
		data() {
			return {
				email: '',
				password: '',
				remember: ''
			}
		},
		computed: {
			flash() {
				return this.$session.has('message')
			}
		},
		methods: {
			async login() {
				const fd = new FormData();
				fd.append("email", this.email);
				fd.append("password", this.password);
				const result = await HTTP.connect('POST', '/login', fd, '')
				this.$session.start();

				this.$session.set('type', result.type);
				this.$session.set('message', result.message);

				if(result.type != 'success') 
					window.location.reload();
				else {
					if(this.remember != '') {
						this.$cookies.set('token', result.token, '2d');
						console.log('ok')
					}
					this.$session.set('token', result.token);
					this.$router.push('/')
				}	
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

	.control:nth-child(3) {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.control:nth-child(3) > .control-col {
		width: 48%;
		position: relative;
	}
	
	.control-col:last-child {
		text-align: right;
	}

	a.link-forgot {
		text-decoration: none;
		color: #ED3E3E;
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

	input[type=checkbox] {
		display: none;
	}

	.checkmark {
		height: 1rem;
		display: flex;
		align-items: center;
	}

	.checkmark > label {
		font-size: .8rem;
		margin-left: .5rem;
	}

	label.checkmark-box {
		height: 1rem;
		width: 1rem;
		display: inline-block;
		border: 1.9px solid #F9A826;
		background-color: white;
		position: relative;
	}

	input.input-check:checked + .checkmark > label.checkmark-box::after {
		content: '';
		display: block;
	}

	input.input-check:checked + .checkmark > label.checkmark-box {
		background-color:#F9A826;
	}

	label.checkmark-box::after {
		width: 3px;
		height: 8px;
		position: absolute;
		top: 1px;
		left: 5px;
		transform: rotateZ(45deg);
		border: solid white;
		border-width: 0 3px 3px 0;
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
		.control:nth-child(3) > .control-col:first-child {
			margin-bottom: .5rem;
		}
		.control:nth-child(3) > .control-col {
			width: 100%;
		}
		.control-col {
			text-align: left !important;
		}
		a.link-forgot {
			font-size: .8rem;
			margin-left: .5rem;
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

	@media screen and (min-width: 1024px)	and (max-width: 1300px) {
		section > .container > .col:first-child {
			width: 50%;
		}
		section > .container > .col:last-child {
			width: 45%;
		}
	
	}

</style>
