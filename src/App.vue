
<template>
  <div id="app" class="container">
    <div class="menu">
      <router-link to="/">Choose User</router-link>
      <router-link to="/todolist">Your List</router-link>
      <router-link to="/completed">Your Completed</router-link>
      <router-link to="/all-completed">All Completed</router-link>
    </div>

    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

body {
  height: 100vh;
  background-color: rgb(24, 24, 92);
  color: #cecece;
}
#app {
  height: 100%;
  display: flex;
}
.menu {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.menu a {
  text-decoration: none;
  font-weight: bold;
  margin: 2.55rem 0;
  color: #cecece;
}
.menu a.router-link-exact-active {
  color: rgb(76, 209, 64);
}
.body {
  background-color: rgb(85, 109, 173);
  width: 75%;
}
</style>
