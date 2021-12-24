import Vue from 'vue'
import VueRouter from 'vue-router'

import TodoList from '../views/TodoList.vue'
import CompletedTodos from '../views/CompletedTodos.vue'
import AllCompletedTodos from '../views/AllCompletedTodos.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/completed',
    name: 'Completed',
    component: CompletedTodos
  },
  {
    path: '/todolist',
    name: 'Todolist',
    component: TodoList
  },
  {
    path: '/all-completed',
    name: 'All-Completed',
    component: AllCompletedTodos
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
