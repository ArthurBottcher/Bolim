<template>
  <div id="page">
    <AvbHeader />
    <v-container
      style="margin-top: 48px"
      fluid
      class="pa-3"
    >
      <h1 class="text-center">
        Classificação geral
      </h1>
      <v-data-table
        style="width: 95%; border: thin solid #676767"
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

import AvbHeader from '../components/AvbHeader'

export default {
    name: 'Ranking',
    components:{
        AvbHeader
    },
    data: () => {
        return{
            headers: [
                {text:'Nome', value:'name', align: 'center'},
                {text:'Pontos', value:'points', align: 'center'},
            ],
            items: [
                {name:'Russel Wilson', points: 35},
                {name:'Tom Brady', points: 30},
                {name:'Drew Brees', points: 25},
                {name:'Pat Mahomes', points: 15},
                {name:'Aaron Rodgers', points: 10},
                {name:'Cam Newton', points: 5},
            ]
        }
    }
}
</script>

<style lang="scss">
$background: #415662;

    thead{
        background-color: $background;
    }
</style>
