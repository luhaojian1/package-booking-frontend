<template>
<div style="height: 100%">
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-header style="background: black; padding: 0">
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <a-button-group>
            <a-button type="primary" @click="backHome">
              <a-icon type="left"/>
              back
            </a-button>
          </a-button-group>
        </a-menu-item>
        <a-menu-item key="2" type="right" style="margin-left: 78%">
          <a-icon type="user"/>
          hi,{{userName}}
        </a-menu-item>

      </a-menu>

    </a-layout-header>

    <a-layout>
      <a-layout-sider>
        <div class="logo"/>
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
          <a-menu-item key="1">
            <a-icon type="folder" theme="filled"></a-icon>
            <span> <router-link to="/home/goodList">Goods列表</router-link></span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="user"/>
            <span> <router-link to="/home/good">添加货物</router-link></span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>


      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#ccc', minHeight: '280px' }">
        <BtnFilters></BtnFilters>
       <GoodList></GoodList>
        <Good></Good>
      </a-layout-content>

    </a-layout>
  </a-layout>
</div>

</template>

<script>
import GoodList from "../components/good-list";
import BtnFilters from "../components/BtnFilters";
import Good from "./Good";
export default {
  name: 'Home',
  components: {Good,BtnFilters, GoodList},
  data () {
    return {
      userName: ''
    }
  },
  mounted () {
    this.userName = this.$store.getters.getUser
  },
  beforeRouteLeave (to, from, next) {
    const isBack = window.confirm('go back main?')
    if (isBack) {
      next()
    } else {
      next(false)
    }
  },
  methods: {
    backHome () {
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
