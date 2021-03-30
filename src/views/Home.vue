<template>
  <div id="page">
    <AvbHeader />
    <v-container
      class="d-flex pa-0 mt-12"
      fluid
    >
      <v-card
        width="100%"
        elevation="0"
        outlined
        class="pa-2 mx-auto"
        tile
        color="background"
      >
        <v-card-title
          class="justify-center"
          style="cursor: default"
        >
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
          <v-tab>Próximos Jogos</v-tab>
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

import AvbHeader from '../components/Avb-Header.vue'
import AvbTopUsers from '../components/Avb-TopUsers'
import AvbLastBets from '../components/Avb-LastBets'
import AvbNextGames from '../components/Avb-NextGames'
import AvbYourPoints from '../components/Avb-YourPoints'

export default {
    name: 'Home',
    components: {
        AvbHeader,
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
        height: 100vh;
    }

    .tabsItens{
        background-color: $background;
        min-height: 450px;
        max-height: 475px;
    }

</style>

