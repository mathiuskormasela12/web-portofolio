<template>
	<div>
		<Navbar :Home="true"/>
		<Alert v-if="flash"/>
		<Home :title="title" :subtitle="subtitle"/>
		<About :photo="user_photo" :text="about"/>
		<Skills :skills="skills"/>
		<Portofolio :portofolios="portofolios" :getPortofolios="getPortofolios" :getSeveralPortofolios="getSeveralPortofolios"/>
		<Footer />
	</div>
</template>

<script>

	import Alert from "@/components/Alert.vue";
	import HTTP from "@/http/HTTP.js";
	import Navbar from "@/components/Navbar.vue"
	import Home from "@/components/main/Home.vue";
	import About from "@/components/main/About.vue";
	import Skills from "@/components/main/Skills.vue";
	import Portofolio from "@/components/main/Portofolio.vue";
	import Footer from "@/components/Footer.vue";

	export default {
		name: 'Main',
		components: {
			Alert,
			Navbar,
			Home,
			About,
			Skills,
			Portofolio,
			Footer
		},
		data() {
			return {
				title: '',
				subtitle: '',
				user_photo: '',
				about: '',
				skills: [],
				portofolios: []
			}
		},
		computed: { 
			flash() {
				return this.$session.has('message')
			}	
		},
		mounted() {
			this.getUserPhoto();
			this.getHeader();
			this.getAbout();
			this.getSkills();
			this.getSeveralPortofolios();
		},	
		methods: {
			async getUserPhoto() {
				const result = await HTTP.connect('get', '/user', null, null);
				this.user_photo = result.result.photo;
			},
			async getAbout() {
				const about = await HTTP.connect('get', '/about', null, null);
				this.about = about.result.text;
			},
			async getSkills() {
				const skills = await HTTP.connect('get', '/skill', null, null)
				this.skills = skills.result;
			},
			async getSeveralPortofolios() {
				const portofolios = await HTTP.connect('get', '/several-portofolio', null, null);
				this.portofolios = portofolios.result;
			},
			async getPortofolios() {
				const portofolios = await HTTP.connect('get', '/portofolio', null, null);
				this.portofolios = portofolios.result;
			},			
			async getHeader() {
				const header = await HTTP.connect('get', '/header', null, null);
				this.title = header.result.title;
				this.subtitle = header.result.subtitle;
			}
		}
	}
</script>
