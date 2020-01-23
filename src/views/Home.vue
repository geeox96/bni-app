<template>
  <div id="home">
    <banner />
    <div class="text-xs-center">
      <v-btn
        large
        color="primary"
        @click="irEmpresas"
      >
        Ver todas empresas
      </v-btn>
    </div>
    <subscribe />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Banner: () => import('@/components/home/Banner'),
      Subscribe: () => import('@/components/home/Subscribe')
    },

    methods: {
      irEmpresas () {
        this.$router.push({ path: '/empresas' })
      }
    }
  }
</script>
