<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    height="100%"
  >
    <v-list-item>
      <v-list-item-icon>
        <v-icon>
          mdi-account
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>User</v-list-item-title>
        <v-list-item-subtitle style="font-size:10pt;">
          Configurações
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-btn
        icon
        @click.stop="mini = !mini"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider />

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    name: 'AvbMenuLateral',
    data: () => {
        return{
            drawer: true,
            items: [
                { title: 'Apostas', icon: 'mdi-tournament' },
                { title: 'Resultados', icon: 'mdi-scoreboard' },
                { title: 'Ranking', icon: 'mdi-trophy' },
                { title: 'Sair do App', icon: 'mdi-exit-to-app' },
            ],
            mini: true,
        }
    }
}
</script>

<style>

</style>
