<template>
  <v-card
    elevation="0"
    class="text-center pa-3 "
    width="100%"
    color="background"
  >
    <v-card-title class="primary--text justify-center">
      Top 5 <v-icon
        class="ml-3"
        color="primary"
      >
        mdi-medal
      </v-icon>
    </v-card-title>
    <v-list
      dense
      color="background"
    >
      <v-list-item
        v-for="top in tops"
        :key="top.name"
        class="ma-1"
      >
        <v-list-item-title>
          <v-avatar
            color="grey lighten-5"
            size="48"
            class="mr-5"
          >
            <div
              class="imagePreviewWrapper"
              :style="{'background-image': `url(${top.image})`}"
            />
          </v-avatar>
          {{ top.name }}
        </v-list-item-title>
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
.imagePreviewWrapper {
    width: 32px;
    height: 32px;
    display: block;
    margin: 0 auto;
    background-size: contain;
    background-position: center center;
}
</style>
