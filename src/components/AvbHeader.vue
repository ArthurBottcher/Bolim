<template>
  <v-app-bar
    dark
    dense
    color="primary"
    absolute
  >
    <v-avatar>Logo</v-avatar>
    <v-spacer />
    <v-toolbar-title
      id="title"
      color="text"
      style="font-weight:bold"
      @click="goToDashboard()"
    >
      <v-icon>mdi-football-helmet</v-icon>
      Bolim
    </v-toolbar-title>
    <v-spacer />
    <v-switch
      v-model="$vuetify.theme.dark"
      dark
      color="secondary"
      hide-details="true"
    />
  </v-app-bar>
</template>

<script>
import router from '../routes'
export default {
    name: 'AvbHeader',
    methods: {
        goToDashboard(){
            if(this.$router.currentRoute.path != '/dashboard'){
                router.push({path: '/dashboard'})
            }
        }
    }
}
</script>

<style>
    #title:hover{
        cursor: pointer
    }
</style>
