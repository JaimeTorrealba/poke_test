<template>
  <div class="loader">
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.loader:not([hidden]) {
    min-height: 100vh;
    position: fixed;
    z-index: 100;
    background-color: #E5E5E5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/img/Loader.svg');
    background-position-x: center;
    background-position-y: center;
    background-size: 15%;
    background-repeat: no-repeat;
    @media screen and (max-width: 600px) {
        background-size: 15%;
    }
    @media screen and (min-width: 1300px) {
        background-size: 2%;
    }
}
</style>