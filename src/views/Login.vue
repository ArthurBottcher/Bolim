<template>
  <div
    id="divLogin"
    class="d-flex justify-center align-center"
  >
    <v-card
      elevation="2"
      width="70%"
      color="background"
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
            class="mx-auto"
            color="success"
            width="60%"
            :disabled="!valid || !email || !password"
            @click="login"
          >
            Entrar
          </v-btn>
          <!-- <v-btn
            class="mx-auto my-2"
            color="primary"
            block
            text
            @click="dialogRegister = true"
          >
            Cadastre-se
          </v-btn> -->

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

    mounted() {},

    methods: {
        async login() {}
    }
}
</script>

<style lang="scss">
$background: #415662;
    #divLogin {
        height: 100%;
        width: 100vw;
        background: $background;
    }
</style>
