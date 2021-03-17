<template>
  <v-card
    elevation="0"
    class="text-center pa-4 "
    width="100%"
    color="background2"
  >
    <v-card-title class="primary--text justify-center">
      Top 5 <v-icon
        class="ml-4"
        color="primary"
      >
        mdi-medal
      </v-icon>
    </v-card-title>
    <v-list
      dense
      color="background2"
    >
      <v-list-item
        v-for="top in tops"
        :key="top.name"
        class="ma-2"
      >
        <v-list-item-title style="cursor:default">
          <AvbAvatar
            :image="top.image"
            :size="'48px'"
          />
          {{ top.name }}
        </v-list-item-title>
        <v-list-item-subtitle style="cursor:default">
          {{ top.points }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import AvbAvatar from '../components/Avb-Avatar'
export default {
    name: 'AvbTopUsers',
    components: {
        AvbAvatar
    },
    data: () => {
        return{
            tops: [
                {name: 'Teste1', points: 30+'pts', image:''},
                {name: 'Teste2', points: 25+'pts', image:''},
                {name: 'Teste3', points: 23+'pts', image:''},
                {name: 'Teste4', points: 20+'pts', image:''},
                {name: 'Teste5', points: 15+'pts', image:''}
            ],
        }
    },
    mounted() {
        this.active()
    },
    methods: {
        active(){

        },
    }
}
</script>

<style>
</style>
