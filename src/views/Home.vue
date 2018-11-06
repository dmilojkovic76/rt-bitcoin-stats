<template>
  <section class="hero">
    <h1 class="title has-text-centered"><Start msg="Welcome to Your Vue.js App"/></h1>
  </section>
</template>

<script>
// @ is an alias to /src
import Start from "@/components/Start.vue";

export default {
  name: "home",
  components: {
    Start,
  },
};
</script>
