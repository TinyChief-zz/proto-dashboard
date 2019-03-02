<template>
  <v-navigation-drawer permanent class="indigo darken-1" dark>
    <v-layout wrap class="sidebar">
      <v-flex xs12>
        <v-flex pa-2>
          <h1 class="display-2 font-weight-black">{{ "do it".toUpperCase() }}</h1>
        </v-flex>

        <v-divider></v-divider>
        <v-list dense class="pt-0">
          <v-list-tile v-for="item in items" :key="item.title" @click="handleRoute(item.path)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex align-self-end xs12>
        <v-list dense>
          <v-list-tile class="exit" @click="handleExit">
            <v-list-tile-action>
              <v-icon>arrow_back</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Выйти</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Контакты', icon: 'dashboard', path: '/contacts' },
        { title: 'Графики', icon: 'question_answer', path: '/charts' },
        { title: 'Данные', icon: 'question_answer', path: '/data' }
      ],
      right: null
    }
  },
  methods: {
    handleRoute (path) {
      this.$router.push({ path })
    },
    handleExit () {
      this.$store.dispatch('logUserOut')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less">
.sidebar {
  height: 100%;
}
.v-list__tile {
  height: 52px !important;
}
</style>
