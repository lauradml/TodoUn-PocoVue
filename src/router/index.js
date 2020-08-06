import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/peticionesAjax',
    name: 'PeticionesAjax',
    component: () => import(/* webpackChunkName: "peticionesAjax" */ '../views/PeticionesAjax.vue')
  },
  {
    path: '/Props',
    name: 'props',
    component: () => import(/* webpackChunkName: "Props" */ '../views/Props.vue')
  },
  {
    path: '/MapState',
    name: 'mapState',
    component: () => import(/* webpackChunkName: "MapState" */ '../views/MapState.vue')
  },
  {
    path: '/Getters',
    name: 'getters',
    component: () => import(/* webpackChunkName: "Getters" */ '../views/Getters.vue')
  },
  {
    path: '/Mutation',
    name: 'mutation',
    component: () => import(/* webpackChunkName: "Mutation" */ '../views/Mutation.vue')
  },
  {
    path: '/Action',
    name: 'action',
    component: () => import(/* webpackChunkName: "Action" */ '../views/Action.vue')
  },
  {
    path: '/DirectivesHooks',
    name: 'directivesHooks',
    component: () => import(/* webpackChunkName: "DirectivesHooks" */ '../views/DirectivesHooks.vue')
  },
  {
    path: '/Firebase',
    name: 'firebase',
    component: () => import(/* webpackChunkName: "firebase" */ '../views/Firebase.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
