
<template>
  <div id="get-todo" class="container">
    <h1>{{ newUserName }}'s List</h1>
    <div class="todo-input">
      <input
        class="form-control"
        :value="newTodo"
        @change="getTodo"
        placeholder="I need to..."
      />
      <button class="btn" @click="addTodo">{{ isEditing ? 'Edit' : 'Add' }}</button>
    </div>
    <CurrentTodos></CurrentTodos>
  </div>
</template>


<script>
import CurrentTodos from "../components/CurrentTodos.vue";

export default {
  methods: {
    getTodo(e) {
      this.$store.dispatch("getTodo", e.target.value);
    },
    addTodo() {
      this.$store.dispatch("addTodo");
      this.$store.dispatch("clearTodo");
      this.$store.dispatch("endEdit")
    },
  },
  components: {
    CurrentTodos,
  },
  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    },
    newUserName() {
      return this.$store.getters.newUserName;
    },
    isEditing() {
      return this.$store.getters.isEditing
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1.55rem;
}
.container {
  max-width: 500px;
  margin: 50px auto;
}
.todo-input {
  width: 100%;
}
.todo-input .form-control {
  width: 70%;
}
.todo-input .btn {
  width: 30%;
}
.todo-input .btn,
.todo-input .form-control {
  padding: 1.55rem;
  outline: none;
  border: none;
}
</style>
