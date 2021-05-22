<template>
  <h1 class="text-h5 my-5">{{ titleText }}</h1>
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
<style lang="scss" scoped></style>
