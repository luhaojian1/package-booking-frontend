<template>
  <div class="container">

      <table>
        <h2>包裹入库</h2>
        <tbody>
        <tr>
          <td>运单号：</td>
          <td> <input type="text" name="goodId" :value="goodId" @input="setGoodId"/></td>
        </tr>
        <tr>
          <td>收件人：</td>
          <td> <input type="text" name="customerName" :value="customerName" @input="setCustomerName"/></td>
        </tr>
        <tr>
          <td>电话：</td>
          <td> <input type="text" name="phoneNumber" :value="phoneNumber" @input="setPhoneNumber"/></td>
        </tr>
        <tr>
          <td>重量：</td>
          <td><input type="number" name="weight" :value="weight" @input="setWeight"/>KG</td>
        </tr>
        </tbody>
      </table>
      <div>
        <button @click="addGood">添加</button>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Good',
  data(){
    return{
      goodId:'',
      customerName:'',
      phoneNumber:'',
      weight:0
    }
  },
  methods:{
    setGoodId:()=>this.goodId = event.target.value,
    setCustomerName:()=>this.customerName = event.target.vaule,
    setPhoneNumber:()=>this.PhoneNumber = event.target.vaule,
    setWeight:()=>this.weight = event.target.vaule,
    addGood(){
      this.$store.dispatch('addGood',{
        goodId:this.goodId,
        customerName:this.customerName,
        phoneNumber:this.phoneNumber,
        weight:this.weight
      })
    }
  }
}
</script>

<style scoped>
tr{
  margin: 10px 10px;
}
</style>
