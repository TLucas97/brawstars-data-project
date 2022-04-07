<template>
  <div id="app">
    <div id="nav">
      <braw-header :title="title" />
      <braw-footer />
    </div>
    <router-view />
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

</style>

