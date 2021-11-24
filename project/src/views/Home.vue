<template>
  <div class="home">
    <main_page_compo />
  </div>
</template>

<script>
// @ is an alias to /src
import main_page_compo from "@/components/main_page_compo.vue";

export default {
  name: "Home",
  components: {
    main_page_compo,
  },
};
</script>
