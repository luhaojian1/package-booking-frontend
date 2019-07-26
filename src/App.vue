<template>
  <div id="app" class="home">
    <router-view></router-view>
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
