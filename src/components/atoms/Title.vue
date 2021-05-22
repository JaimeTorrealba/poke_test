<template>
  <h1 class="title_poke my-5">{{ titleText }}</h1>
</template>
<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.title_poke{
  font-weight: 700;
}
</style>
