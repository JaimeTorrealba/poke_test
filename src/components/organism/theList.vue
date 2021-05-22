<template>
  <div>
    <v-container>
      <v-row @keyup.enter="getSpesificPokemon" justify="center">
        <v-col sm="7" xs="12">
          <Input :value.sync="querys" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col sm="7" xs="12">
          <PokeList />
        </v-col>
      </v-row>
    </v-container>
    <v-toolbar dense class="fixed_tab d-flex justify-center debug">
      <Button label="All" :event="displayALLPokemons">
        <span class="d-flex justify-center">
          <img
            src="../../assets/img/buttonIcon.svg"
            class="iconButton"
            alt="icon button"
          />
        </span>
      </Button>
      <Button
        label="Favorites"
        :event="displayALLFavoritesPokemons"
        color="disabled"
      >
        <span class="d-flex justify-center">
          <img
            src="../../assets/img/favoriteIcon.svg"
            class="iconButton"
            alt="star"
          />
        </span>
      </Button>
    </v-toolbar>
    <Pokeball v-if="isLoading" />
  </div>
</template>
<script>
import Input from '@/components/atoms/Input';
import PokeList from '@/components/molecules/PokeList';
import Pokeball from '@/components/atoms/Pokeball';
import Button from '@/components/atoms/Button';
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  components: {
    Input,
    PokeList,
    Pokeball,
    Button,
  },
  data() {
    return {
      querys: '',
    };
  },
  computed: {
    ...mapState(['isLoading', 'pokemons', 'listPokemons', 'favorites']),
  },
  methods: {
    ...mapMutations(['updateList']),
    ...mapActions(['getAllPokemons']),
    getSpesificPokemon() {
      const search = this.querys.toLowerCase().trim();
      if (search) {
        const filtered = this.pokemons.filter((p) => p.name === search);
        this.updateList(filtered);
      } else {
        this.displayALLPokemons();
      }
    },
    displayALLPokemons() {
      this.updateList(this.pokemons);
    },
    displayALLFavoritesPokemons() {
      this.updateList(this.favorites);
    },
  },
};
</script>
<style lang="scss" scoped>
.fixed_tab {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.iconButton {
  width: 70%;
  padding: 0.1rem;
}     
</style>
