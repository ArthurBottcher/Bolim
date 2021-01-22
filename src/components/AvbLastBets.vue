<template>
  <v-card
    elevation="0"
    class="text-center pa-3"
    width="100%"
  >
    <v-card-title class="accent--text justify-center ">
      Suas ultimas apostas
    </v-card-title>
    <v-list dense>
      <v-list-item
        v-for="i in items"
        :key="i.id"
      >
        <v-list-item-title style="border-bottom: 1px solid rgba(0, 0, 0, 0.12">
          {{ i.timeA }}: {{ i.pointsA }} x {{ i.pointsB }}: {{ i.timeB }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
    name: 'AvbLastBets',
    data: () => {
        return {
            items:[
                {id:0, timeA: 'Seahawks',   pointsA:0, timeB:'Rams',        pointsB:0, x:'vs'},
                {id:1, timeA: '49ers',      pointsA:0, timeB:'Cardinals',   pointsB:0, x:'vs'},
                {id:2, timeA: 'Dolphins',   pointsA:0, timeB:'Patriots',    pointsB:0, x:'vs'},
                {id:3, timeA: 'Chiefs',     pointsA:0, timeB:'Broncos',     pointsB:0, x:'vs'}
            ]
        }
    }
}
</script>

<style>

</style>
