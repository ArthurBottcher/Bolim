<template>
  <div id="page">
    <AvbHeader />
    <v-container
      fluid
      class="pa-4 mt-12"
    >
      <h1
        class="text-center"
        style="cursor:default"
      >
        Classificação geral
      </h1>
      <v-data-table
        style="width: 95%; border: thin solid #676767; cursor:default"
        class="mx-auto"
        readonly
        hide-default-footer
        :headers="headers"
        :items="items"
      />
    </v-container>
  </div>
</template>

<script>

import AvbHeader from '../components/Avb-Header'

export default {
    name: 'Ranking',
    components:{
        AvbHeader
    },
    data: () => {
        return{
            headers: [
                {text:'Nome',   value:'name',   align: 'center'},
                {text:'Pontos', value:'points', align: 'center'},
            ],
            items: [
                {name:'Russel Wilson',  points: 35},
                {name:'Tom Brady',      points: 30},
                {name:'Drew Brees',     points: 25},
                {name:'Pat Mahomes',    points: 15},
                {name:'Aaron Rodgers',  points: 10},
                {name:'Cam Newton',     points: 5},
            ]
        }
    }
}
</script>

<style lang="scss">
$background: #1A3442;
$background2: #304854;

    thead{
        background-color: $background2;
    }
</style>
