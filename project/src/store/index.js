import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    likes: 0,
    posts: [
      {
        id: 1,
        create_time: "Sep 20, 2021 18:18 ",
        author_name: "Gloria",
        post_content: "Cute baby Yoda",
        post_img: require("../photos/baby_yoda.jpg"),
        like: 0,
      },
      {
        id: 2,
        create_time: "Sep 22, 2020 20:30 ",
        author_name: "Henri",
        post_content: "Rauno Heinla Deadlifted 1036 pounds",
        post_img: require("../photos/rauno.png"),
        like: 0,
      },
    ],
  },
  mutations: {
    clearLikes: (state) => {
      state.posts.forEach((post) => {
        post.like = 0;
      });
    },
  },
  actions: {
    clearLikesAct: (act) => {
      setTimeout(function () {
        act.commit("clearLikes");
      }, 10);
    },
  },

  modules: {},
});
