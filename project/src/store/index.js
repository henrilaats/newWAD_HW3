import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    likes: 0,
    posts: [{
      id: 1,
      create_time: "Feb 20, 1967 01:00",
      author_name: "Kurt Cobain",
      post_content: "It's okay to eat fish because they don't have any feelings.",
      post_img: '',
      like: 0,
  },
  {
      id: 2,
      create_time: "Sep 20, 2021 18:18 ",
      author_name: "Gloria",
      post_content: "Cute baby Yoda",
      post_img: require("../photos/baby_yoda.jpg"),
      like: 0,
  },
  {
      id: 3,
      create_time: "Sep 22, 2020 20:30 ",
      author_name: "Henri",
      post_content: "Rauno Heinla Deadlifted 1036 pounds",
      post_img: require("../photos/rauno.png"),
      like: 0,
  },
  {
      id: 4,
      create_time: "Sep 19, 2019 09:23 ",
      author_name: "Paule",
      post_content: "It Was The Ship Of Dreams.",
      post_img: require("../photos/titanic.jpg"),
      like: 0,
  },
  {
      id: 5,
      create_time: "Jan 18, 2019 10:30 ",
      author_name: "Ariana Grande",
      post_content: "You like my hair? / Gee, thanks, just bought it.",
      post_img: '',
      like: 0,
  },
  {
      id: 6,
      create_time: "Jan 25, 1882 23:51",
      author_name: "Virginia Woolf",
      post_content: "One cannot think well, love well, sleep well, if one has not dined well.",
      post_img: '',
      like: 0,
  },
  {
      id: 7,
      create_time: "Nov 30, 1835 15:13",
      author_name: "Mark Twain",
      post_content: "Part of the secret of a success in life is to eat what you like and let the food fight it out inside.",
      post_img: '',
      like: 0,
  },
  {
      id: 8,
      create_time: "Aug 15, 1912 13:42",
      author_name: "Julia Child",
      post_content: "I was 32 when I started cooking; up until then, I just ate.",
      post_img: '',
      like: 0,
  },
  {
      id: 9,
      create_time: "Nov 8, 1966 08:17 ",
      author_name: "Gordon Ramsay",
      post_content: "Why did the chicken cross the road? Because you didn’t f***ing cook it!",
      post_img: '',
      like: 0,
  },
  {
      id: 10,
      create_time: "July 21, 1951 06:52",
      author_name: "Robin Williams",
      post_content: "Some are born great. Some achieve greatness. Some get it as a graduation gift.",
      post_img: require("../photos/robin.jpg"),
      like: 0,
  }],
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
