import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    brgrMnuOpn: false,
    currncsMnuOpn: false,
    currency: "EUR",
    currencies: ["EUR", "USD", "BTC", "CAD", "CHF", "GBP", "HKD", "RSD"],
    BPI_rate: 0,
  },
  mutations: {
    changeCurrency(state, c) {
      state.currency = c;
    },
    toggleMenu(state, id) {
      console.log(state, id);
      if (id === "navbarMenu") {
        state.brgrMnuOpn = !state.brgrMnuOpn;
      }
      if (id === "navbarMenuClose") {
        state.brgrMnuOpn = false;
      }

      if (id === "nav-lista") {
        state.currncsMnuOpn = !state.currncsMnuOpn;
      }
      if (id === "nav-listaClose") {
        state.currncsMnuOpn = false;
      }
    },
  },
  actions: {
    getTheData(CODE) {
      fetch(`https://api.coindesk.com/v1/bpi/currentprice/${CODE}.json`)
        .then(result => result.json())
        .then((data) => {
          console.log(data);
          this.BPI_rate = data.bpi.EUR.rate;
          console.log(`${data.time.updated}, ${this.CODE}, ${this.BPI_rate}`);
        });
    },
  },
});
