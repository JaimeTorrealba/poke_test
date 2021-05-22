<template>
  <v-btn
    rounded
    :color="color"
    class="white--text mx-3 poke_button"
    :to="to"
    @click="event"
  >
    <!-- :class="{ 'selected_tab ': isValue(elementActive) }" -->
    <slot /> {{ label }}
  </v-btn>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      required: false,
      type: String,
      default: '',
    },
    event: {
      required: false,
      type: Function,
      default: () => false,
    },
    color: {
      type: String,
      required: false,
      default: 'red',
    },
  },
};
</script>
<style lang="scss" scoped>
.poke_button:hover {
  background-color: #c00e20 !important;
}

</style>
