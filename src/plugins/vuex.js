// import de vuejs
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

console.log('%c' + 'STORE LOADED', 'color: #0aa; font-size: 1rem; background-color:#fff');


const store = new Vuex.Store({


  created: function() {
    console.log('%c' + 'STORE CREATED', 'color: #0aa; font-size: 1rem; background-color:#fff');
  },

  // stocke les données partageable avec entres les composants
  state: {
    user: null,
    services: {
      user: null,
      recipe: null
    }

  },

  // "setters" pour modifier le state du store
  mutations: {

    /*
    saveUser(state, user) {
      console.log('%c' + 'Stockage du user', 'color: #0bf; font-size: 1rem; background-color:#fff');
      // on enregistre dans le state l'utilisateur
      state.user = user;
    },

    initialize(state, services) {
      console.log('%c' + 'Initialisation du store', 'color: #0bf; font-size: 1rem; background-color:#fff');
      state.services.user = services.userService;
      state.services.recipe = services.userService;
      state.user = state.services.user.getUserInfo();
    }
    */
  }
});

export default store;
