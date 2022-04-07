<template>
  <div id="app">
    <div id="nav">
      <braw-header :title="title" />
      <transition name="fade" mode="out-in">
        <router-view />
    </transition>
      <braw-footer />
    </div>
  </div>
</template>

<script>
import brawHeader from './components/brawHeader.vue'
import brawFooter from './components/brawFooter.vue'

export default{
  components: {
    brawHeader,
    brawFooter,
  },
  data(){
    return{
      title: 'Home'
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* @keyframes going {
  from {
    transform: translateX(0px);
  }
  to{
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(0px);
    opacity: 0;
  }
  to{
    transform: translateX(-50px);
    opacity: 1;
  }
} */

</style>

