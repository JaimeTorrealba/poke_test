<template>
  <div id="app" >
    <v-app>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style lang="scss">


#app{
  font-family: 'Lato', sans-serif;
  background-color:#F9F9F9;
}
.debug{
  border:1px solid black;
}
.slide-fade-enter-active {
	transition: all 1s ease;
}
.slide-fade-leave-active {
	transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(5px);
	opacity: 0;
}
</style>
