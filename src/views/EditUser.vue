<template>
	<section>
		<Navbar :Profile="true"/>
		<Alert v-if="flash"/>
		<div class="container">
			<div class="col">
				<Baloon class="baloon-1" />
				<h6>
					Let’s change your account
					profile.
				</h6>
				<img src="../assets/img/proud.png" class="img" alt="Proud">
				<Baloon class="baloon-2" />
			</div>
			<div class="col">
				<form method="POST" enctype="multipart/form-data" @submit.prevent="editProfile">
					<div class="control">
						<div class="form-col">
							<input type="text" class="input" placeholder="First Name" v-model="first_name" autocomplete="off">	
						</div>
						<div class="form-col">
							<input type="text" class="input" placeholder="Last Name" v-model="last_name" autocomplete="off">
						</div>
					</div>
					<div class="control">
						<input type="email" class="input" placeholder="Email" v-model="email" autocomplete="off">
					</div>
					<div class="control">
						<input type="password" class="input" placeholder="Password" v-model="password" autocomplete="off">
					</div>
					<div class="control">
						<input type="password" class="input" placeholder="Confirmation Password" v-model="confirmPassword" autocomplete="off">
					</div>
					<div class="control">
						<label for="upload" class="upload-btn">
							Your Photo
						</label>
						<input type="file" class="upload" ref="photo" id="upload" @change="upload">
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

	import HTTP from "@/http/HTTP";
	import Baloon from "@/components/Baloon.vue";
	import Alert from "@/components/Alert.vue";
	import Navbar from "@/components/Navbar.vue";

	export default {
		name: 'EditUser',
		components: {
			Baloon,
			Navbar,
			Alert
		},
		data: function() {
			return {	
				flash: this.$session.has('message'),
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				confirmPassword: '',
				photo: ''
			}
		},
		mounted: function() {
			this.getProfile();
		},
		methods: {	
			upload: function() {
				this.photo = this.$refs.photo.files[0];
			},
			getProfile: async function() {	
				const res = await HTTP.connect('get', '/profile', null, this.$session.get('token'));
				this.first_name = res.result.full_name.split(' ')[0];
				this.last_name = res.result.full_name.split(' ')[1];
				this.email = res.result.email;
				this.password = res.result.password;
				this.confirmPassword = res.result.password;
			},
			editProfile: async function() {
				const formData = new FormData();
				formData.append('first_name', this.first_name);
				formData.append('last_name', this.last_name);
				formData.append('email', this.email);
				formData.append('password', this.password);
				formData.append('passwordConfirm', this.confirmPassword);
				formData.append('photo', this.photo);

				const res= await HTTP.connect('put', '/user', formData, this.$session.get('token'));
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
