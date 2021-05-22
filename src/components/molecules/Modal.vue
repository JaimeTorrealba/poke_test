<template>
  <div class="text-center">
    <v-dialog v-model="showModal" width="80%" max-width="800px" persistent>
      <v-card>
        <div class="bg_img">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon color="primary" text @click="$emit('close')">
              <v-icon color="white">mdi-close-circle</v-icon>
            </v-btn>
          </v-card-actions>
          <div class="d-flex justify-center">
            <img :src="pokemon.img" :alt="pokemon.name" class="img" />
          </div>
        </div>

        <v-card-text v-if="pokemon">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title id="namePokemon"
                ><strong>Name: </strong>
                <span class="text-capitalize">{{ pokemon.name }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                ><strong>Weight: </strong>{{ pokemon.weight }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                ><strong>Height: </strong>{{ pokemon.height }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                ><strong>Types: </strong>
                <span class="text-capitalize"
                  >{{ pokemon.type1 }}{{ pokemon.type2 }}
                </span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-card-text>
        <v-card-actions>
          <Button label="Share to my friends" :event="clipBoard" />
          <v-spacer></v-spacer>
          <span v-if="!selected.favorite">
            <img
              src="../../assets/img/Disabled.svg"
              alt="No favorite"
              class="icon"
            />
          </span>
          <span v-else>
            <img src="../../assets/img/Active.svg" alt="favorite" />
          </span>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <span class="d-none"> {{ getName }}</span>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Button from '@/components/atoms/Button';
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    selected: {
      type: Object,
      required: true,
    },
  },
  components: {
    Button,
  },
  data() {
    return {
      pokemon: [],
    };
  },
  computed: {
    ...mapState(['pokemons']),
    getName() {
      const pokemon = this.pokemons.filter(
        (poke) => poke?.name === this.selected?.name
      );
      return this.getSpesificPokemon(pokemon[0]?.name);
    },
  },
  methods: {
    async getSpesificPokemon(pokeName) {
      const fetchData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      const dataToJson = await fetchData.json();
      const { name, height, weight, types, sprites } = dataToJson;
      const type1 = types[0].type.name;
      const type2 = types[1] ? `, ${types[1].type.name}` : '';
      const img = sprites.front_default;
      this.pokemon = { name, height, weight, type1, type2, img };
    },
    clipBoard() {
      const poke = `${this.pokemon.name}, ${this.pokemon.height}, ${this.pokemon.weight}, ${this.pokemon.type1} ${this.pokemon.type2}`;
      this.toCopy(poke);
    },
    async toCopy(poke) {
      await navigator.clipboard.writeText(poke);
      alert('Success copy')
    },
  },
};
</script>
<style lang="scss" scoped>
.bg_img {
  background-image: url('../../assets/img/image 14.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.img {
  width: 40%;
}
</style>
