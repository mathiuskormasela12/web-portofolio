<template>
	<section>
		<div class="container" :class="displays" id="alert-container">
			<div class="alert success">
				<div class="col">
					<p v-text="message"></p>
				</div>
				<div class="col" v-on:click="show">
					<i class="fas fa-times"></i>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	
	export default {
		name: 'Alert',
		data() {
			return {
				displays: this.$session.has('message'),
				type: this.$session.get('type'),
				message: this.$session.get('message')
			}
		},	
		methods: {
			show() {
				document.querySelector('#alert-container').remove();
				this.$session.remove('type');
				this.$session.remove('message');
			}
		}
	}

</script>

<style scoped>

	section {
		position: absolute;
	}

	.container {
		position: fixed;
		left:0;
		right: 0;		
		z-index: 2;
	}

	.block {
		display: block !important;
	}	

	.none {
		display: none !important;
	}

	.alert {
		position: absolute;
		right: 0;
		top: 5.5rem;
		padding: .8rem;
		box-sizing: border-box;
		display: flex;
		width: 17rem;
		justify-content: space-between;
	}

	p {
		font-size: .9rem;
	}

	.col:first-child {
		width: 96%;
	}

	.col:last-child {
		width: 3%;
		cursor: pointer;
		font-size: .8rem;
	}

	.success {
		background-color: #F6FFED;
		border: 1px solid #B7EB8F;
	}

	.warning {
		background-color: #FFFBE6;
		border: 1px solid #FFE58F;
	}

	.danger {
		background-color: #FFF2F0;
		border: 1px solid #FFCCC7;
	}

	@media screen and (max-width: 240px) {
		.alert {
			width: 12rem;
		}
		p {
			font-size: .6rem;
		}
	}

</style>
