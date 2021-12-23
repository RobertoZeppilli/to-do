<template>
  <div id="completed-todos">
    <h1>{{newUserName}}'s completed todos</h1>
    <div v-if="completed.length" class="completed-container">
      <div v-for="todo in completed" :key="todo.id" class="col">
        <h2 :class="[{ complete: todo.completed }]">
          {{ todo.body }}
        </h2>
        <div class="actions">
          <button type="button" @click="complete(todo)" class="btn">
            {{ todo.completed ? "Undo" : "Completed" }}
          </button>
        </div>
      </div>
    </div>
    <div v-else>No Completed!</div>
  </div>
</template>
<script>
export default {
  methods: {
    complete(todo) {
      this.$store.dispatch("completeTodo", todo);
    },
  },
  computed: {
    completed() {
      return this.$store.getters.completedTodos;
    },
    newUserName() {
      return this.$store.getters.newUserName;
    },
  },
};
</script>

<style scoped>
#completed-todos {
  padding: 2.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#completed-todos h1 {
  margin-bottom: 2.25rem;
}
.completed-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.complete {
  color: rgb(126, 182, 126);
}

.col {
  border: 1px solid #cecece;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem;
  width: 40%;
  transition: border-radius .3s ease-in-out;
}
.col:hover {
    border-radius: 2rem 4.85rem;

}

.btn {
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  color: #cecece;
}
</style>