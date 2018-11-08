<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Real Time Cripto Currency Statistics
        </a>

        <a @click="toggleMenu('navbarMenu')"
        role="button"
        data-target="navbarMenu"
        class="navbar-burger burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" :class="{ 'is-active': brgrMnuOpn }" class="navbar-menu">
        <div class="navbar-start">
          <a @click="toggleMenu('navbarMenuClose')" class="navbar-item" href="/">
            Home
          </a>

          <a @click="toggleMenu('navbarMenuClose')" class="navbar-item" href="/">
            About
          </a>
        </div>

        <div class="navbar-end">
          <div :class="{ 'is-active': currncsMnuOpn }" class="navbar-item has-dropdown"
          id="nav-lista">
            <a class="navbar-link" @click="toggleMenu('nav-lista')">
              {{ currency }}
            </a>
            <div class="navbar-dropdown is-right">
              <a @click="changeCurrency(cur); toggleMenu('navbarMenuClose'); toggleMenu('nav-listaClose')"
              v-for="cur in currencies"
              :key=cur.id
              class="navbar-item">
                {{ cur }}
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";


export default {
  name: "NavBarComp",
  props: {
    codeMsgd: String,
  },
  computed: {
    ...mapState(["brgrMnuOpn", "currncsMnuOpn", "currency", "currencies", "BPI_rate"]),
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["toggleMenu", "changeCurrency"]),
  },
};
</script>

<style scoped>
</style>
