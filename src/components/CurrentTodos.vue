<template>
  <div id="current-todos" class="container">
    <div v-for="todo in todos" :key="todo.id" class="current-todo">
      <span :class="[{ complete: todo.completed }, 'todo-body']">
        {{ todo.body }}
      </span>
      <div class="actions">
        <button type="button" @click="edit(todo)" class="btn">Edit</button>
        <button type="button" @click="complete(todo)" class="btn">
          {{ todo.completed ? "Undo" : "Completed" }}
        </button>
        <button type="button" @click="remove(todo)" class="btn">Remove</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    edit(todo) {
      this.$store.dispatch("editTodo", todo);
    },
    complete(todo) {
      this.$store.dispatch("completeTodo", todo);
    },
    remove(todo) {
      this.$store.dispatch("removeTodo", todo);
    },
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
  updated() {
    console.log(this.todos);
  },
};
</script>
<style scoped>
.complete {
  color: rgb(126, 182, 126);
}

.current-todo {
  border: 1px solid #cecece;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem;
}

.btn {
  outline: none;
  border: none;
  background: none;
  margin-left: 0.85rem;
  cursor: pointer;
  color: #cecece;
}
</style>