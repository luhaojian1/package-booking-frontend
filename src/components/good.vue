<template>
   <tr>
     <td>{{good.goodId}}</td>
     <td>{{good.customerName}}</td>
     <td>{{good.phoneNumber}}</td>
     <td>{{good.goodStatus}}</td>
     <td>{{good.appointmentTime}}</td>
     <td><button class="primary" @click="receiptGood" v-show="judgeReceipt">确认收货</button></td>
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
          isReceipt:true
        }
      },
      methods:{
        receiptGood(){
          this.$store.dispatch('receiptGood',{
            goodId:this.good.goodId,
            customerName:this.good.customerName,
            phoneNumber:this.good.phoneNumber,
            goodStatus:"已取件"
          });
          this.isReceipt = false;
        },
        judgeReceipt: ()=>this.good.goodStatus === "未取件",

      }
    }
</script>

<style scoped>
tr{
  margin: 5px;
}
</style>
