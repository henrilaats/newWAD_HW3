<template>
  <div class="about">
    <header_compo/>
    <h1>This is an about page</h1>
    <footer>
    <footer_compo/>
  </footer>
  </div>
</template>

<script>
import header_compo from "../components/header_compo";
import footer_compo from "../components/footer_compo";
export default {
  name: "About",
  components: {footer_compo, header_compo},
}
</script>
