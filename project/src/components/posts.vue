<template>
  <div>
    <div class="post" v-for="post in myValue" :key="post.id">
      <div class="post-top">
        <img src="../photos/account.png" alt="postIt" class="author-profile" />
        <div class="author-name">{{ post.author_name }}</div>
        <div>{{ post.create_time }}</div>
      </div>
      <div class="post-image" v-if="post.post_img != '' ">
        <img :src="post.post_img" alt="post photo" />
      </div>
      <br />{{ post.post_content }}
      <div class="like-button">
        <button v-on:click='post.like++' >
          <img src="../photos/likebutton.jpg" alt="Like button" />
          Likes: {{post.like}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "posts",
  methods: {
    clickedLike: function () {}
  },
  computed: {
    myValue() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style scoped>
.post {
  margin: 20px auto;
  border: 1px solid darkgray;
  border-radius: 5%;
  width: 70%;
  padding: 15px;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 5px 5px 5px 5px gray;
}
.post-top {
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  color: gray;
  font-size: 15px;
}
.author-profile {
  display: flex;
  flex-direction: row;
  width: 25px;
}
.author-name {
  display: flex;
  justify-content: flex-start;
}
div + .post-image {
  display: flex;
  justify-content: center;
  height: 350px;
  padding-top: 10px;
  overflow: hidden;
}
.like-button button {
  border: none;
  padding: 5px;
  background-color: white;
  margin-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}
.like-button button:hover {
  background-color: skyblue;
}
.like-button img {
  height: 30px;
}
</style>