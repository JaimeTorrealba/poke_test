<template>
  <v-list>
    <v-list-item-group>
      <slot />
    </v-list-item-group>

  </v-list>
</template>
<script>
export default {
    data() {
        return {
            active:true
        }
    },
};
</script>
<style lang="scss" scoped></style>
