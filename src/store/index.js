import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { API } from  '../utils/axios'
export default new Vuex.Store({
  state: {
    totolQty:10,
    currentQty:1,
    EndTest:true,
    answerQty:0,
    wrongQty:0,
    SpaceQty:0,
    question:[{topic: 'loading'}]
  },
  mutations: {
    UpdatecurrentQty(state) {
      if (state.currentQty > state.totolQty) {
        state.EndTest = false
      }
      else{
        state.currentQty = state.currentQty + 1
      }
    },
    CommitAnswer (state) {
      state.answerQty = state.answerQty + 1
    },
    CommitWrong (state) {
      state.wrongQty = state.wrongQty + 1
    },
    GetQuestion (state,data) {
      state.question = data
    },
    UpdateSpaceQty (state) {
      state.SpaceQty = state.SpaceQty + 1
    }
    
  },
  actions: {
    updateSpaceQty (context) {
      context.commit('UpdateSpaceQty')
    },
    updatecurrentQty (context) {
      context.commit('UpdatecurrentQty')
    },
    commitAnswer ({commit}, data) {
      API('get', `Question/${data.qid}/${data.answer}`).then(res => {
        if (res.data === true) {
          commit('CommitAnswer')
        } else {
          commit('CommitWrong')
        }
      })
    },
    getQuestion ({commit}) {
      API('get', 'Question').then(res => {
        commit('GetQuestion', res.data)
      })
    },
  },
  getters: {
    score (state) {
      let total = 100/ state.totolQty * state.answerQty
      return total
    }
  },
  modules: {
  }
})
