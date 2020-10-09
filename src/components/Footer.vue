<template>
	<footer id="contact">
		<div class="container">
			<div class="footer-col">
				<p>
					Copyright 2020 Developed by Mathius
				</p>
			</div>
			<div class="footer-col">
				<span class="social-media">
					<i class="fab fa-instagram"></i>
					<span class="ig">matthewkormasela</span>
				</span>
				<span class="social-media">
					<i class="fab fa-whatsapp"></i>
					<span class="wa">0822-1159-8743</span>
				</span>
			</div>
		</div>	
	</footer>
</template>

<script>

	export default {
		name: 'Footer'
	}

</script>

<style scoped>

	footer {
		height: 4rem;
		background-color: white;
		font-size: .9rem;
	}

	.container {
		height: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.footer-col {
		width: 50%;
	}

	.footer-col:last-child {
		text-align: right;
	}

	.wa, .ig {
		margin-left: .5rem;
	}

	.social-media {
		display: inline-block;
		margin-right: 1rem;
	}

	@media screen and (max-width: 600px) {
		.footer-col {
			width: 100%;
			text-align: center;
		}
		.footer-col:last-child {
			display: none;
		}
		.social-media {
			margin:0;
		}
	}
	
</style>
