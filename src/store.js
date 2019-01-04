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
    timeStart: 0,
    timeEnd: 0,
  },
  mutations: {
    changeCurrency(state, currency) {
      state.currency = currency;
      state.chart_Data = [];
      state.chart_Labels = [];
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
        state.chart_Data.splice(0, 1);
        state.chart_Labels.splice(0, 1);
      }
      if (state.isLoading === true) state.isLoading = false;
      state.timeStart = new Date(state.chart_Labels[0]);
      state.timeEnd = new Date(state.chart_Labels[state.chart_Labels.length - 1]);
    },
  },
  actions: {
    getCurrentData(context, curr) {
      const URL = `https://api.coindesk.com/v1/bpi/currentprice/${curr}.json`;
      fetch(URL)
        .then(response => response.json())
        .then((data) => {
          const bpi = data.bpi[`${curr}`];
          // console.log(data.time.updated, bpi.rate);
          context.commit("setData", { rate: parseFloat(bpi.rate_float), time: data.time.updated });
          // console.log(context.state.currency, context.state.BPI_time, context.state.BPI_rate);
        })
        .catch((error) => {
          console.error(error.statusText);
        });
      setTimeout(() => {
        // ovde ne moze da nadje state of undefined
        // tako da context.$store izgleda nije definisan
        // kao ni context.commit.dispatch - is not a function
        // context.commit.dispatch("getCurrentData", context.state.currency);
        // pa sam prepravio na sledece
        context.dispatch("getCurrentData", context.state.currency);
      }, 5 * 1000);
    },
  },
});
