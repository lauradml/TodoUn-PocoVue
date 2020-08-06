<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/peticionesAjax">Resource</router-link> |
      <router-link to="/props">Tipos Props</router-link> |
      <router-link to="/mapstate">Mapstate</router-link> |
      <router-link to="/getters">Getters</router-link> |
      <router-link to="/mutation">Mutation</router-link> |
      <router-link to="/action">Action</router-link> |
       <router-link to="/directivesHooks">Directives Hooks</router-link> |
       <router-link to="/firebase">Firebase</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
