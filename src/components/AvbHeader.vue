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
      color="text"
      style="font-weight:bold"
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
export default {
    name: 'AvbHeader'
}
</script>

<style>

</style>
