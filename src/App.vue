<template>
  <div id="app">
   <Home></Home>
  </div>
</template>

<script>
  import Good from './views/Good'
  import GoodList from "./components/good-list";
  import Home from "./views/Home"
  import Main from "./views/Main";
  export default{
    name: 'App',
    components:{Main, GoodList, Good,Home}
  }

</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
