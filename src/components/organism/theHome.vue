<template>
  <div class="d-flex justify-center align-center flex-column">
    <img
      src="@/assets/img/picachu.svg"
      alt="Imagen de picachu para el home"
      class="img mb-5"
    />
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
export default {
  name: 'theHome',
  components: {
    Button,
    Message,
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
