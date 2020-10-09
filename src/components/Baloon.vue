<template>
	<div class="baloon">
		<div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'Baloon'
	}

</script>

<style scoped>

	div.baloon {
		display: flex;
		height: 3.2rem;
		width: 3.2rem;
		justify-content: space-between;
	}

	div.baloon > div {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
	}
	
	div.baloon > div > div {
		width: .6rem;
		height: .6rem;
		background-color: #F9A826;
		border-radius: 50%;
	}

</style>
