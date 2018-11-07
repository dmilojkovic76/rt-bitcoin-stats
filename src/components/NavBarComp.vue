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

      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-start">
          <a @click="toggleMenu('navbarMenu')" class="navbar-item">
            <router-link to="/">Home</router-link>
          </a>

          <a @click="toggleMenu('navbarMenu')" class="navbar-item">
            <router-link to="/about">About</router-link>
          </a>
        </div>

        <div class="navbar-end">
          <div @click="toggleMenu('nav-lista')"
          class="navbar-item has-dropdown"
          id="nav-lista">
            <a class="navbar-link">
              {{ codeMsgd }}
            </a>
            <div class="navbar-dropdown is-right">
              <a @click="changeCurrency(cur)"
              v-for="cur in currencies"
              :key=cur.id
              class="navbar-item"><!-- TODO: currencies should be global variable -->
                {{ cur }}
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
</template>

<script>
export default {
  name: "NavBarComp",
  props: {
    codeMsgd: String,
  },
  methods: {
    toggleMenu(id) {
      const listaElem = document.querySelector(`#${id}`);
      listaElem.classList.toggle("is-active");
    },
    changeCurrency(c) {
      this.codeMsgd = c;
    },
  },
};
</script>

<style scoped>
</style>
