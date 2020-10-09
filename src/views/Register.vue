<template>
	<section>
		<Navbar :Profile="true"/>
		<Alert v-if="flash" />
		<div class="container">
			<div class="col">
				<Baloon class="baloon-1" />
				<h6>
					Let’s Register for customize 
					your website.
				</h6>
				<img src="../assets/img/proud.png" class="img" alt="Proud">
				<Baloon class="baloon-2" />
			</div>
			<div class="col">
				<form method="POST" enctype="multipart/form-data" @submit.prevent="register">
					<div class="control">
						<div class="form-col">
							<input type="text" class="input" placeholder="First Name" name="first_nama" autocomplete="off" v-model="first_name">	
						</div>
						<div class="form-col">
							<input type="text" class="input" placeholder="Last Name" name="last_name" autocomplete="off" v-model="last_name">
						</div>
					</div>
					<div class="control">
						<input type="email" class="input" placeholder="Email" name="Email" autocomplete="off" v-model="email">
					</div>
					<div class="control">
						<input type="password" class="input" placeholder="Password" name="password" autocomplete="off" v-model="password">
					</div>
					<div class="control">
						<input type="password" class="input" placeholder="Confirmation Password" name="password2" autocomplete="off" v-model="passwordConfirm">
					</div>
					<div class="control">
						<label for="upload" class="upload-btn">
							Your Photo
						</label>
						<input type="file" class="upload" name="photo" id="upload" ref="photo" @change="changeImg">
					</div>
					<div class="control">
						<button type="submit" class="btn">Register</button>
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
		name: 'Register',
		components: {
			Baloon,
			Navbar,
			Alert
		},
		data: function() {
			return {
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				passwordConfirm: '',
				photo: '',
				flash: this.$session.has('message')
			}
		},
		methods: {
			changeImg() {
				this.photo = this.$refs.photo.files[0];
			},
			async register() {
				const formData = new FormData();
				formData.append('first_name', this.first_name);
				formData.append('last_name', this.last_name);
				formData.append('email', this.email);
				formData.append('password', this.password);
				formData.append('passwordConfirm', this.passwordConfirm);
				formData.append('photo', this.photo);
				console.log(formData)
				const result = await HTTP.connect('POST', '/register', formData, this.$session.get('token'));
				console.log(result);
				
				this.$session.start();
				this.$session.set('type', result.type);
				this.$session.set('message', result.message);
				window.location.reload();	
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
		width: 45%;
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

	.control:last-child {
		margin-bottom: 0;
	}

	.control:first-child {
		display: flex;
		justify-content: space-between;
	}

	.control:first-child .form-col {
		width: 48%;
	}

	label.upload-btn {
		display: inline-block;
		background-color: #E9EFF6;
    box-sizing: border-box;
    padding-left: 1rem;
    line-height: 3rem;
    border-radius: 15px;
    width: 100%;
    font-size: .9rem;	
		color: #A1A5AA;
		cursor: pointer;
	}

	input.upload {
		display: none;
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
		.control:first-child {
			flex-direction: column;
		}
		.control:first-child > .form-col {
			width: 100%;
		}
		.control:first-child > .form-col:first-child {
			margin-bottom: 1.3rem;
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
