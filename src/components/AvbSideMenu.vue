<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    height="100%"
    color="background2"
  >
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="text">
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
        <v-icon color="text">
          mdi-chevron-left
        </v-icon>
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
          <v-icon color="text">
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-divider />
      <v-list dense>
        <v-list-item
          v-for="item in itemsConfig"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon color="text">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
    name: 'AvbSideMenu',
    data: () => {
        return{
            drawer: true,
            items: [
                { title: 'Apostas', icon: 'mdi-tournament' },
                { title: 'Resultados', icon: 'mdi-scoreboard' },
                { title: 'Ranking', icon: 'mdi-trophy' },

            ],
            itemsConfig:[
                { title: 'Informações', icon: 'mdi-information' },
                { title: 'Ajuda', icon: 'mdi-help-circle' },
                { title: 'Sair do App', icon: 'mdi-arrow-left-bold-circle' },
            ],
            mini: true,
        }
    }
}
</script>

<style>

</style>
