<template>
  <div class="grid_center background">
      <Welcome />
  </div>
</template>
<script>
import Welcome from '@/components/organism/theHome'
export default {
    components:{
        Welcome,
    }
};
</script>
<style lang="scss" scoped>
.grid_center{
    display: grid;
    place-items:center;
    height:100vh;
}
</style>