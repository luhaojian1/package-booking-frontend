import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    goods: [],
    choiceBtn: 'All'
  },
  getters: {
    getGoods: state => {
      switch (state.choiceBtn) {
        case 'All':
          return state.goods
        case '已取件':
          return state.goods.filter(item => item.goodStatus === '已取件');
        case '已预约':
          return state.goods.filter(item => item.goodStatus === '已预约');
        case '未取件':
          return state.goods.filter(item => item.goodStatus === '未取件');
        default:
          return state.goods
      }
    }
  },
  mutations: {
    loadGoods (state, goodList) {
      state.goods = goodList
    },
    addGoods (state, good) {
      state.goods.push(good)
    },
    updateGood (state, good) {
      let index = state.goods.findIndex(item => item.goodId === good.goodId)
      state.goods.splice(index, 1, good);
      alert("预约成功");
    },
    updateChoiceBtn (state, filter) {
      state.choiceBtn = filter
      console.log(state.choiceBtn)
    }
  },
  actions: {
    loadGoods ({ commit }) {
      axios.get('http://localhost:8090/goods')
        .then(response => {
          commit('loadGoods', response.data)
        })
        .catch(error => console.log(error))
    },
    receiptGood ({ commit }, good) {
      axios.put(`http://localhost:8090/goods/${good.goodId}`, good)
        .then(response => {
          console.log(response.data)
          commit('updateGood', response.data)
        })
        .catch(error => console.log(error))
    },
    reserveGood ({ commit }, good) {
      axios.put(`http://localhost:8090/goods?goodId=${good.goodId}`, good)
        .then(response => {
          console.log(response.data);
          commit('updateGood', response.data)
        })
        .catch(error => {
          console.log(error);
          alert("该物件已被取走或不在工作时间内");
        })
    },
    addGood ({ commit }, good) {
      axios.post(`http://localhost:8090/goods`, good)
        .then(response => {
          console.log(response.data);
          commit('addGoods', response.data)
        })
        .catch(error => console.log(error))
    }
  }
})
