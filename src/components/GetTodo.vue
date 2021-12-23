
<template>
  <div id="get-todo" class="container">
    <div class="todo-input">
      <input
        class="form-control"
        :value="newTodo"
        @change="getTodo"
        placeholder="I need to..."
      />
      <button class="btn" @click="addTodo">Add Todo</button>
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
    },
  },
  components: {
    CurrentTodos
  },
  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    },
  },
};
</script>

<style scoped>

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
