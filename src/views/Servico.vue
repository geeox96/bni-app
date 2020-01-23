<template>
  <div id="contrucao">
    <empresas />
    <subscribe />
  </div>
</template>

<script>
  export default {
    name: 'Contrucao',

    components: {
      Empresas: () => import('@/components/home/Empresas'),
      Subscribe: () => import('@/components/home/Subscribe')
    }
  }
</script>
