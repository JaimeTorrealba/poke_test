<template>
  <div class="mb-8">
    <div v-if="listPokemons.length !== 0">
      <ListItem>
        <v-list-item-group mandatory color="indigo" class="background">
          <v-list-item
            v-for="(item, i) in listPokemons"
            :key="i"
            class="mb-2 white radius"
          >
            <v-list-item-content @click="open(item)" class="text-capitalize">
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action @click="checkPokemon(item)">
              <span v-if="!item.favorite">
                <img
                  src="../../assets/img/Disabled.svg"
                  alt="No favorite"
                  class="icon"
                />
              </span>
              <span v-else>
                <img
                  src="../../assets/img/Active.svg"
                  alt="favorite"
                  class="icon"
                />
              </span>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </ListItem>
    </div>
    <div v-else>
      <Message
        titleText="Uh-oh!"
        bodyText="You look lost on your journey!"
      />
      <div class="d-flex justify-center">
      <Button label="Go back home" to="/" />
      </div>
    </div>
    <Modal
      :showModal="showModal"
      @close="showModal = false"
      :selected="selected"
    />
    <span class="d-none">
      {{ favorites }}
    </span>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import ListItem from '@/components/atoms/ListItem';
import Button from '@/components/atoms/Button';
import Message from '@/components/molecules/Message';

export default {
  components: {
    ListItem,
    Button,
    Message,
    Modal: () => import('@/components/molecules/Modal'),
  },
  mounted() {
    this.getAllPokemons();
  },
  data() {
    return {
      selected: {},
      showModal: false,
    };
  },
  computed: {
    ...mapState(['listPokemons', 'favorites']),
  },
  methods: {
    ...mapActions(['getAllPokemons', 'favoriteFunction']),
    ...mapMutations(['addFavorite', 'rmvFavorite']),
    open(selected) {
      this.selected = selected;
      this.showModal = true;
    },
    checkPokemon(poke) {
      const check = this.favorites.some((e) => e.name === poke.name);
      if (check) {
        this.rmvFavorite(poke);
      } else {
        this.addFavorite(poke);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.icon {
  width: 70%;
  transition: 0.5s all;
  &:hover {
    transform: rotate(15deg) scale(1.1);
  }
}
.radius {
  border-radius: 5px;
}
</style>
