<template>
  <div id="main" class="main-container">
    <div class="container">
      <div id="icon">
        <a-avatar size="large" icon="user"/>
      </div>
      <div id="userInput">
        <label for="name"><input id="name" type="text" placeholder="请输入姓名" :value="userName"
                                 @input="setUserName"></label>
        <a-button type="primary" @click="enterHome">Enter</a-button>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    enterHome () {
      if (this.userName === '') {
        alert(`input can not be null`)
        return
      }
      this.$router.push(`/home/goodList`)
    },
    setUserName () {
      this.userName = event.target.value
    }
  }
}
</script>

<style>
  #icon {
    margin: 130px 30px 30px 150px;
  }
  #userInput {
    margin-left: 50px;
    margin-bottom: 100px;
  }
</style>
