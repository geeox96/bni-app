<template>
  <v-flex
    xs12
    :class="classes"
  >
    <base-card
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
      href="#!"
    >
      <v-img
        :src="require(`@/assets/empresas/${value.img}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-layout
          v-if="!value.prominent"
          fill-height
          wrap
          text-xs-right
          ma-0
        >
          <v-flex xs12>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop
            >
              {{ value.categoria }}
            </v-chip>
            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>
            <div class="caption">
              {{ value.responsavel }}
            </div>
          </v-flex>
          <v-flex align-self-end>
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click="maisInfo(value)"
            >
              Mais informações
            </v-chip>
          </v-flex>
        </v-layout>
      </v-img>
    </base-card>
    <v-dialog
      v-model="dialogInfo"
      width="800"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{ informacoes.title }}
        </v-card-title>
        <v-card-text>
          <div class="mt-2 my-3 title">
            Responsavel:
          </div>
          <span class="title font-weight-light">
            {{ informacoes.responsavel }}
          </span>
          <span class="ml-2">
            -
          </span>
          <span class="ml-2">
            {{ informacoes.bio }}
          </span>
          <v-divider />
          <div class="my-3 title">
            Endereço:
          </div>
          <span>{{ informacoes.rua }}</span>
          <span class="ml-4">
            Bairro: {{ informacoes.bairro }}
          </span>
          <span class="ml-4">
            CEP: {{ informacoes.cep }}
          </span>
          <v-divider />
          <div class="my-3 title">
            Descrição:
          </div>
          <span>{{ informacoes.info }}</span>
          <v-divider />
        </v-card-text>
        <v-card-actions class="justify-center">
          <iframe
            :src="informacoes.maps"
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen
          />
        </v-card-actions>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="dialogInfo = false"
          >
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
  export default {
    props: {
      size: {
        type: Number,
        required: true
      },
      value: {
        type: Object,
        default: () => ({})
      }
    },

    data () {
      return {
        dialogInfo: false,
        informacoes: {}
      }
    },

    computed: {
      classes () {
        return {
          md6: this.size === 2,
          md4: this.size === 3
        }
      }
    },

    methods: {
      maisInfo (value) {
        this.dialogInfo = true
        this.informacoes = value
      }
    }
  }
</script>

<style>
.v-image__image {
  transition: 0.3s linear;
}
</style>
