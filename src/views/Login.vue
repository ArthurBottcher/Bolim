<template>
  <div
    id="divLogin"
    class="d-flex justify-center align-center"
  >
    <v-card
      elevation="2"
      max-width="400px"
      min-width="300px"
      class="pa-3"
      shaped
    >
      <v-card-title>Login</v-card-title>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-account"
          required
          :rules="emailRules"
        />
        <v-text-field
          v-model="password"
          label="Senha"
          prepend-icon="mdi-lock"
          :rules="passwordRules"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
          @keydown.enter="login"
        />
        <v-btn
          class="mx-auto"
          color="success"
          block
          :disabled="!valid || (!email || !password)"
          @click="login"
        >
          Entrar
        </v-btn>
        <v-btn
          class="mx-auto my-2"
          color="secondary"
          block
          @click="dialogRegister=true"
        >
          Cadastre-se
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>

//import router from '../routes/index'


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
                v => /.+@.+\..+/.test(v) || 'E-mail inválido',
            ],
            nameRules: [v => !!v || 'Nome é obrigatório'],
            passwordRules: [v => !!v || 'Senha é obrigatório'],
        }
    },

    mounted() {},

    methods: {
        async login(){},
    }
}

</script>

<style lang="css">

    #divLogin {
        height: 100vh;
        width: 100vw;
        background: #dedede;
    }

</style>
