<!-- views/NotFound.vue -->

<template>
  <div
    id="page"
    class="pa-6"
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-card
          height="400"
          width="85%"
          color="background"
          class="pa-6"
          flat
        >
          <div class="display-3 mt-5">
            Página não encontrada.
          </div>
          <div class="grey--text lighten-5 mt-6">
            A página que você esta tentando acessar nunca existiu nessa realizade,
            ou foi migrada para um universo paralelo.
          </div>
          <div class="paragraph-text mt-1">
            <br>
            <br>Tente voltar para a pagina inicial. Caso o erro persista entre em contato com o suporte
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss">
$background: #415662;

    #page{
        background-color: $background;
        width: 100%;
    }

    .paragraph-text {
        font-size: 18px;
    }
</style>

<script>
export default {
    name: 'PageError'
}
</script>
