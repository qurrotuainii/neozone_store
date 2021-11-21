import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailProduk from '../views/DetailProduk.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Succes from '../views/Succes.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detailproduk/:id',
    props:true,
    name: 'DetailProduk',
    component: DetailProduk
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  },
  {
    path: '/succes',
    name: 'succes',
    component: Succes
  },
]

const router = new VueRouter({
  routes
})

export default router
