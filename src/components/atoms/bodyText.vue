<template>
  <p class="text-body text-center contain">
    {{ bodyText }}
  </p>
</template>
<script>
export default {
  props: {
    bodyText: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.contain {
  max-width: 50%;
}
</style>
