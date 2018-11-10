<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
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
          <b-dropdown>
            <a class="navbar-item" slot="trigger">
                <span>{{ currency }}</span>
                <b-icon icon="menu-down"></b-icon>
            </a>

            <b-dropdown-item v-for="cur in currencies" :key=cur.id @click="changeCurrency(cur); toggleMenu('navbarMenuClose')">
              {{ cur }}
            </b-dropdown-item>
          </b-dropdown>
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
