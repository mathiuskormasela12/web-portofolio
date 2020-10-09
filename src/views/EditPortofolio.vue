<template>
	<section>
		<Navbar :Portofolio="true"/>
		<Alert v-if="flash"/>
		<div class="container">
			<div class="col">
				<Baloon class="baloon-1" />
				<h6>
					Let’s edit your portofolio here.
				</h6>
				<img src="../assets/img/remote.png" class="img" alt="Proud">
				<Baloon class="baloon-2" />
			</div>
			<div class="col">
				<form method="POST" enctype="multipart/form-data" @submit.prevent="editPortofolio">
					<div class="control">
						<input type="text" class="input" placeholder="Type Your Portofolio Name" v-model="title" autocomplete="off">
					</div>
					<div class="control">
						<label for="upload" class="upload-btn">
							Your Photo
						</label>
						<input type="file" class="upload" ref="photo" id="upload" @change="upload">
					</div>
					<div class="control">
						<textarea type="text" class="input" placeholder="Type Your Portofolio Name" v-model="description" autocomplete="off"></textarea>
					</div>
					<div class="control">
						<button type="submit" class="btn">submit</button>
						<button type="button" class="btn" @click="deletePortofolio">Delete</button>
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
		name: 'EditPortofolio',
		components: {
			Baloon,
			Navbar,
			Alert
		},
		mounted: function() {
			this.getPortofolio();
		},
		data: function() {
			return {
				id: this.$route.params.id,
				title: '',
				description: '',
				photo: '',
				flash: this.$session.has('message')
			}
		},
		methods: {	
			upload: function() {
				this.photo = this.$refs.photo.files[0]
			},
			getPortofolio: async function() {
				const res = await HTTP.connect('get', '/portofolio/' + this.id, null, this.$session.get('token'));
				this.title = res.result.title;
				this.description = res.result.description;
			},
			deletePortofolio: async function() {
				const res = await HTTP.connect('delete', `/portofolio/${this.id}`, null, this.$session.get('token'));
				this.$session.set('type', res.type);
				this.$session.set('message', res.message);

				if(res.type != 'success')
					window.location.reload();
				else
					this.$router.push('/');
			},
			editPortofolio: async function() {
				const formData = new FormData();

				formData.append('title', this.title);
				formData.append('description', this.description);
				formData.append('id', this.id);
				formData.append('photo', this.photo);

				const res = await HTTP.connect('put', '/portofolio', formData, this.$session.get('token'));
				
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

	textarea.input {
		border: none;
		padding: .9rem 1rem;
		resize: none;
		outline: none;
		background-color: #E9EFF6;
		box-sizing: border-box;
		padding-left: 1rem;
		height: 9rem;
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
		width: 43%;
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
