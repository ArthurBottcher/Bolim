<template>
  <div id="page">
    <AvbHeader />
    <v-container
      style="margin-top: 68px"
      fluid
      flat
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
        color="primary"
        class="mx-auto mb-4 text-none"
        @click="send(items)"
      >
        Enviar apostas
      </v-btn>

      <v-data-table
        :headers="headers"
        :items="items"
        hide-default-footer
        hide-default-header
        style="width: 95%; border: thin solid #676767"
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
                color="primary"
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
                color="primary"
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
                {text:'TimeA',      align: 'center',    value: 'teamA'      },
                {text:'PointsA',    align: 'center',    value: 'pointsA'    },
                {text:'X',          align: 'center',    value: 'x'          },
                {text:'PointsA',    align: 'center',    value: 'pointsB'    },
                {text:'TimeB',      align: 'center',    value: 'teamB'      },
            ],
            items:[
                {id:0, teamA: 'Seahawks',   pointsA:0,  teamB:'Rams',        pointsB:0, x:'vs'},
                {id:1, teamA: '49ers',      pointsA:0,  teamB:'Cardinals',   pointsB:0, x:'vs'},
                {id:2, teamA: 'Dolphins',   pointsA:0,  teamB:'Patriots',    pointsB:0, x:'vs'},
                {id:3, teamA: 'Chiefs',     pointsA:0,  teamB:'Broncos',     pointsB:0, x:'vs'}
            ]
        }
    },

    methods: {
        send(i){
            console.log(i)
        }
    }
}
</script>

<style lang="scss">
$background:  #1A3442;
$background2: #304854;

    #page{
        background-color: $background;
    }

    .colorizeBackground{
        background-color: $background2;
    }

    td{
        background-color: $background2;
    }

    v-edit-dialog{
        background-color: $background2;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
