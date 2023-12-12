import { createStore } from 'vuex'

interface TodoItem {
  title: string
}

export type StoreState = {
  items: TodoItem[]
}

export default createStore({
  state: {
    items: []
  },
  mutations: {
    addItem(state: StoreState, title: string) {
      state.items.unshift({ title })
    },
    deleteItem(state: StoreState, index: number) {
      state.items.splice(index, 1)
    }
  },
  actions: {
    addItem({ commit }, title: string) {
      commit('addItem', title)
    }
  },
  getters: {
    items: (state: StoreState) => state.items
  }
})
