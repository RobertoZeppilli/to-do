<template>
  <div>
    <div id="completed-todos">
      <h1>All completed todos</h1>
      <div class="actions">
        <select
          class="select-name"
          @change="getNameSelected"
          @focus="selectFocus"
        >
          <option value="">all</option>
          <option v-for="(name, index) in names" :key="index" :value="name">
            {{ name }}
          </option>
        </select>
        <div>
          <input
            placeholder="Search by task or name..."
            class="enter"
            type="text"
            v-model="selected"
            @focus="inputFocus"
          />
        </div>
      </div>
      <div v-if="allCompleted.length" class="completed-container">
        <div v-for="todo in allCompleted" :key="todo.id" class="col">
          <h2 :class="[{ complete: todo.completed }]">
            {{ todo.body }}
          </h2>
        </div>
      </div>
      <div v-else>Search by input or select</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    names() {
      return this.$store.getters.usernames;
    },
    allCompleted() {
      return this.$store.getters.allCompleted;
    },
    selected: {
      get() {
        return this.$store.getters.selected;
      },
      set(selected) {
        this.$store.commit("GET_SELECTED", selected);
      },
    },
    isSearching() {
      return this.$store.getters.isSearching;
    },
    isSelecting() {
      return this.$store.getters.isSelecting;
    },
  },
  methods: {
    getNameSelected(e) {
      this.$store.dispatch("getNameSelected", e.target.value);
    },
    selectFocus() {
      this.$store.dispatch("isSelecting");
    },
    inputFocus() {
      this.$store.dispatch("isSearching");
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
  transition: border-radius 0.3s ease-in-out;
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
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.85rem;
}
.actions .select-name,
.actions .enter {
  min-width: 300px;
  outline: none;
  border: none;
  padding: 0.55rem;
}
</style>