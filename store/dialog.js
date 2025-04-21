export const state = {

    isAuthenticated:false,
    loginDialog: false,
    signupDialog: false,
  };
  
  export const mutations = {
    setAuth(state, status) {
      state.isAuthenticated = status;
    },
    SET_LOGIN_DIALOG(state, value) {
      state.loginDialog = value;
    },
    SET_SIGNUP_DIALOG(state, value) {
      state.signupDialog = value;
    },
  };
  
  export const actions = {
  
  
  
  
    openLoginDialog({ commit }) {
      commit("SET_LOGIN_DIALOG", true);
      commit("SET_SIGNUP_DIALOG", false);
    },
    openSignupDialog({ commit }) {
      commit("SET_SIGNUP_DIALOG", true);
      commit("SET_LOGIN_DIALOG", false);
    },
    closeDialogs({ commit }) {
      commit("SET_LOGIN_DIALOG", false);
      commit("SET_SIGNUP_DIALOG", false);
    },
  
  };
  

  