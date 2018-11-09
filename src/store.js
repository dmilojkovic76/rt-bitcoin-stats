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
    BPI_time: 0,
  },
  mutations: {
    changeCurrency(state, currency) {
      state.currency = currency;
      // TODO: Here we should do something about the current data being plotted in different currency.
    },
    toggleMenu(state, id) {
      if (id === "navbarMenu") state.brgrMnuOpn = !state.brgrMnuOpn;
      if (id === "navbarMenuClose") state.brgrMnuOpn = false;

      if (id === "nav-lista") state.currncsMnuOpn = !state.currncsMnuOpn;
      if (id === "nav-listaClose") state.currncsMnuOpn = false;
    },
  },
  actions: {
    getCurrentData({ commit }, { currency }) {
      fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
        .then(response => response.json())
        .then((data) => {
          commit("BPI_rate", data.bpi.EUR.rate);
          commit("BPI_time", data.time.updated);
        })
        .catch((error) => {
          console.error(error.statusText);
        });
    },
  },
});
