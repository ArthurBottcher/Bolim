<template>
  <div>
    <v-app-bar
      dark
      color="background"
      dense
      flat
      style="border-bottom: thin solid #ddd"
      absolute
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      color="background"
      temporary
    >
      <v-list-item
        link
        @click="goToConfigs"
      >
        <v-list-item-icon
          class="text-center"
        >
          <v-icon color="text">
            mdi-cogs
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-center">
            User
          </v-list-item-title>
        </v-list-item-content>
        <v-btn
          icon
          @click.stop="drawer = !drawer"
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
          @click="routeTo(item)"
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

        <v-list-item
          link
          @click="goToAdmin"
        >
          <v-list-item-icon>
            <v-icon color="text">
              mdi-account-cog
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              Admin
            </v-list-item-title>
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
        v-model="infoDialog"
        width="60%"
        class="d-flex justify-center"
        transition="dialog-bottom-transition"
      >
        <v-card
          class="text-center"
          color="background2"
        >
          <v-card-title
            class="text-center justify-center"
            style="cursor:default"
          >
            Informações
          </v-card-title>
          <v-card-text style="cursor:default">
            Ao acertar o vencedor o você ganha 1 ponto, ao acertar o
            placar você ganha mais dois pontos, totalizando 3.
          </v-card-text>
          <v-btn
            class="mb-4 text-none"
            color="error"
            @click="infoDialog = false"
          >
            Fechar
          </v-btn>
        </v-card>
      </v-dialog>


      <v-dialog
        v-model="helpDialog"
        width="60%"
        class="d-flex justify-center"
        transition="dialog-bottom-transition"
      >
        <v-card
          class="text-center"
          color="background2"
        >
          <v-card-title
            class="text-center justify-center"
            style="cursor:default"
          >
            Entre em contato para obter ajuda
          </v-card-title>
          <v-card-text style="cursor:default">
            Entre no servidor do Discord e busce pelo canal de ajuda
            sobre o bolão. <br>
            Faça parte do grupo do Whatsapp para receber as
            atualizações e tirar dúvidas.<br>
            Nos siga no twitter e acompanhe as novidades.<br>
            Ou entre em contato pelo email:
          </v-card-text>
          <v-card-text style="font-size:10pt; font-weight:bold; cursor:default">
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
            class="mb-4 text-none"
            color="error"
            @click="helpDialog = false"
          >
            Fechar
          </v-btn>
        </v-card>
      </v-dialog>


      <v-dialog
        v-model="logoutDialog"
        width="30%"
      >
        <v-card color="background2">
          <v-card-title
            class="justify-center"
            style="cursor:default"
          >
            Você deseja realmente sair?
          </v-card-title>
          <v-card-actions class="justify-space-around">
            <v-btn
              color="success"
              class="mb-4 text-none"
            >
              Sair
            </v-btn>
            <v-btn
              class="mb-4 text-none"
              color="error"
              @click="logoutDialog = false"
            >
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-navigation-drawer>
  </div>
</template>

<script>
import router from '../routes'
export default {
    name: 'AvbHeader',
    data: () => {
        return {
            drawer: false,
            items: [
                { title: 'Home',        icon: 'mdi-home' },
                { title: 'Apostas',     icon: 'mdi-tournament' },
                { title: 'Resultados',  icon: 'mdi-scoreboard' },
                { title: 'Ranking',     icon: 'mdi-trophy' }
            ],
            itemsConfig: [
                { title: 'Infos',   icon: 'mdi-information' },
                { title: 'Ajuda',   icon: 'mdi-help-circle' },
                { title: 'Sair',    icon: 'mdi-arrow-left-bold-circle' }
            ],
            mini: true,
            helpDialog: false,
            logoutDialog: false,
            infoDialog: false
        }
    },
    methods: {
        goToHome() {
            if (this.$router.currentRoute.path != '/home') {
                router.push({ path: '/home' })
            }
            else return
        },

        openDialog(item) {
            if (item.title == 'Ajuda') {
                this.helpDialog = true
            } else if (item.title == 'Sair') {
                this.logoutDialog = true
            } else if (item.title == 'Infos') {
                this.infoDialog = true
            } else return
        },

        routeTo(item) {
            if (item.title == 'Apostas' && this.$router.currentRoute.path != '/bets') {
                router.push({ path: '/bets' })
            } else if (item.title == 'Resultados' && this.$router.currentRoute.path != '/results' ) {
                router.push({ path: '/results' })
            } else if (item.title == 'Ranking' && this.$router.currentRoute.path != '/ranking') {
                router.push({ path: '/ranking' })
            } else if (item.title == 'Home' && this.$router.currentRoute.path != '/home'){
                router.push({path: '/home'})
            } else return
        },

        goToAdmin() {
            if( this.$router.currentRoute.path != '/admin'){
                router.push({ path: '/admin' })
            }
            else return
        },

        goToConfigs() {
            if( this.$router.currentRoute.path != '/configs'){
                router.push({ path: '/configs' })
            } else return
        }
    }
}
</script>
<style lang="scss">
#title{
    cursor: pointer;
}
</style>
