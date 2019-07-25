<template>
  <div  style="height: 100%">
    <a-layout>
      <a-layout-sider>
        <div class="logo"/>
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['0']">
          <a-menu-item key="1">
            <a-icon type="folder" theme="filled"></a-icon>
            <span> <router-link to="/goodList">Goods列表</router-link></span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>


      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#ccc', minHeight: '280px' }">
        <h2>菜鸟驿站</h2>
        <Good></Good>
        <BtnFilters></BtnFilters>
        <GoodList></GoodList>
        <CustomerView></CustomerView>
      </a-layout-content>

    </a-layout>
    </a-layout>
  </div>

</template>

<script>
  import CustomerView from "./CustomerView"
  import GoodList from "../components/good-list";
  import BtnFilters from "../components/BtnFilters";
  import Good from "./Good";
  export default {
    name: 'Home',
    components: {Good, BtnFilters, GoodList,CustomerView},
    data() {
      return {
        userName: ''
      }
    },
    mounted() {
      this.userName = this.$store.getters.getUser
    },
    beforeRouteLeave(to, from, next) {
      const isBack = window.confirm('go back main?')
      if (isBack) {
        next()
      } else {
        next(false)
      }
    },
    methods: {
      backHome() {
        this.$router.push('/')
      }
    }
  }
</script>
<style>
  a {
    color: white;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }
</style>
