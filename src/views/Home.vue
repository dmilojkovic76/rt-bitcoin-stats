<template>
  <section class="hero">
    <h1 class="title has-text-centered"><StartComp msg="Welcome to Your Vue.js App"/></h1>
  </section>
</template>

<script>
// @ is an alias to /src
import StartComp from "@/components/StartComp.vue";

export default {
  name: "home",
  components: {
    StartComp,
  },
};
</script>
