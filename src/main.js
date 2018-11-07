import Vue from "vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

import Cors from "cors";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(Cors);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
