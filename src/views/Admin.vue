<template>
  <div id="page">
    <AvbHeader />
    <v-card
      elevation="0"
      width="95%"
      color="background"
      class="mx-auto"
    >
      <v-tabs
        v-model="tabs"
        class="mx-auto mt-12"
        fixed-tabs
        slider-color="primary"
        color="primary"
        background-color="background"
      >
        <v-tab> Definir Semana Atual</v-tab>
        <v-tab>Adicionar Jogos</v-tab>
        <v-tab>Definir resultados</v-tab>
        <v-tab>Atualizar pontuação usuários</v-tab>

        <!-- Definir semana atual -->
        <v-tab-item class="itemsTabs">
          <v-card
            color="background2"
            class="pa-4"
            elevation="0"
          >
            <v-card-title
              class="justify-center"
              style="cursor:default"
            >
              Definir a semana atual
            </v-card-title>
            <v-row class="justify-center">
              <v-col
                cols="6"
              >
                <v-autocomplete
                  :items="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]"
                  class="mx-auto"
                  style="widht:150px"
                  label="Week atual"
                  background-color="background2"

                  outlined
                />
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>

        <!-- Adicionar nova partida -->
        <v-tab-item class="itemsTabs">
          <v-card
            color="background2"
            class="pa-4"
            elevation="0"
          >
            <v-card-title
              class="justify-center"
              style="cursor:default"
            >
              Adicionar jogo para apostar
            </v-card-title>
            <v-form>
              <v-row>
                <v-col
                  cols="2"
                >
                  <v-text-field
                    outlined
                    label="Week"
                    type="number"
                  />
                </v-col>
                <v-col cols="6" />
                <v-col
                  cols="4"
                  class="d-flex justify-center"
                >
                  <v-btn
                    color="success"
                    class="text-none"
                  >
                    <v-icon class="mr-2">
                      mdi-plus
                    </v-icon> Adicionar
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="teamA"
                    outlined
                    :items="teams"
                    label="Time A"
                    background-color="background2"
                  />
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="teamB"
                    outlined
                    :items="teams"
                    label="Time B"
                    background-color="background2"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-tab-item>

        <!-- Adicionar resultado -->
        <v-tab-item class="itemsTabs">
          <v-card
            color="background2"
            class="pa-4"
            elevation="0"
          >
            <v-card-title
              class="justify-center"
              style="cursor:default"
            >
              Defina resultado para algum jogo ativo
            </v-card-title>
            <v-form>
              <v-row>
                <v-col cols="8">
                  <v-autocomplete
                    v-model="game"
                    placeholder="Selecione o jogo"
                    outlined
                    background-color="background2"
                    :items="games"
                    item-text="description"
                    item-value="item"
                    :return-object="true"
                  />
                </v-col>
                <v-col
                  cols="4"
                  class="d-flex justify-center"
                >
                  <v-btn
                    color="success"
                    class="text-none"
                  >
                    <v-icon class="mr-2">
                      mdi-check
                    </v-icon> Salvar
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-if="game != null">
                <v-col cols="4">
                  <v-text-field
                    v-model="pointsA"
                    outlined
                    class="ml-auto"
                    style="width: 50%"
                    :label="game.teamA"
                    color="primary"
                  />
                </v-col>
                <v-col cols="4" />
                <v-col cols="4">
                  <v-text-field
                    v-model="pointsB"
                    outlined
                    class="mr-auto"
                    style="width: 50%"
                    :label="game.teamB"
                    color="primary"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-tab-item>

        <!-- Atualizar pontuação dos usuários -->
        <v-tab-item class="colorizeBackground pa-6 itemsTabs">
          <v-btn
            block
            color="success"
            class="text-none"
          >
            <v-icon>mdi-refresh</v-icon> Atualizar
          </v-btn>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import AvbHeader from '../components/Avb-Header'
export default {
    name: 'Admin',
    components: {
        AvbHeader
    },
    data:() => {
        return{
            tabs: null,
            games:[
                {id:0, teamA: 'Seahawks',  teamB:'Rams',      description: 'Seahawks vs Rams'},
                {id:1, teamA: '49ers',     teamB:'Cardinals', description: '49ers vs Cardinals'},
                {id:2, teamA: 'Dolphins',  teamB:'Patriots',  description: 'Dolphins vs Patriots'},
                {id:3, teamA: 'Chiefs',    teamB:'Broncos',   description: 'Chiefs vs Broncos'}
            ],
            game: null,
            pointsA: 0,
            pointsB: 0,
            teamA: '',
            teamB: '',
            teams: [
                'Cardinals',
                'Seahawks',
                '49ers',
                'Rams',
                'Saints',
                'Buccaneers',
                'Falcons',
                'Panthers',
                'Vikings',
                'Packers',
                'Bears',
                'Lions',
                'Washigton',
                'Eagles',
                'Giants',
                'Cowboys',

            ]
        }
    }
}
</script>

<style lang="scss">
$background: #1A3442;
$background2: #304854;

    #page{
        height: 100vh;
        width: 100%;
        background-color: $background;
    }

    .colorizeBackground{
        background-color: $background2;
    }


    .itemsTabs{
        min-height: 320px;
        background-color: $background2;
    }

    .theme--dark.v-list {
        background-color: $background2;
    }

</style>
