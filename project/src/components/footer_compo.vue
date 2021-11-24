<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link :to="{ name: 'contact us' }"> Contact us</router-link>
  </div>
</template>

<script>
export default {
  name: "footer_compo"
}
</script>

<style scoped>
</style>