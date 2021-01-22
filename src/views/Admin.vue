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
        <v-tab>Adicionar Jogos</v-tab>
        <v-tab>Definir resultados</v-tab>
        <v-tab>Atualizar pontuação usuários</v-tab>


        <v-tab-item>
          <v-card>
            <v-card-title class="justify-center">
              Adicionar jogo para apostar
            </v-card-title>
            <v-form>
              <v-row>
                <v-col cols="2">
                  <v-text-field
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
                    :items="times"
                    label="Time A"
                  />
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="timeB"
                    :items="times"
                    label="Time B"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-tab-item>

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
                    class="ml-auto"
                    style="width: 50%"
                    :label="jogo.timeA"
                  />
                </v-col>
                <v-col cols="4" />
                <v-col cols="4">
                  <v-text-field
                    v-model="pointsB"
                    class="mr-auto"
                    style="width: 50%"
                    :label="jogo.timeB"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-tab-item>

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
