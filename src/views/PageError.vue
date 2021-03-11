<!-- views/NotFound.vue -->

<template>
  <div class="NotFound">
    <v-container>
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <v-card
            height="400"
            color="transparent"
            flat
          >
            <div class="display-3 mt-5">
              Page not found.
            </div>
            <div class="grey--text lighten-5">
              A página que você esta tentando acessar nunca existiu nessa realizade,
              ou foi migrada para um universo paralelo.
            </div>
            <div class="paragraph-text mt-2">
              <br>
              <br>Tente voltar para a pagina inicial. Caso o erro persista entre em contato com o suporte
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style>
  .paragraph-text {
    font-size: 18px;
  }
</style>

<script>
export default {
    name: 'PageError'
}
</script>
