<template>
  <div class="d-flex justify-center align-center flex-column">
    <Picachu />
    <Message
      titleText="Welcome to Pokédex"
      bodyText="The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world."
    />
    <Button label="Get started" to="List" />
  </div>
</template>
<script>
import Button from '@/components/atoms/Button';
import Message from '@/components/molecules/Message.vue';
import Picachu from '@/components/atoms/imgPicachu'
export default {
  name: 'theHome',
  components: {
    Button,
    Message,
    Picachu
  },
};
</script>
<style lang="scss" scoped>
.img {
  height: auto;
  width: 30%;
  display: block;
}
</style>
