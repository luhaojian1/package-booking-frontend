<template>
   <tr style="margin-bottom: 10px;">
     <td>{{good.goodId}}</td>
     <td>{{good.customerName}}</td>
     <td>{{good.phoneNumber}}</td>
     <td>{{good.goodStatus}}</td>
     <td>{{date}}</td>
     <td><button class="primary" @click="receiptGood" v-show="good.goodStatus !== '已取件'">确认收货</button></td>
   </tr>
</template>

<script>
    export default {
      name: "good",
      props:{
          good:Object
      },
      data(){
        return{
          isNotReceipt:true,
          date: this.good.appointmentTime !== 0 ? new Date(this.good.appointmentTime).toLocaleString() : ''
        }
      },
      methods:{
        receiptGood(){
          this.$store.dispatch('receiptGood',{
            goodId:this.good.goodId,
            customerName:this.good.customerName,
            phoneNumber:this.good.phoneNumber,
            appointmentTime: this.good.appointmentTime,
            weight: this.good.weight,
            goodStatus:"已取件"
          });
        },

      }
    }
</script>

<style  >
tr{
  margin: 5px;
}
</style>
