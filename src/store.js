import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: true,
    brgrMnuOpn: false,
    currency: "EUR",
    currencies: ["EUR", "USD", "BTC", "CAD", "CHF", "GBP", "HKD", "RSD"],
    BPI_rate: 0,
    BPI_time: 0,
    chart_Data: [],
    chart_Labels: [],
    data_Length: 10,
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
    setData(state, obj) {
      state.BPI_rate = obj.rate;
      state.BPI_time = obj.time;
      state.chart_Data.push(obj.rate);
      state.chart_Labels.push(obj.time);
      if (state.chart_Data.length > state.data_Length) {
        state.chart_Data.splice(0);
        state.chart_Labels.splice(0);
      }
      if (state.isLoading === true) state.isLoading = false;
    },
  },
  actions: {
    getCurrentData(context, curr) {
      const URL = `https://api.coindesk.com/v1/bpi/currentprice/${curr}.json`;
      fetch(URL)
        .then(response => response.json())
        .then((data) => {
          context.commit("setData", { rate: data.bpi.EUR.rate, time: data.time.updated });
        })
        .catch((error) => {
          console.error(error.statusText);
        });
      setTimeout(() => {
        context.commit.dispatch("getCurrentData", context.$store.state.currency);
      }, 1 * 1000);
    },
  },
});
