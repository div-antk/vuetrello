import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// localStorageに保存したリストを取得
const savedLists = localStorage.getItem('trello-lists')

// localStorageに保存されたリストがあれば取得
// なければデフォルトのリスト配列を設置
const store = new Vuex.Store({
  state: {
    // JSON形式のstring型でデータが保存されているのでオブジェクトに変換する
    lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addCardToList(context, payload) {
      context.commit('addCardToList', payload)
    },
  },
  getters: {
  }
})

// ストアインスタンスを取得
store.subscribe((mutations, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

// main.jsでインポートできるようにする
export default store