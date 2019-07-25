<template>
  <div id="app" class="home">
    <Home></Home>
  </div>
</template>

<script>

  import Good from './views/Good'
  import GoodList from "./components/good-list";
  import Home from "./views/Home"
  export default{
    name: 'App',
    components:{ GoodList, Good,Home}
  }
 /**/
</script>
<style lang="scss">

</style>
