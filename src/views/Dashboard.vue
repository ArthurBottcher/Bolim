<template>
  <div id="page">
    <AvbHeader />
    <v-container
      class="d-flex pa-0"
      style="margin-top:48px; height:calc(100% - 48px)"
      fluid
    >
      <AvbSideMenu />
      <v-card
        width="95%"
        elevation="0"
        outlined
        class="pa-2 mx-auto"
        tile
        color="background"
      >
        <v-card-title>Visão Geral</v-card-title>
        <v-row class="text-center">
          <v-col cols="4">
            <v-card
              rounded="xl"
              elevation="2"
              class="text-center pa-3 .flex-nowrap"
            >
              <v-card-title class="secondary--text justify-center">
                Top 3 <v-icon
                  class="ml-3"
                  color="secondary"
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

          <v-col cols="4">
            <v-card
              rounded="xl"
              elevation="2"
              class="text-center pa-3 "
            >
              <v-card-title class="accent--text justify-center ">
                Suas ultimas apostas
              </v-card-title>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card
              rounded="xl"
              elevation="2"
              class="text-center pa-3"
            >
              <v-card-title class="secondary--text justify-center">
                Jogos da rodada
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card
              rounded="xl"
              elevation="2"
              class="text-center pa-3"
            >
              <v-card-title class="justify-center accent--text">
                Seus pontos
              </v-card-title>
              <v-card-text class="headline text-center text--text">
                35 pts
              </v-card-text>
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
            ],

        }
    }
}
</script>

<style>
    #page{
        min-height: 100%;
    }
</style>
