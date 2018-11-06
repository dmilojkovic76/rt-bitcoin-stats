<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/#/">
          Real Time Cripto Currency Statistics
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">Home</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/about">About</router-link>
          </a>
        </div>

        <div class="navbar-end">
          <div @click="showCurrenciesList()" class="navbar-item has-dropdown" id="nav-lista">
            <a class="navbar-link">
              Valute
            </a>
            <div class="navbar-dropdown is-right">
              <a class="navbar-item">
                Item1
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    text: String,
  },
};
</script>

<style scoped>
</style>