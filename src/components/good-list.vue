<template>
<div>
  <table border="1" cellpadding="15">
    <thead>
      <th>运单号</th>
      <th>收件人</th>
      <th>电话</th>
      <th>状态</th>
      <th>预约时间</th>
      <th></th>
    </thead>
    <tbody>
      <good v-for="(good,index) in goods" :key="index" :value="good" :good="good"></good>
    </tbody>
  </table>
</div>
</template>

<script>
  import Good from "./good";
  export default {
    name: "good-list",
    components: {Good},
    computed:{
      goods(){
        return this.$store.getters.getGoods;
      }
    },
    mounted() {
      this.$store.dispatch('loadGoods');
    }
  }
</script>

<style scoped>

</style>
