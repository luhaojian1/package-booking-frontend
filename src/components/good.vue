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
          date:new Date(this.good.appointmentTime).toLocaleDateString()==="false	"?new Date(this.good.appointmentTime).toLocaleDateString():''
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
        },

      }
    }
</script>

<style  >
tr{
  margin: 5px;
}
</style>
