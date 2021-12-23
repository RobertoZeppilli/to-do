import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: '',
    newUserName: ''
  },
  mutations: {
    INITIALIZE_STORE(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
    GET_TODO(state, todo) {
      state.newTodo = todo
    },
    GET_USERNAME(state, name) {
      state.newUserName = name
    },
    ADD_TODO(state) {
      let currentTodo = {
        username: state.newUserName || '',
        body: state.newTodo,
        completed: false
      }
      state.todos.push(currentTodo)
    },
    EDIT_TODO(state, todo) {
      let todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.body
    },
    REMOVE_TODO(state, todo) {
      let todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo) {
      todo.completed = !todo.completed
    },
    CLEAR_TODO(state) {
      state.newTodo = ''
    },
    CLEAR_USERNAME(state) {
      state.newUserName = ''
    }
  },
  actions: {
    getTodo({ commit }, todo) {
      commit('GET_TODO', todo)
    },
    getUsername({ commit }, name) {
      commit('GET_USERNAME', name)
    },
    addTodo({ commit }) {
      commit('ADD_TODO')
    },
    editTodo({ commit }, todo) {
      commit('EDIT_TODO', todo)
    },
    removeTodo({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },
    completeTodo({ commit }, todo) {
      commit('COMPLETE_TODO', todo)
    },
    clearTodo({ commit }) {
      commit('CLEAR_TODO')
    },
    clearUsername({ commit }) {
      commit('CLEAR_USERNAME')
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => todo.username == state.newUserName),
    newUserName: state => state.newUserName,
    completedTodos: state => state.todos.filter((todo) => {
      if (todo.completed && todo.username == state.newUserName) {
        return todo
      }
    })
  }
})


