<template>
  <div class="login">
    <input
      class="form-control"
      :value="newUserName"
      @change="getUsername"
      placeholder="Insert your name..."
    />
    <router-link to="/" @click="clearUsername">Go to Todolist</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    getUsername(e) {
      this.$store.dispatch("getUsername", e.target.value);
    },
    clearUsername() {
      this.$store.dispatch("clearUsername");
    },
  },
  computed: {
    newUserName() {
      return this.$store.getters.newUserName;
    },
  },
};
</script>

<style scoped>
.login {
  padding: 2.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.login .form-control {
  padding: 1.55rem;
  outline: none;
  border: none;
  font-size: 1.75rem;
}
.login a {
  text-decoration: none;
  color: #cecece;
  font-weight: bold;
  margin-top: 1.55rem;
}
</style>