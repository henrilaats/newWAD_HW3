<template>
  <div class="layout">
    <div class="side">
    </div>
    <div class="center" id="post_container">
      <div class="clear-button">
        <button v-on:click="clearLikes">Clear likes</button>
      </div>
      <posts/>
    </div>
    <div class="side" id="right_side"></div>
  </div>
</template>

<script>
import posts from "../components/posts.vue";

export default {
  name: "main_page_compo",
  components: {posts},
  methods: {
    clearLikes: function() {
      this.$store.dispatch("clearLikesAct")
    }
  },
};
</script>

<style scoped>
.layout {
  padding-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: fit-content;
}
.side {
  background-color: #1778bd;
  width: 33%;
}
.center {
  background-color: white;
  width: 60%;
  height: 100%;
}
.clear-button > button {
  border: 1px solid #1778BD;
  width: 20%;
  margin-top: 5px;
  align-self: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color: white;
}
.clear-button button:hover {
  background-color: skyblue;
}
</style>