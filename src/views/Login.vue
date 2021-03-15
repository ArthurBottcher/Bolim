<template>
  <div
    id="divLogin"
    class="d-flex justify-center align-center"
  >
    <v-card
      elevation="2"
      width="70%"
      color="background2"
      class="pa-6 d-flex justify-space-between "
      shaped
    >
      <v-img
        v-if="!$vuetify.breakpoint.mobile"
        src="../assets/bets.png"
        width="400px"
        contain
        aspect-ratio="16/9"
        class="mx-2"
      />
      <v-container class="px-6">
        <v-card-title class="justify-center">
          Login
        </v-card-title>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="d-flex flex-column align-center"
        >
          <v-text-field
            v-model="email"
            label="Email"
            prepend-inner-icon="mdi-email"
            required
            filled
            :rules="emailRules"
            style="width:80%"
          />
          <v-text-field
            v-model="password"
            label="Senha"
            filled
            prepend-inner-icon="mdi-lock"
            :rules="passwordRules"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            style="width:80%"
            @click:append="show = !show"
            @keydown.enter="login"
          />
          <v-btn
            class="mx-auto text-none"
            color="success"
            width="60%"
            :disabled="!valid || !email || !password"
            @click="login"
          >
            Entrar
          </v-btn>

          <span class="mt-3 caption">
            Não possui uma conta?
          </span>
          <span
            class="primary--text body-2 font-weight-bold"
            @click="dialogRegister = true"
          >
            Cadastre-se
          </span>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
    name: 'Login',
    components: {},

    data: () => {
        return {
            valid: false,
            show: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail é obrigatório',
                v => /.+@.+\..+/.test(v) || 'E-mail inválido'
            ],
            nameRules: [v => !!v || 'Nome é obrigatório'],
            passwordRules: [v => !!v || 'Senha é obrigatório']
        }
    },

    mounted() {
        swal({title:'Teste', text: 'teste', buttons:{text:'teste'}})
    },

    methods: {
        async login() {}
    }
}
</script>

<style lang="scss">
$background: #1A3442;
$background2: #304854;
    #divLogin {
        height: 100%;
        width: 100vw;
        background: $background;
    }

    .swal-modal {
        border-radius: 8px;
    }

    .swal-title {
        font-family:Arial, Helvetica, sans-serif;
        margin: 0px;
        font-size: 24px;
        margin-bottom: 28px;
    }

    .swal-text {
        font-family:Arial, Helvetica, sans-serif;
        padding: 17px;
        display: block;
        margin: 22px;
        text-align: center;
    }

    .swal-button {
        padding: 7px 19px;
        border-radius: 2px;
        background-color: #0cd664;
        font-size: 16px;
        border: none;
        font-family:Arial, Helvetica, sans-serif;
    }
</style>
