import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CompletedTodos from '../views/CompletedTodos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/completed',
    name: 'Completed',
    component: CompletedTodos
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
