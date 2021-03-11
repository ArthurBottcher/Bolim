<template>
  <div>
    <v-app-bar
      dark
      color="primary"
      dense
      absolute
    >
      <!-- <v-spacer /> -->
      <v-toolbar-title
        id="title"
        color="text"
        style="font-weight:bold"
        @click="goToHome()"
      >
        <v-icon>mdi-football-helmet</v-icon>
        Bolim
      </v-toolbar-title>
      <v-spacer />
      <AvbNavMenu />
      <v-spacer />

      <v-menu
        offset-y
      >
        <template
          v-slot:activator="{ on, attrs }"
        >
          <v-btn
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list class="d-flex justify-space-between px-2">
          <v-list-item class="d-flex justify-space-between px-2">
            <v-icon
              color="text"
            >
              mdi-theme-light-dark
            </v-icon>
            <v-switch
              v-model="$vuetify.theme.dark"
              class="my-0 py-0 mx-1"
              dark
              color="gray"
              hide-details="true"
            />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import router from '../routes'
import AvbNavMenu from './AvbNavMenu'
export default {
    name: 'AvbHeader',
    components: {AvbNavMenu},
    methods:{
        goToHome(){
            if(this.$router.currentRoute.path != '/home'){
                router.push({path: '/home'})
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
