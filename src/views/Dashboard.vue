<template>
  <div id="page">
    <AvbHeader />
    <v-container
      class="d-flex pa-0"
      style="margin-top:50px;  height:calc(100vh - 48px)"
      fluid
    >
      <AvbSideMenu />
      <v-card
        width="95%"
        elevation="0"
        outlined
        class="pa-2 mx-auto"
        tile
      >
        <v-card-title>Visão Geral</v-card-title>
        <v-row class="text-center">
          <v-col>
            <v-card
              outlined
              elevation="0"
              class="text-center"
            >
              <v-card-title>
                Top 3 <v-icon
                  class="ml-3"
                  color="text"
                >
                  mdi-medal
                </v-icon>
              </v-card-title>
              <v-list
                width="95%"
                class="mx-auto"
              >
                <v-list-item
                  v-for="top in tops"
                  :key="top.name"
                  style="border-bottom: 1px solid rgba(0, 0, 0, 0.12)"
                >
                  <v-list-item-title>{{ top.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ top.points }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              outlined
              elevation="0"
              class="text-center"
            >
              <v-card-title>Suas ultimas apostas</v-card-title>
            </v-card>
          </v-col>

          <v-col>
            <v-card
              outlined
              elevation="0"
              class="text-center"
            >
              <v-card-title>Jogos da rodada</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AvbHeader from '../components/AvbHeader.vue'
import AvbSideMenu from '../components/AvbSideMenu'
export default {
    name: 'Dashboard',
    components: {
        AvbHeader,
        AvbSideMenu
    },
    data: () => {
        return{
            tops: [
                {name: 'Teste1', points: 30+'pts'},
                {name: 'Teste2', points: 25+'pts'},
                {name: 'Teste3', points: 23+'pts'}
            ]
        }
    }
}
</script>

<style>
    #page{
        min-height: 100vh;
    }
</style>
