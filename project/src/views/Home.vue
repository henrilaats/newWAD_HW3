<template>
  <div class="home">
    <header_compo/>
    <main_page_compo />
  </div>
</template>

<script>
// @ is an alias to /src
import header_compo from "../components/header_compo";
import main_page_compo from "@/components/main_page_compo.vue";

export default {
  name: "Home",
  components: {header_compo, main_page_compo},
};
</script>
