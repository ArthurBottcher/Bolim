<template>
  <div
    id="page"
    style="height:100%"
  >
    <AvbHeader />
    <v-container
      class="d-flex"
      style="margin-top:50px; width:100%; height: 100%"
      fluid
    >
      <AvbMenuLateral />
      <v-card
        width="100%"
        elevation="0"
        outlined
        class="pa-2"
      >
        <v-card-title>Visão Geral</v-card-title>
        <v-row class="text-center">
          <v-col><span>Teste1</span></v-col>
          <v-col><span>Teste2</span></v-col>
          <v-col><span>Teste3</span></v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AvbHeader from '../components/AvbHeader.vue'
import AvbMenuLateral from '../components/AvbMenuLateral'
export default {
    name: 'Dashboard',
    components: {AvbHeader,AvbMenuLateral},
    data: () => {
        return{

        }
    }
}
</script>

<style>

</style>
