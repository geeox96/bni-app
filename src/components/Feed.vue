<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>

      <feed-card
        v-for="(article, i) in paginatedEmpresas"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-layout>

    <v-layout align-center>
      <v-flex xs3>
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          title="Previous page"
          square
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-flex>

      <v-flex
        xs6
        text-xs-center
        subheading
      >
        Pagina {{ page }} de {{ pages }}
      </v-flex>

      <v-flex
        xs3
        text-xs-right
      >
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          title="Next page"
          square
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('@/components/FeedCard')
    },

    data: () => ({
      layout: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
      page: 1,
      listagem: []
    }),

    created () {
      let secao = this.$router.app._router.currentRoute.path.toLowerCase()
      secao = secao.substring(1)
      if (secao === 'empresas') {
        this.listagem = this.empresa
      } else {
        this.listagem = this.empresa.filter(empresa => {
          if (empresa.secao === secao) return empresa
        })
      }
    },

    computed: {
      ...mapState(['empresa']),

      pages () {
        return Math.ceil(this.listagem.length / 11)
      },

      paginatedEmpresas () {
        const start = (this.page - 1) * 11
        const stop = this.page * 11

        return this.listagem.slice(start, stop)
      }
    },

    watch: {
      page () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
