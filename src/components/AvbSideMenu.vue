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
          @click="openDialog(item)"
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

    <v-dialog
      v-model="helpDialog"
      width="60%"
      class="d-flex justify-center"
      transition="dialog-bottom-transition"
    >
      <v-card class="text-center">
        <v-card-title class="text-center justify-center">
          Entre em contato para obter ajuda
        </v-card-title>
        <v-card-text>
          Entre no servidor do Discord e busce pelo canal de ajuda sobre o bolão. <br>
          Faça parte do grupo do Whatsapp para receber as atualizações e tirar dúvidas.
        </v-card-text>
        <v-card-actions class="justify-space-around pb-4">
          <v-btn icon>
            <v-icon color="#25d366">
              mdi-whatsapp
            </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="#7289da">
              mdi-discord
            </v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="#1da1f2">
              mdi-twitter
            </v-icon>
          </v-btn>
        </v-card-actions>
        <v-btn
          class="mb-4"
          color="error"
          @click="helpDialog = false"
        >
          Fechar
        </v-btn>
      </v-card>
    </v-dialog>
  </v-navigation-drawer>
</template>

<script>
export default {
    name: 'AvbSideMenu',
    components: { },
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
            helpDialog: false
        }
    },

    methods: {
        openDialog(item){
            if(item.title == 'Ajuda'){
                this.helpDialog = true
                item = ''
            }
        }
    }
}
</script>

<style>

</style>
