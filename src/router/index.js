import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ '@/view/Home.vue'),
	},
	{
		path: '/List',
		name: 'List',
		component: () => import(/* webpackChunkName: "Home" */ '@/view/List.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	routes,
})

export default router