<template>
  <div id="filters">
    <div class="filter">
      <a-button v-for="(filter,i) in filters"
                :key="i" :value="filter"
                :filter="filter"
                @click=" clickFilterButton(filter)"
                type="primary">{{filter}}
      </a-button>
    </div>
  </div>

</template>

<script>

  export default {
    name: "BtnFilters",
    data() {
      return {
        filters: ['All', '已取件', '已预约','未取件']
      }
    },
    methods: {
      clickFilterButton(filter) {
        this.$store.commit('updateChoiceBtn', filter);
      },
    },


  }
</script>

<style>
button{
  margin-right: 10px;
}
</style>
