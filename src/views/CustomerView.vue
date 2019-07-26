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
        appointmentTime: 0,
      }
    },
    methods: {
      appointGoodTime() {

        this.$store.dispatch('reserveGood', {
          goodId: this.goodId,
          appointmentTime: new Date(this.appointmentTime).getTime()
        });
        this.goodId = '';
      }
    }
  }
</script>

<style scoped>

</style>

