<template>
  <div class="login">
    <input
      class="form-control"
      :value="newUserName"
      @change="getUsername"
      placeholder="Insert your name..."
    />
    <button class="btn" type="submit" @click="goToList">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    getUsername(e) {
      this.$store.dispatch("getUsername", e.target.value);
    },
    goToList() {
      // this.$store.dispatch("clearUsername")
      this.$router.push({ path: "/todolist" });
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
  margin-bottom: 1.85rem;
}
.login .btn {
  outline: none;
  border: none;
  font-weight: bold;
  padding: .75rem 1.65rem;
  cursor: pointer;
}
</style>