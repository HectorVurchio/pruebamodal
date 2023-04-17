import { createStore } from "vuex";

export default createStore({
  state: {
    page_board: 0,
    yellowMessage: "",
    redMessage: "",
  },
  getters: {
    getPageBoard(state) {
      return state.page_board;
    },
  },
  mutations: {
    setPageBoard(state, numb) {
      state.page_board = numb;
    },
    change_flash_yellow(state, chanPL) {
      state.yellowMessage = chanPL;
    },
    change_flash_red(state, chanPL) {
      state.redMessage = chanPL;
    },
  },
  actions: {
    setPage(context, number) {
      context.commit("setPageBoard", number);
    },
    setFlash(context, objPayload) {
      context.commit(objPayload.method, objPayload.message);
    },
  },
  modules: {},
});
