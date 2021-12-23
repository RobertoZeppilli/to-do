
<template>
  <div id="app" class="container">
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/completed">Completed</router-link>
      <router-link to="/login">Change User</router-link>
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
  width: 10%;
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
  color: rgb(85, 109, 173);
}
.body {
  background-color: rgb(85, 109, 173);
  width: 90%;
}
</style>
