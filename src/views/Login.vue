<template>
  <div
    id="divLogin"
    class="d-flex justify-center align-center"
  >
    <v-card
      elevation="2"
      color="background"
      class="pa-6 d-flex justify-space-between "
      shaped
    >
      <v-img
        src="../assets/bets.png"
        width="300px"
        contain
        aspect-ratio="16/9"
        class="mx-2"
      />
      <v-container>
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
            style="width:100%"
          />
          <v-text-field
            v-model="password"
            label="Senha"
            filled
            prepend-inner-icon="mdi-lock"
            :rules="passwordRules"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            @keydown.enter="login"
          />
          <v-btn
            class="mx-auto"
            color="success"
            :disabled="!valid || !email || !password"
            @click="login"
          >
            Entrar
          </v-btn>
          <!-- <v-btn
            class="mx-auto my-2"
            color="secondary"
            block
            text
            @click="dialogRegister = true"
          >
            Cadastre-se
          </v-btn> -->
          <v-subheader>
            Não possui uma conta?<span
              class="secondary--text ml-1"
              @click="dialogRegister = true"
            > Cadastre-se</span>
          </v-subheader>
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

<style lang="css">
#divLogin {
    height: 100%;
    width: 100vw;
    background: #dedede;
}
</style>
