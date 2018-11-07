<template>
  <div id="app">
    <NavBarComp />
    <router-view class="container" />
    <FooterComp />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarComp from "@/components/NavBarComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: {
    NavBarComp,
    FooterComp,
  },
  data() {
    return {
      currencies: ["EUR", "USD", "BTC", "CAD", "CHF", "GBP", "HKD", "RSD"],
    };
  },
};
</script>

<style>
</style>
