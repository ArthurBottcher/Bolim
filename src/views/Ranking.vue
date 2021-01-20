<template>
  <div id="page">
    <AvbHeader />
    <v-container
      style="margin-top: 48px"
      fluid
      class="pa-3"
    >
      <v-data-table
        style="width: 95%; border: 1px solid rgba(0, 0, 0, 0.12)"
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
                {text:'Nome', value:'name'},
                {text:'Pontos', value:'points'},
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

<style>

</style>
