<template>
  <v-toolbar
    app
    flat
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />
    <v-container
      mx-auto
      py-0
    >
      <v-layout>
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
        />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          class="ml-1 mr-1 pl-1 pr-1 hidden-sm-and-down"
          flat
          @click="irURL(link)"
        >
          {{ link.text }}
        </v-btn>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
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

    methods: {
      ...mapMutations(['toggleDrawer']),
      irURL (item) {
        this.$router.push({ path: item.to })
      }
    }
  }
</script>
