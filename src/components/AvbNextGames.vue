<template>
  <v-card
    elevation="0"
    class="text-center pa-3"
    width="100%"
    color="background2"
  >
    <v-card-title class="primary--text justify-center">
      Jogos da rodada
    </v-card-title>
    <v-list
      color="background2"
      dense
    >
      <v-list-item
        v-for="i in items"
        :key="i.id"
      >
        <v-list-item-title class="pa-3 ma-1 rounded">
          {{ i.teamA }} {{ i.x }} {{ i.teamB }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
    name: 'AvbNextGames',
    data: () => {
        return{
            items:[
                {id:0, teamA: 'Seahawks',   pointsA:0, teamB:'Rams',        pointsB:0, x:'vs'},
                {id:1, teamA: '49ers',      pointsA:0, teamB:'Cardinals',   pointsB:0, x:'vs'},
                {id:2, teamA: 'Dolphins',   pointsA:0, teamB:'Patriots',    pointsB:0, x:'vs'},
                {id:3, teamA: 'Chiefs',     pointsA:0, teamB:'Broncos',     pointsB:0, x:'vs'}
            ]
        }
    }
}
</script>

<style>

</style>
