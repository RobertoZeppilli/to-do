<template>
  <div id="current-todos" class="container">
    <div
      v-for="todo in todos"
      :key="todo.id"
      :class="[{ complete: todo.completed }, 'current-todo']"
    >
      <span>
        {{ todo.body }}
      </span>
      <div class="actions">
        <button type="button" @click="edit(todo)" class="btn">Edit</button>
        <button type="button" @click="complete(todo)" class="btn">
          {{ todo.completed ? "Undo" : "Completed" }}
        </button>
        <button type="button" @click="remove(todo)" class="btn">Remove</button>
      </div>
      <div class="username">{{ todo.username }}</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    edit(todo) {
      this.$store.dispatch("editTodo", todo);
      this.$store.dispatch("isEditing")
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
};
</script>
<style scoped>
.complete {
  background-color: rgb(126, 182, 126);
}

.current-todo {
  border: 1px solid #cecece;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.95rem 0.85rem;
  position: relative;
  margin-bottom: 0.45rem;
}
.username {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #cecece;
  color: #191919;
  font-weight: bold;
  font-size: 0.75rem;
  padding: 0.45rem;
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