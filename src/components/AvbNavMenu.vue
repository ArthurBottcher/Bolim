<template>
  <div>
    <v-list
      dense
      class="d-flex pa-0 ma-0"
      color="primary"
      rounded
    >
      <!-- Sub pages -->
      <v-list-item
        v-for="item in items"
        :key="item.title"
        dark
        link
        class="list-item mx-1"
        @click="routeTo(item)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Menu configuração -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="text-none list-item"
            text
            rounded
            height="40px"
            style="font-size: 0.8125rem; font-weight: 500; line-height: 1rem; letter-spacing: normal"
            v-bind="attrs"
            v-on="on"
          >
            Configurações
          </v-btn>
        </template>
        <v-list
          dense
          dark
          tile
          class="pa-2"
          color="primary"
        >
          <v-list-item
            v-for="item in itemsConfig"
            :key="item.title"
            link
            @click="openDialog(item)"
          >
            <v-list-item-icon>
              <v-icon>
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
      </v-menu>
    </v-list>



    <!-- dialog infos -->
    <v-dialog
      v-model="infoDialog"
      width="60%"
      class="d-flex justify-center"
      transition="dialog-bottom-transition"
    >
      <v-card class="text-center">
        <v-card-title class="text-center justify-center">
          Informações
        </v-card-title>
        <v-card-text>
          Ao acertar o vencedor o você ganha 1 ponto, ao acertar o placar você ganha mais dois pontos, totalizando 3.
        </v-card-text>
        <v-btn
          class="mb-4"
          color="error"
          @click="infoDialog = false"
        >
          Fechar
        </v-btn>
      </v-card>
    </v-dialog>

    <!-- dialog ajuda -->
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
          Faça parte do grupo do Whatsapp para receber as atualizações e tirar dúvidas.<br>
          Nos siga no twitter e acompanhe as novidades.<br>
          Ou entre em contato pelo email:
        </v-card-text>
        <v-card-text style="font-size:10pt; font-weight:bold">
          <v-icon
            color="#c71610"
            class="mr-2"
          >
            mdi-email
          </v-icon>arthurbottcher@gmail.com
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

    <!-- dialog sair -->
    <v-dialog
      v-model="logoutDialog"
      width="30%"
    >
      <v-card>
        <v-card-title class="justify-center">
          Você deseja realmente sair?
        </v-card-title>
        <v-card-actions class="justify-space-around">
          <v-btn
            color="success"
            class="mb-4"
          >
            Sair
          </v-btn>
          <v-btn
            class="mb-4"
            color="error"
            @click="logoutDialog = false"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import router from '../routes'
export default {
    name: 'AvbNavMenu',
    data: () => {
        return{
            drawer: false,
            items: [
                { title: 'Home', icon: 'mdi-home' },
                { title: 'Apostas', icon: 'mdi-tournament' },
                { title: 'Resultados', icon: 'mdi-scoreboard' },
                { title: 'Ranking', icon: 'mdi-trophy' },

            ],
            itemsConfig:[
                { title: 'Perfil', icon: 'mdi-account' },
                { title: 'Infos', icon: 'mdi-information' },
                { title: 'Ajuda', icon: 'mdi-help-circle' },
                { title: 'Sair', icon: 'mdi-arrow-left-bold-circle' },
            ],
            mini: true,
            helpDialog: false,
            logoutDialog: false,
            infoDialog: false,
        }
    },
    methods: {
        goToHome(){
            if(this.$router.currentRoute.path != '/home'){
                router.push({path: '/home'})
            }
        },

        openDialog(item){
            if(item.title == 'Ajuda'){
                this.helpDialog = true
            }else if (item.title == 'Sair'){
                this.logoutDialog = true
            }else if (item.title == 'Infos'){
                this.infoDialog = true
            }else if (item.title == 'Perfil'){
                router.push({path: '/configs'})
            }
        },

        routeTo(item){
            if(item.title == 'Apostas' && this.$router.currentRoute.path != '/bets'){
                router.push({path: '/bets'})
            }else if (item.title == 'Resultados' && this.$router.currentRoute.path != '/results'){
                router.push({path: '/results'})
            }else if (item.title == 'Ranking' && this.$router.currentRoute.path != '/ranking'){
                router.push({path:'/ranking'})
            }else if (item.title == 'Home' && this.$router.currentRoute.path != '/home'){
                router.push({path: '/home'})
            }
        },

        goToAdmin(){
            if(this.$router.currentRoute.path != '/admin'){
                router.push({path: '/admin'})
            } else return
        },

        goToConfigs(){
            router.push({path: '/configs'})
        }
    }
}
</script>

<style lang="scss">
$border: #204d85;
.list-item{
  border: 1.5px solid $border
}
</style>
