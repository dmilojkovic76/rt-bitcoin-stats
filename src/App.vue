<template>
  <div id="app">
    <NavBar />>
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
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      lista: true,
    };
  },
  methods: {
    // listaValutaURL: "https://api.coindesk.com/v1/bpi/supported-currencies.json",
    // Na adresu za istorijke treba dodati <CODE> a ako treba i ?start=\<VALUE\>&end=\<VALUE\>
    // istorijskiBPIURL: "https://api.coindesk.com/v1/bpi/historical/close.json?currency=",

    showCurrenciesList() {
      const listaElem = document.querySelector("#nav-lista");
      listaElem.classList.toggle("is-active");
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
