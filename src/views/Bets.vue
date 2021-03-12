<template>
  <div id="page">
    <AvbHeader />
    <v-container
      style="margin-top: 68px"
      fluid
      class="pa-3 d-flex flex-column justify-center"
    >
      <h2
        class="text-center"
      >
        Faça suas apostas
      </h2>
      <v-subheader class="justify-center">
        Clique nos valores para editar
      </v-subheader>
      <v-btn
        color="secondary"
        class="mx-auto mb-4"
        @click="envia(items)"
      >
        Enviar apostas
      </v-btn>

      <v-data-table
        :headers="headers"
        :items="items"
        hide-default-footer
        hide-default-header
        style="width: 95%; border: 1px solid rgba(0, 0, 0, 0.12)"
        class="mx-auto colorizeBackground"
      >
        <template v-slot:[`item.pointsA`]="{ item}">
          <v-edit-dialog
            :return-value.sync="item.pointsA"
            class="colorizeBackground"
          >
            {{ item.pointsA }}
            <template v-slot:input>
              <v-text-field
                v-model="item.pointsA"
                color="secondary"
                label="Pontuação"
                single-line
                type="number"
              />
            </template>
          </v-edit-dialog>
        </template>

        <template v-slot:[`item.pointsB`]="{ item }">
          <v-edit-dialog
            :return-value.sync="item.pointsB"
          >
            {{ item.pointsB }}
            <template v-slot:input>
              <v-text-field
                v-model="item.pointsB"
                color="secondary"
                label="Pontuação"
                single-line
                type="number"
              />
            </template>
          </v-edit-dialog>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>

import AvbHeader from '../components/AvbHeader'

export default {
    name: 'Bets',
    components: {AvbHeader},
    data: () => {
        return{
            x: 'x',
            headers: [
                {text:'TimeA', align: 'center', value: 'timeA'},
                {text:'PointsA', align: 'center', value: 'pointsA'},
                {text:'X', align: 'center', value: 'x'},
                {text:'PointsA', align: 'center', value: 'pointsB'},
                {text:'TimeB', align: 'center', value: 'timeB'},
            ],
            items:[
                {id:0, timeA: 'Seahawks',   pointsA:0, timeB:'Rams',        pointsB:0, x:'vs'},
                {id:1, timeA: '49ers',      pointsA:0, timeB:'Cardinals',   pointsB:0, x:'vs'},
                {id:2, timeA: 'Dolphins',   pointsA:0, timeB:'Patriots',    pointsB:0, x:'vs'},
                {id:3, timeA: 'Chiefs',     pointsA:0, timeB:'Broncos',     pointsB:0, x:'vs'}
            ]
        }
    },

    methods: {
        envia(i){
            console.log(i)
        }
    }
}
</script>

<style lang="scss">
$background: #415662;
.colorizeBackground{
    background-color: $background;
}

td{
    background-color: $background;
}

v-edit-dialog{
    background-color: $background;
}
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
