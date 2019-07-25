<template>
  <div>
    <table cellspacing="10">
      <tbody>
      <tr>
        <td>运单号：</td>
        <td><input type="text" name="goodId" v-model="goodId"/></td>
      </tr>
      <tr>
        <td>取件时间</td>
        <td><input type="datetime-local" v-model="appointmentTime"></td>
      </tr>
      </tbody>
    </table>
    <button @click="appointGoodTime">预约取件</button>
  </div>

</template>

<script>
  export default {
    name: "CustomerView",
    data() {
      return {
        goodId: '',
        appointmentTime: Date,
      }
    },
    methods: {
      appointGoodTime() {
        this.$store.dispatch('reserveGood', {
          goodId: this.goodId,
          appointmentTime:this.appointmentTime.getTime()
        });
        this.goodId = '';
        this.customerName = '';
        this.phoneNumber = '';
        this.weight = 0.0;
      }
    }
  }
</script>

<style scoped>

</style>
<script>
  import Table from "ant-design-vue/es/table/Table";

  export default {
    components: {Table}
  }
</script>
