<template>
  <v-container pa-0>
    <base-subheading>Categorias</base-subheading>
    <v-chip
      v-for="(categoria, i) in categories"
      :key="i"
      tag
      label
      small
      color="secondary"
      text-color="white"
    >
      {{ categoria.text }}
    </v-chip>
  </v-container>
</template>

<script>
// Utilities
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['categories'])
    }
  }
</script>
