<template>
  <v-container
    id="subscribe"
    tag="section"
  >
    <base-card
      color="primary"
      class="pa-3"
    >
      <v-container
        grid-list-xl
        pa-0
      >
        <v-layout wrap>
          <v-flex
            xs12
            md5
          >
            <base-subheading
              style="color: #FFF"
              class="mb-3"
            >
              Sobre a BNI
            </base-subheading>
            <p style="color: #FFF">
              Escreva aqui sobre a BNI e o que ela é
            </p>
          </v-flex>
          <v-flex
            xs12
            md6
            offset-md1
          >
            <base-subheading style="color: #FFF">
              Contatos
            </base-subheading>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title style="color: #FFF">
                  EMAIL
                </v-list-tile-title>
                <v-list-tile-sub-title style="color: #FFF">
                  EMAILBNI@GMAIL.COM
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-map-marker
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title style="color: #FFF">
                  ENDEREÇO
                </v-list-tile-title>
                <v-list-tile-sub-title style="color: #FFF">
                  Av. Carlos, 3655
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar color="primary">
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-phone
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title style="color: #FFF">
                  TELEFONE
                </v-list-tile-title>
                <v-list-tile-sub-title style="color: #FFF">
                  (44) 3333-3333
                </v-list-tile-sub-title>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </base-card>
  </v-container>
</template>
