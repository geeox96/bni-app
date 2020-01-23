<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-list-tile
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
      >
        <v-list-tile-title v-text="link.text" />
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'CoreDrawer',

    data () {
      return {
        links: [
          {
            text: 'Inicio',
            to: '/'
          },
          {
            text: 'Construção',
            to: '/construcao'
          },
          {
            text: 'Marketing e Eventos',
            to: '/mkteventos'
          },
          {
            text: 'Serviços empresariais',
            to: '/servico'
          },
          {
            text: 'Saúde e bem-estar',
            to: '/saude'
          },
          {
            text: 'Consultoria',
            to: '/consultoria'
          }
        ]
      }
    },

    computed: {
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },

    methods: {
      irURL (item) {
        this.$router.push({ path: item.to })
      },

      ...mapMutations(['setDrawer'])
    }
  }
</script>
