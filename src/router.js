import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Empresas from './views/Empresas.vue'
import Construcao from './views/Construcao.vue'
import mkteventos from './views/Mkteventos.vue'
import Servico from './views/Servico.vue'
import Saude from './views/Saude.vue'
import Consultoria from './views/Consultoria.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Home
    },
    {
      path: '/empresas',
      name: 'Empresas BNI',
      component: Empresas
    },
    {
      path: '/construcao',
      name: 'Construção',
      component: Construcao
    },
    {
      path: '/mkteventos',
      name: 'Marketing e Eventos',
      component: mkteventos
    },
    {
      path: '/servico',
      name: 'Serviços Empresariais',
      component: Servico
    },
    {
      path: '/saude',
      name: 'Saúde e bem-estar',
      component: Saude
    },
    {
      path: '/consultoria',
      name: 'Consultoria',
      component: Consultoria
    }
  ]
})
