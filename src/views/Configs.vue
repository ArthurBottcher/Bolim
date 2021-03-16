<template>
  <div
    id="page"
    class="d-flex justify-center"
  >
    <AvbHeader />
    <v-card
      style="margin-top:68px"
      width="90%"
      height="85%"
      class="pa-4"
      elevation="0"
      color="background2"
    >
      <v-card-title>
        <AvbAvatar :image="srcImage" />
        <p class="ma-0">
          Username
        </p>
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

      <v-expansion-panels
        flat
        class="panels"
      >
        <v-expansion-panel>
          <v-expansion-panel-header color="background2">
            Suas Informações
          </v-expansion-panel-header>
          <v-expansion-panel-content color="background2">
            <v-row>
              <v-col cols="4">
                <p>Nome:</p>
              </v-col>
              <v-col cols="4">
                <p>Email:</p>
              </v-col>
              <v-col cols="4">
                <p>Time Favorito:</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <p>Redes Sociais:</p>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <v-dialog v-model="dialogUpdateAccount">
      <v-card
        color="background2"
        height="85vh"
        class="pa-6"
      >
        <span class="ma-2 title">
          Configurações da conta
        </span>
        <v-card-title>
          <AvbFileUploadButton name="Username" />
        </v-card-title>
        <v-divider />
        <v-row class="px-4 pt-3">
          <v-col cols="4">
            <v-text-field
              outlined
              hide-details
              label="Nome"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              outlined
              hide-details
              label="Email"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              outlined
              hide-details
              label="Senha"
            />
          </v-col>
        </v-row>
        <v-row class="px-4">
          <v-col cols="4">
            <v-autocomplete
              outlined
              label="Time Favorito"
              background-color="background2"
            />
          </v-col>
        </v-row>
        <v-btn
          color="success"
          class="text-none"
        >
          Salvar
        </v-btn>
        <v-btn
          color="error"
          class="text-none"
          @click="closeDialog"
        >
          Cancelar
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AvbHeader from '../components/Avb-Header'
import AvbAvatar from '../components/Avb-Avatar'
import AvbFileUploadButton from '../components/Avb-FileUploadButton'
export default {
    name: 'Configs',
    components: {
        AvbHeader,
        AvbAvatar,
        AvbFileUploadButton
    },
    data: ()=>{
        return{
            dialogUpdateAccount:false,
            srcImage:''
        }
    },
    mounted() {
        this.active()
    },
    methods: {
        active(){
            this.srcImage = sessionStorage.getItem('userImage')
        },

        closeDialog(){
            this.dialogUpdateAccount = false
            this.active()
        }
    }
}
</script>

<style scoped lang="scss">
$background: #1A3442;
$background2: #304854;

    #page{
        background-color: $background;
    }

    .imagePreviewWrapper {
        width: 50px;
        height: 50px;
        display: block;
        margin: 0 auto;
        background-size: contain;
        background-position: center center;
    }

    p{
        cursor: default;
    }

    .panels{
        border: 1px solid #ddd;
        background-color: $background2;
    }

</style>
