<template>
  <v-text-field
    label="Search"
    solo
    :value="value"
    @keyup="$emit('update:value', $event.target.value)"
  >
    <template slot="prepend-inner">
      <span class="d-flex justify-center">
        <img src="../../assets/img/Vector.svg" class="iconButton" alt="Search icon" />
      </span>
    </template>
  </v-text-field>
</template>
<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
