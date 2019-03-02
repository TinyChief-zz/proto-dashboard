<template>
  <v-container class="login" fill-height>
    <v-layout align-center justify-center>
      <v-flex xs10 sm6 md4>
        <h1>Введите логин и пароль</h1>
        <v-form v-model="valid" ref="form">
          <v-container>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="user.login"
                  :rules="loginRules"
                  :counter="10"
                  label="Логин"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  v-model="user.password"
                  :rules="passwordRules"
                  label="Пароль"
                  required
                ></v-text-field>
              </v-flex>

              <v-checkbox v-model="checkbox" label="Запомнить?"></v-checkbox>
              <v-flex xs12>
                <v-btn color="primary" @click="handleLogIn">Войти</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      user: {
        login: null,
        password: null
      },
      loginRules: [
        v => !!v || 'Логин обязателен',
        v =>
          (v && v.length <= 10 && v.length >= 5) || 'Логин должен содержать не меньше 5 символов'
      ],
      passwordRules: [
        v => !!v || 'Пароль обязателен',
        v =>
          (v && v.length >= 4 && v.length <= 20) ||
          'Пароль должен содержать от 4 до 20 символов'
      ],
      checkbox: true,
      valid: true
    }
  },
  methods: {
    handleLogIn () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('logUserIn', this.user).then(res => {
          console.log(res)
          if (res.status === 'ok') {
            this.$router.push({ path: '/contacts' })
          }
        })
      } else {
        this.valid = false
      }
    }
  }
}
</script>
