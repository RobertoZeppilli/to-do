import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    usernames: [],
    newTodo: '',
    newUserName: '',
    nameSelected: '',
    selected: '',
    isEditing: false,
    isSelecting: false,
    isSearching: false,
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
      state.usernames.push(state.newUserName)
    },
    ADD_TODO(state) {
      let currentTodo = {
        username: state.newUserName,
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
    CLEAR_SELECTED(state) {
      state.selected = ''
    },
    CLEAR_USERNAME(state) {
      state.newUserName = ''
    },
    GET_NAME_SELECTED(state, name) {
      state.nameSelected = name
    },
    IS_EDITING(state) {
      state.isEditing = true
    },
    END_EDITING(state) {
      state.isEditing = false
    },
    GET_SELECTED(state, selected) {
      state.selected = selected
    },
    IS_SELECTING(state) {
      state.isSelecting = true
      state.isSearching = false
    },
    IS_SEARCHING(state) {
      state.isSearching = true
      state.isSelecting = false
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
    clearSelected({ commit }) {
      commit('CLEAR_SELECTED')
    },
    clearUsername({ commit }) {
      commit('CLEAR_USERNAME')
    },
    getNameSelected({ commit }, name) {
      commit('GET_NAME_SELECTED', name)
    },
    isEditing({ commit }) {
      commit('IS_EDITING')
    },
    endEdit({ commit }) {
      commit('END_EDITING')
    },
    getSelected({ commit }, selected) {
      commit('GET_SELECTED', selected)
    },
    isSelecting({ commit }) {
      commit('IS_SELECTING')
    },
    isSearching({ commit }) {
      commit('IS_SEARCHING')
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
    }),
    allCompleted: state => state.todos.filter(todo => {
      if (state.isSelecting) {
        if (state.nameSelected == '') {
          return todo.completed
        } else {
          return todo.completed && todo.username == state.nameSelected
        }
      } else if (state.isSearching) {
        return todo.completed && (Object.values(todo).indexOf(state.selected) != -1)
      }
    }),
    usernames: state => Array.from(new Set(state.usernames)),
    isEditing: state => state.isEditing,
    selected: state => state.selected
  }
})


