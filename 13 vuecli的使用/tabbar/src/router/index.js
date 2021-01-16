import Vue from 'vue'
import VueRouter from 'vue-router'

const  Home =() =>import('../components/views/home/Home')
const  Category =() =>import('../components/views/category/Category')
const  Profile =() =>import('../components/views/profile/Profile')
const  Shopcart =() =>import('../components/views/shopcart/Shopcart')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect :'/home'
  },
  {
    path: '/home',
    component : Home
  },
  {
    path: '/category',
    component : Category
  },
  {
    path: '/Profile',
    component : Profile
  },
  {
    path: '/shopcart',
    component : Shopcart
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
