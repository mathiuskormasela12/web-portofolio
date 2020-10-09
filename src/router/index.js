import Vue from 'vue'
import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueSession)
Vue.use(VueCookies)

const session = Vue.prototype.$session;

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => {
			if(!session.get('token') && Vue.$cookies.isKey('token')) {
				session.set('token', Vue.$cookies.get('token'));
			}
			setTimeout(() => {
				session.remove('type');
				session.remove('message');
			}, 500);
			return import('@/views/Main.vue');
		}
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => {
			session.start();
			if(session.get('token')) 
				return import('@/views/Register.vue');
			else if(Vue.$cookies.isKey('token')) {
				session.set('token', Vue.$cookies.get('token'));
				router.push('/register')
			} else
				router.push('/login');
		}
  },
	{
		path: '/login',
		name: 'Login',
		component: () => {
			if(!session.get('token')) {
				setTimeout(() => {
					session.remove('type');
					session.remove('message')
				}, 500)
				return import('@/views/Login.vue');
			} else if(Vue.$cookies.isKey('token')) {
				session.set('token', Vue.$cookies.get('token'));
				console.log(Vue.$cookies.get('token'))
				router.push('/');
			} else {
				router.push('/')
			}
		}
	},
	{
		path: '/edit/password',
		name: 'EditPassword',
		component: () => {
			if(!session.get('token')) {
				setTimeout(() => {
					session.remove('type');
					session.remove('message')
				}, 500)
				return import('@/views/EditPassword.vue');
			} else if(Vue.$cookies.isKey('token')) {
				session.set('token', Vue.$cookies.get('token'));
				console.log(Vue.$cookies.get('token'))
				router.push('/');
			} else 
				router.push('/')
		}
	},
	{
		path: '/edit/user',
		name: 'EditUser',
		component: () => {
			if(session.get('token')) {
				setTimeout(() => {
					session.remove('type');
					session.remove('message')
				}, 500)
				return import('@/views/EditUser.vue');
			} else if(Vue.$cookies.isKey('token')) {
					session.set('token', Vue.$cookies.get('token'));
					router.push('/edit/user');
			} else {
					router.push('/login')
			}
		}
	},
	{
		path: '/add/skill',
		name: 'AddSkill',
		component: () => {
			if(session.get('token')) {
				setTimeout(() => {
					session.remove('type');
					session.remove('message')
				}, 500)
				return import('@/views/AddSkill.vue');
			} else if(Vue.$cookies.isKey('token')) {
					session.set('token', Vue.$cookies.get('token'));
					router.push('/add/skill');
			} else {
					router.push('/login')
			}
		}
	},
	{
		path: '/edit/skill/:id',
		name: 'EditSkill',
		component: () => {
			if(session.get('token')) {
				setTimeout(() => {
					session.remove('type');
					session.remove('message')
				}, 500)
				return import('@/views/EditSkill.vue');
			} else {
				router.push('/login')
			}
		}
	},
	{
		path: '/edit/header',
		name: 'EditHeader',
		component: () => {
			if(session.get('token')) {
				setTimeout(() => {
					session.remove('type');
					session.remove('message')
				}, 500)
				return import('@/views/EditHeader.vue');
			} else if(Vue.$cookies.isKey('token')) {
					session.set('token', Vue.$cookies.get('token'));
					router.push('/edit/header');
			} else {
					router.push('/login')
			}
		}
	},
	{
		path: '/edit/about',
		name: 'EditAbout',
		component: () => {
			if(session.get('token')) {
				setTimeout(() => {
					session.remove('type');
					session.remove('message')
				}, 500)
				return import('@/views/EditAbout.vue');
			} else if(Vue.$cookies.isKey('token')) {
					session.set('token', Vue.$cookies.get('token'));
					router.push('/edit/about');
			} else {
					router.push('/login')
			}
		}
	},
	{
		path: '/add/portofolio',
		name: 'AddPortofolio',
		component: () => {
			if(session.get('token')) {
				setTimeout(() => {
					session.remove('type');
					session.remove('message')
				}, 500)
				return import('@/views/AddPortofolio.vue');
			} else if(Vue.$cookies.isKey('token')) {
					session.set('token', Vue.$cookies.get('token'));
					router.push('/add/portofolio');
			} else {
					router.push('/login')
			}
		}
	},
	{
		path: '/edit/portofolio/:id',
		name: 'EditPortofolio',
		component: () => {
			if(session.get('token')) {
				setTimeout(() => {
					session.remove('type');
					session.remove('message')
				}, 500)
				return import('@/views/EditPortofolio.vue');
			} else {
				router.push('/login')
			}
		}
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
