import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      odsFavourites: [],
      name: "",
      surname: "",
      comment: "",
    };
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setSurname(state, surname) {
      state.surname = surname;
    },
    setComment(state, comment) {
      state.comment = comment;
    },
    addFavourite(state, ods) {
      state.odsFavourites.push(ods);
    },
    removeFavourite(state, ods) {
      const index = state.odsFavourites.findIndex(
        (odsFavourite) => odsFavourite.id === ods.id
      );
      state.odsFavourites.splice(index, 1);
    },
  },
});

app.use(router);

app.use(store);

app.mount("#app");
