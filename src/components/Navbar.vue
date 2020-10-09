<template>
	<nav class="navbar">
		<div class="container">
			<a href="#" class="nav-brand">Mathius Kormasela</a>	
			<ul class="nav-list" :class="nav + ' ' + navHeight">
				<li class="nav-items" :class="{active: Home}">
					<router-link to="/#home" class="nav-link home">
						Home
					</router-link>
				</li>
				<li class="nav-items">
					<a href="/#about" class="nav-link about">
						About
					</a>
				</li>
				<li class="nav-items" :class="{active: Profile}" v-if="logged">
					<a href="#" class="nav-link profile" @click="showDropdown">
						<span>Profile</span>
						<span><i class="fas fa-chevron-down"></i></span>
					</a>
					<div class="dropdown" :class="dropdown">
						<router-link to="/edit/user" class="dropdown-items">Edit Profile</router-link>
						<router-link to="/register" class="dropdown-items">Register</router-link>
						<router-link to="/edit/header" class="dropdown-items">Edit Header</router-link>
						<router-link to="/edit/about" class="dropdown-items">Edit About</router-link>
						<router-link to="/add/skill" class="dropdown-items">Add Skill</router-link>
						<router-link to="/add/portofolio" class="dropdown-items">Add portofolio</router-link>
						<a href="#" class="dropdown-items" @click.prevent="logout">Logout</a>					
					</div>
				</li>
				<li class="nav-items" :class="{active: Portofolio}">
					<a href="/#portofolio" class="nav-link portofolio">
						Portofolio
					</a>
				</li>
				<li class="nav-items">
					<a href="/#contact" class="nav-link contact">
						Contact
					</a>
				</li>
			</ul>
			<div class="burger" @click="showNav">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</nav>
</template>

<script>
	
	export default {
		name: 'Navbar',
		props: {
			Home: Boolean,
			Profile: Boolean,
			Portofolio: Boolean
		},
		data() {
			return {
				dropdown: '',
				nav: '',
				navHeight: ''
			}
		},
		computed: {
			logged() {
				this.$session.start();
				return this.$session.get('token')
			}
		},
		methods: {
			showDropdown() {
				if(this.dropdown == '' && this.navHeight == '') {
					this.dropdown = 'show';		
					this.navHeight = 'nav-height';
				} else {
					this.dropdown = '';
					this.navHeight = '';
				}
			},
			showNav() {
				if(this.nav == '')
					this.nav = 'show-nav';
				else {
					this.nav = '';
					this.dropdown = '';
					this.navHeight = '';
				}
			},
			logout() {
				this.$session.destroy();
				this.$cookies.remove('token');
				this.$router.push('/login');
			}
		}
	}

</script>

<style scoped>

	nav.navbar {
		position: absolute;
		z-index: 3;
		top: 0;
		width: 100%;
		height: 4.5rem;
		background-color: white;
	}

	nav.navbar > .container {
		display: flex;
		position: relative;
	}

	a.nav-brand {
		line-height: 4.5rem;
		text-decoration: none;
		color: #F9A826;
		font-size: 1.2rem;
		text-transform: capitalize;
		width: 15%;
	}

	ul.nav-list {
		width: 85%;
		display: flex;
		justify-content: flex-end;
		list-style: none;
		background-color: white;
	}

	li.nav-items {
		margin-right: 1.5rem;
		line-height: 4.5rem;
		position: relative;
	}

	li.nav-items:last-child {
		margin-right: 0;
	}

	a.nav-link {
		color: #887D7D;
		text-decoration: none;
		position: relative;
	}

	li.nav-items > a.profile span:first-child {
		margin-right: .4rem;
	}

	li.nav-items > a.profile span:last-child  {
		font-size: .7rem;
	}

	li.nav-items > a.nav-link:hover {
		color: #F9A826;
	}

	li.nav-items.active > a.nav-link {
		color: #F9A826;
	}

	li.nav-items.active > a.home::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: .75rem;
		bottom: -.7rem;
	}

	li.nav-items.active > a.about::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: .8rem;
		bottom: -.7rem;
	}

	li.nav-items.active > a.profile::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: 1.2rem;
		bottom: -.7rem;
	}


	li.nav-items.active > a.portofolio::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: 1.68rem;
		bottom: -.7rem;
	}

	li.nav-items.active > a.contact::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: 1.29rem;
		bottom: -.7rem;
	}

	li.nav-items > a.home:hover::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: .75rem;
		bottom: -.7rem;
	}

	li.nav-items > a.about:hover::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: .8rem;
		bottom: -.7rem;
	}

	li.nav-items > a.profile:hover::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: 1.2rem;
		bottom: -.7rem;
	}


	li.nav-items > a.portofolio:hover::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: 1.68rem;
		bottom: -.7rem;
	}

	li.nav-items > a.contact:hover::after {
		content: '';
		display: block;
		width: 1.5rem;
		height: .1rem;
		position: absolute;
		background-color: #F9A826;
		left: 1.29rem;
		bottom: -.7rem;
	}
	
	li.nav-items:hover > a.profile + .dropdown {
		display: block;
	}

	.dropdown {
		display: none;
		position: absolute;
		z-index: 3;
		top: 3.5rem;
		background-color: white;
		box-shadow: 0 0 7px -5px black;
		width: 12rem;
		border-top: 2px solid #F9A826;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		padding: 1rem 0;
	}

	.dropdown > a.dropdown-items {
		display: block;
		font-size: .9rem;
		text-transform: capitalize;
		width: 100%;
		line-height: normal;
		color: #887D7D;
		text-decoration: none;
		box-sizing: border-box;
		padding-left:1rem;
		margin-bottom: 1rem;
	}

	.dropdown > a.dropdown-items:last-child {
		margin-bottom: 0;
	}

	.dropdown > a.dropdown-items:hover {
		color: #F9A826;
	}

	.burger {
		position: absolute;
		right: 0;
		top: 1.5rem;
		cursor: pointer;
		display: none;
	}

	.burger > span {
		display: block;
		width: 20px;
		height: 2px;
		background-color: #F9A826;
		margin: 5px 0;
	}

	@media screen and (max-width: 600px) {
		.burger {
			display: block;
		}
		nav.navbar > .container {
			display: block;
			overflow: hidden;
		}
		nav.navbar > .container > ul.nav-list {
			display: block;
		}
		a::after {
			display: none !important;
		}
		.show-nav {
			height: 10.5rem !important;	
			/*visibility: visible !important*/;
		}
		.nav-height {
			height: 22.5rem !important;
		}
		ul.nav-list {
			/*visibility: hidden;*/
			width: 100%;
			height: 0;	
			overflow: hidden;
			transition: all .5s;
		}
		li.nav-items:last-child {
			display: none !important;
		}
		li.nav-items {	
			line-height: 2.5rem;
			width: 100%;
			box-sizing: border-box;
		}
		li.nav-items > a.nav-link {
			width: 100%;
			position: relative;
			display: inline-block;
		}
		li.nav-items.active a.nav-link {
			color: #887D7D;
		}
		li.nav-items > a.nav-link:hover + .dropdown {
			display: none;
		}
		.show {
			height: 10rem !important;
		}
		li.nav-items > a.profile span:first-child {
			margin-right:0;
		}
		li.nav-items > a.profile span:last-child  {
			font-size: .7rem;
			position: absolute;
			right: 0;
		}
		.dropdown {
			transition: all .5s;
			display: block !important;
			height: 0;
			overflow: hidden;
			padding: 0;
			position: relative;
			top: 0;
			box-shadow: none;
			border: none;
			border-left: 2px solid #F9A826;
			border-radius: 0;
		}
		.dropdown > a.dropdown-items {
			margin: 0;
			line-height: 2rem;
		}
	}

	@media screen and (min-width: 600px) and (max-width: 920px) {
		.burger {
			display: block;
		}
		nav.navbar > .container {
			display: block;
		}
		nav.navbar > .container > ul.nav-list {
			display: block;
		}
		a::after {
			display: none !important;
		}
		.show-nav {
			height: 12.5rem !important;	
			visibility: visible !important;
		}
		.nav-height {
			height: 22.5rem !important;
		}
		ul.nav-list {
			visibility: hidden;
			width: 100%;
			height: 0;	
			overflow: hidden;
			transition: all .5s;
			padding: 1rem 0;
		}
		li.nav-items {	
			line-height: 2.5rem;
			width: 100%;
			box-sizing: border-box;
		}
		li.nav-items > a.nav-link {
			width: 100%;
			position: relative;
			display: inline-block;
		}
		li.nav-items.active a.nav-link {
			color: #887D7D;
		}
		li.nav-items > a.nav-link:hover + .dropdown {
			display: none;
		}
		.show {
			height: 10rem !important;
		}
		li.nav-items > a.profile span:first-child {
			margin-right:0;
		}
		li.nav-items > a.profile span:last-child  {
			font-size: .7rem;
			position: absolute;
			right: 0;
		}
		.dropdown {
			transition: all .5s;
			display: block !important;
			height: 0;
			overflow: hidden;
			padding: 0;
			position: relative;
			top: 0;
			box-shadow: none;
			border: none;
			border-left: 2px solid #F9A826;
			border-radius: 0;
		}
		.dropdown > a.dropdown-items {
			margin: 0;
			line-height: 2rem;
		}
	}
	
	@media screen and (min-width: 920px) and (max-width: 1024px) {
		a.nav-brand {
			width: 30%;
		}	
		ul.nav-list {
			width: 70%;
		}	
	}

	@media screen and (min-width: 1024px) and (max-width: 1300px) {
		a.nav-brand {
			width: 40%;
		}	
		ul.nav-list {
			width: 60%;
		}	
	}

	@media screen and (min-width: 1300px) and (max-width: 1500px) {
		a.nav-brand {
			width: 40%;
		}	
		ul.nav-list {
			width: 60%;
		}	
	}

</style>
