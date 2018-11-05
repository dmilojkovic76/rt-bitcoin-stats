<template>
  <div id="app">
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
    <router-view class="container"/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: true,
    };
  },
  methods: {
    //listaValutaURL: "https://api.coindesk.com/v1/bpi/supported-currencies.json",
    // Na adresu za istorijke treba dodati <CODE> a ako treba i ?start=\<VALUE\>&end=\<VALUE\>
    //istorijskiBPIURL: "https://api.coindesk.com/v1/bpi/historical/close.json?currency=",

    showCurrenciesList() {
      const listaElem = document.querySelector('#nav-lista');
      listaElem.classList.toggle('is-active');
    },

    generateTrenutniURL() {
      // Na adresu za trenutni treba dodati "<CODE>.json" na kraju da bi bio validan URL
      const trenutniBPIURL = "https://api.coindesk.com/v1/bpi/currentprice/";
      fetch(trenutniBPIURL)
        .then(result => result.parseJSON)
        .then((data) => {
          console.log(data);
        });
    },
  },
  mounted() {
    this.generateTrenutniURL();
  },
};
</script>


<style>
</style>
