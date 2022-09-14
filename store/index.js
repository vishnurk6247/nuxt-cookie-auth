export const state = () => ({
  isAuthenticated: false,
});

export const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
};

export const mutations = {
  LOGIN(state) {
    state.isAuthenticated = true;
  },
};

export const actions = {
  login({ commit }) {
    commit("LOGIN");
  },
};
