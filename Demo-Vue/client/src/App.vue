<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <h1 class="mt-4">LIST OF EMPLOYEE</h1>
    <app-message></app-message>
    <app-ListTable>
      <h1>óc chó</h1>
    </app-ListTable>
    <!-- <router-view/> -->
    <!-- <abc></abc> -->
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>




<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
