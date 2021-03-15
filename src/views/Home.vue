<template>
  <div id="page">
    <AvbHeader />
    <v-container
      class="d-flex pa-0"
      style="margin-top:48px; height:calc(100% - 48px)"
      fluid
    >
      <!-- <AvbSideMenu /> -->
      <v-card
        width="100%"
        elevation="0"
        outlined
        class="pa-2 mx-auto"
        tile
        color="background"
      >
        <v-card-title class="justify-center">
          Visão Geral
        </v-card-title>

        <v-tabs
          v-model="tabs"
          class="mx-auto"
          fixed-tabs
          slider-color="primary"
          color="primary"
          background-color="background"
        >
          <v-tab>Líderes</v-tab>
          <v-tab>Suas ultimas apostas</v-tab>
          <v-tab>Proximos Jogos</v-tab>
          <v-tab>Seus pontos</v-tab>

          <v-tab-item class="mx-auto pa-6 tabsItens">
            <AvbTopUsers />
          </v-tab-item>

          <v-tab-item class="mx-auto pa-6 tabsItens">
            <AvbLastBets />
          </v-tab-item>

          <v-tab-item class="mx-auto pa-6 tabsItens">
            <AvbNextGames />
          </v-tab-item>

          <v-tab-item class="mx-auto pa-6 tabsItens">
            <AvbYourPoints />
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>

<script>

import AvbHeader from '../components/AvbHeader.vue'
// import AvbSideMenu from '../components/AvbSideMenu'

import AvbTopUsers from '../components/AvbTopUsers'
import AvbLastBets from '../components/AvbLastBets'
import AvbNextGames from '../components/AvbNextGames'
import AvbYourPoints from '../components/AvbYourPoints'

export default {
    name: 'Home',
    components: {
        AvbHeader,
        // AvbSideMenu,
        AvbTopUsers,
        AvbLastBets,
        AvbNextGames,
        AvbYourPoints
    },
    data: () => {
        return{
            tabs: null,
        }
    },

}
</script>

<style lang="scss">
$background: #1A3442;
$background2: #304854;
    #page{
        min-height: 100%;
    }

    .tabsItens{
        background-color: $background;
        min-height: 450px
    }

</style>
