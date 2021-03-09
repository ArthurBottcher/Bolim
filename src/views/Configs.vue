<template>
  <div id="page">
    <AvbHeader />
    <v-card style="margin-top:68px">
      <v-card-title>
        <v-avatar
          color="grey lighten-2"
          size="66"
          class="mr-5"
        />
        Arthur V. Bottcher
        <v-spacer />
        <v-btn
          text
          color="primary"
          class="text-none"
          @click="dialogUpdateAccount = true"
        >
          Edite seu perfil
        </v-btn>
      </v-card-title>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Suas Informações</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="4">
                <p label="text" />
              </v-col>
              <v-col cols="4">
                <p label="text" />
              </v-col>
              <v-col cols="4">
                <p
                  label="text"
                  readonly
                />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <v-dialog v-model="dialogUpdateAccount">
      <v-card height="85vh">
        <h2 class="ma-2">
          Configurações da conta
        </h2>
        <v-card-title>
          <AvbFileUploadButton />
        </v-card-title>
        <v-divider />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AvbHeader from '../components/AvbHeader'
import AvbFileUploadButton from '../components/AvbFileUploadButton'
export default {
    name: 'Configs',
    components: {
        AvbHeader,
        AvbFileUploadButton
    },
    data: ()=>{
        return{
            dialogUpdateAccount:false,
            srcImage:''
        }
    }
}
</script>

<style>

</style>
