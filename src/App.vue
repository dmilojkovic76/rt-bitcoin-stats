<template>
  <section id="app">
    <NavBarComp />
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
    <h1 class="title">BitCoin values from { timeStart } to { timeEnd }.</h1>
    <ChartComp class="section" />
    Current BitCoin value in {{ currency}} is {{ BPI_rate }}. <br>
    Data collected at {{ BPI_time }}.
    <FooterComp />
  </section>
</template>
<script>
// @ is an alias to /src
import NavBarComp from "@/components/NavBarComp.vue";
import ChartComp from "@/components/ChartComp.vue";
import FooterComp from "@/components/FooterComp.vue";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    NavBarComp,
    ChartComp,
    FooterComp,
  },
  computed: {
    ...mapState(["isLoading", "currency", "currencies", "BPI_rate", "BPI_time"]),
  },
  methods: {
    ...mapMutations(["changeCurrency"]),
    ...mapActions(["getCurrentData"]),
  },
  mounted() {
    this.$store.dispatch("getCurrentData", this.$store.state.currency);
  },
};
</script>

<style>
</style>
