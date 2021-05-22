import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    listPokemons:[],
    favorites:[],
    isLoading: false
  },
  mutations: {
    showLoading(state, newLoadingStatus) {
      state.isLoading = newLoadingStatus
    },
    updateList(state, pokemonsData) {
      state.listPokemons = pokemonsData
    },
    savePokemons(state, pokemonsData) {
      state.pokemons = pokemonsData
    },
    addFavorite(state, pokeFavorite) {
      state.favorites.push(pokeFavorite)
      const index = state.listPokemons.findIndex(poke => poke.name === pokeFavorite.name)
      const indexDB = state.pokemons.findIndex(poke => poke.name === pokeFavorite.name)
      state.listPokemons[index].favorite = true
      state.pokemons[indexDB].favorite = true
    },
    rmvFavorite(state, pokeFavorite) {
      const index = state.favorites.findIndex(poke => poke.name === pokeFavorite.name)
      const indexListPokemon = state.listPokemons.findIndex(poke => poke.name === pokeFavorite.name)
      const indexDB = state.pokemons.findIndex(poke => poke.name === pokeFavorite.name)
      state.favorites.splice(index, 1);
      state.listPokemons[indexListPokemon].favorite = false
      state.pokemons[indexDB].favorite = false
    },
  },
  actions: {
    getAllPokemons: async ({ commit }) => { // , querys despues del commit
      commit('showLoading', true)
      const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5000`)
      const dataToJson = await fetchData.json()
      commit('savePokemons', dataToJson.results)
      commit('updateList', dataToJson.results)
      commit('showLoading', false)
    },
  },
  modules: {},
});
