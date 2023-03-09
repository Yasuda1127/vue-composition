// import { createStore } from "vuex";

// export const store = createStore({
//   state() {
//     return {
//       animal: "dog",
//     };
//   },
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import Vuex from "vuex";
import axios from "axios";

export default Vuex.createStore({
  state: {
    message: "",
  },
  getters: {
    getMessage: (state) => {
      // console.log(state.message)
      return state.message;
    },
  },
  mutations: {
    setMessage: (state, payload) => {
      // console.log(payload)
      state.message = payload.message;
    },
  },

  // データ、外部API等の取得をactionsで行う
  actions: {
    async getMessageAction({ state, commit }) {
      const msg = await axios
        .get("http://localhost:8002/items")
        .then((res) => res.data)
        .catch((error) => {
          state.errorMsg = error.message;
        });
      const payload = {
        message: msg,
      };
      // console.log(payload.message)
      commit("setMessage", payload); // commitでactionsの関数をmutationsに渡す
    },
  },
});
