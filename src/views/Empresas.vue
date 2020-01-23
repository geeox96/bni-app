<template>
  <div id="empresas">
    <empresa />
    <subscribe />
  </div>
</template>

<script>
  export default {
    name: 'Empresas',

    components: {
      empresa: () => import('@/components/home/Empresas'),
      Subscribe: () => import('@/components/home/Subscribe')
    }
  }
</script>
