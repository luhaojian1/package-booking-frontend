<template>
  <div class="container">
    <div>
      <a-button type="primary" @click="showModal">添加</a-button>
      <a-modal
        title="包裹入库"
        :visible="visible"
        @ok="handleOk"
        :confirmLoading="confirmLoading"
        @cancel="handleCancel"
      >
        <table cellspacing="10">
          <tbody>
          <tr>
            <td>运单号：</td>
            <td> <input type="text" name="goodId" v-model="goodId" /></td>
          </tr>
          <tr>
            <td>收件人：</td>
            <td> <input type="text" name="customerName" v-model="customerName"  /></td>
          </tr>
          <tr>
            <td>电话：</td>
            <td> <input type="text" name="phoneNumber" v-model="phoneNumber"  /></td>
          </tr>
          <tr>
            <td>重量：</td>
            <td><input type="number" name="weight" v-model="weight"  /></td>
          </tr>
          </tbody>
        </table>
      </a-modal>
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
      weight:0.0,

      visible: false,
      confirmLoading: false,
    }
  },
  methods:{
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.$store.dispatch('addGood',{
        goodId:this.goodId,
        customerName:this.customerName,
        phoneNumber:this.phoneNumber,
        weight:this.weight
      });
      this.goodId = '';
      this.customerName= '';
      this.phoneNumber = '';
      this.weight = 0.0;

      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 300);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
  }
}
</script>

<style >
tr{
  margin: 10px 10px;
}
</style>
