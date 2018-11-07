import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currency: "EUR",
    BPI_rate: 0,
  },
  mutations: {

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
