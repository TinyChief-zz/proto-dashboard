<template>
  <div id="app">
    <v-app>
      <template v-if="!user">
        <router-view/>
      </template>
      <template v-else>
        <div id="wrapper">
          <sidebar class="sidebar"/>
          <toolbar class="toolbar"/>
          <v-content>
            <router-view/>
          </v-content>
        </div>
      </template>
    </v-app>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Toolbar from '@/components/Toolbar'

export default {
  components: {
    Toolbar,
    Sidebar
  },
  data () {
    return {}
  },
  beforeMount () {
    if (!this.$store.getters.getUser) {
      this.$router.push({ path: '/login' })
    } else {
      this.$router.push({ path: '/contacts' })
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style lang="less">
#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: minmax(100px, min-content) 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas: "sidebar toolbar" "sidebar main";
}

.sidebar {
  grid-area: sidebar;
}

.toolbar {
  grid-area: toolbar;
}

main {
  grid-area: main;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
