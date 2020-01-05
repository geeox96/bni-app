<template>
  <div id="home">
    <articles />
    <subscribe />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Articles: () => import('@/components/home/Articles'),
      Subscribe: () => import('@/components/home/Subscribe')
    }
  }
</script>
