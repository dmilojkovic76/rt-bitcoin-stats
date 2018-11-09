<template>
  <div id="app">
    <NavBarComp />

      <section class="container hero">
        <h1 class="title has-text-centered">
          <StartComp msg="Welcome to Your Vue.js App"/>
        </h1>
        Current BitCoin value in {{ currency}} is {{ BPI_rate }}. <br>
        Data collected at {{ BPI_time }}.
      </section>

    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarComp from "@/components/NavBarComp.vue";
import StartComp from "@/components/StartComp.vue";
import FooterComp from "@/components/FooterComp.vue";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    NavBarComp,
    StartComp,
    FooterComp,
  },
  computed: {
    ...mapState(["currency", "currencies", "BPI_rate", "BPI_time"]),
  },
  methods: {
    ...mapMutations(["changeCurrency"]),
    ...mapActions(["getCurrentData"]),
  },
  created() {
    this.$store.dispatch("getCurrentData", "currency");
  },
};
</script>

<style>
</style>
