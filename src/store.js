import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    empresa: require('@/data/empresas.json'),
    drawer: false,
    items: [
      {
        text: 'Inicio',
        to: '/'
      }
    ]
  },
  getters: {
    categories: state => {
      const categories = []

      for (const empresa of state.empresa) {
        if (
          !empresa.categoria ||
          categories.find(category => category.text === empresa.categoria)
        ) continue

        const text = empresa.categoria

        categories.push({
          text,
          to: `/categoria/${text}`
        })
      }

      return categories.sort().slice(0, 4)
    },
    links: (state, getters) => {
      return state.items.concat(getters.categories)
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
