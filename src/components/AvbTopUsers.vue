<template>
  <v-card
    elevation="0"
    class="text-center pa-3 "
    width="100%"
  >
    <v-card-title class="secondary--text justify-center">
      Top 5 <v-icon
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
</template>

<script>
export default {
    name: 'AvbTopUsers',
    data: () => {
        return{
            tops: [
                {name: 'Teste1', points: 30+'pts'},
                {name: 'Teste2', points: 25+'pts'},
                {name: 'Teste3', points: 23+'pts'},
                {name: 'Teste4', points: 20+'pts'},
                {name: 'Teste5', points: 15+'pts'}
            ],

        }
    }
}
</script>

<style>

</style>
