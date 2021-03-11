<template>
  <div id="page">
    <AvbHeader />
    <v-card
      elevation="0"
      width="95%"
      class="mx-auto"
    >
      <v-tabs
        v-model="tabs"
        class="mx-auto"
        style="margin-top: 50px"
        fixed-tabs
        slider-color="secondary"
        color="secondary"
      >
        <v-tab>Definir Semana Atual</v-tab>
        <v-tab>Adicionar Jogos</v-tab>
        <v-tab>Definir resultados</v-tab>
        <v-tab>Atualizar pontuação usuários</v-tab>

        <!-- Definir semana atual -->
        <v-tab-item>
          <v-card>
            <v-card-title class="justify-center">
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
                  outlined
                />
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>

        <!-- Adicionar nova partida -->
        <v-tab-item>
          <v-card>
            <v-card-title class="justify-center">
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
                    v-model="timeA"
                    outlined
                    :items="times"
                    label="Time A"
                  />
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="timeB"
                    outlined
                    :items="times"
                    label="Time B"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-tab-item>

        <!-- Adicionar resultado -->
        <v-tab-item>
          <v-card>
            <v-card-title class="justify-center">
              Defina resultado para algum jogo ativo
            </v-card-title>
            <v-form>
              <v-row>
                <v-col cols="8">
                  <v-autocomplete
                    v-model="jogo"
                    placeholder="Selecione o jogo"
                    outlined
                    color="secondary"
                    :items="jogos"
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
                  >
                    <v-icon class="mr-2">
                      mdi-check
                    </v-icon> Salvar
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-if="jogo != null">
                <v-col cols="4">
                  <v-text-field
                    v-model="pointsA"
                    outlined
                    class="ml-auto"
                    style="width: 50%"
                    :label="jogo.timeA"
                    color="secondary"
                  />
                </v-col>
                <v-col cols="4" />
                <v-col cols="4">
                  <v-text-field
                    v-model="pointsB"
                    outlined
                    class="mr-auto"
                    style="width: 50%"
                    :label="jogo.timeB"
                    color="secondary"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-tab-item>

        <!-- Atualizar pontuação dos usuários -->
        <v-tab-item>
          <v-btn
            block
            class="ma-5"
            color="success"
          >
            <v-icon>mdi-refresh</v-icon> ATUALIZAR
          </v-btn>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import AvbHeader from '../components/AvbHeader'
export default {
    name: 'Admin',
    components: {
        AvbHeader
    },
    data:() => {
        return{
            tabs: null,
            jogos:[
                {id:0, timeA: 'Seahawks',  timeB:'Rams',      description: 'Seahawks vs Rams'},
                {id:1, timeA: '49ers',     timeB:'Cardinals', description: '49ers vs Cardinals'},
                {id:2, timeA: 'Dolphins',  timeB:'Patriots',  description: 'Dolphins vs Patriots'},
                {id:3, timeA: 'Chiefs',    timeB:'Broncos',   description: 'Chiefs vs Broncos'}
            ],
            jogo: null,
            pointsA: 0,
            pointsB: 0,
            timeA: '',
            timeB: '',
            times: [
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

<style>

</style>
