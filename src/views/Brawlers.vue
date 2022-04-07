<template>
  <div class="home">
    <h1>BrawLegends - Brawlers</h1>
    <div class="main-content">
      <div class="box" v-for="braws in brawData" :key="braws.id">
        <h3>{{ braws.name }}</h3>
      <div>
        <a target="_blank" :href="braws.link">
          <img :src="braws.imageUrl2" class="img-shape">
        </a>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Home",
  data(){
    return{
      brawData: null,
    }
  },
  mounted(){
    axios.get("https://api.brawlapi.com/v1/brawlers").then(response => (this.brawData = response.data.list))
  }
};
</script>

<style scoped>
.home{
  background: #CA3346;
}

h1{
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding-bottom: 2em;
  padding-top: 1em;
  color: white;
}

h3{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
  color: white;
}

.main-content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
  margin-right: 1em;
  margin-left: 1em;
  background: none;
  width: 250px;
  transition: .2s;
  cursor: pointer;
  opacity: .6;
}

.img-shape{
  border-radius: 5px;
  width: 150px;
  border: 3px solid black;
  box-shadow: 0 10px 10px -5px;
}

.box:hover{
  transform: scale(1.1);
  opacity: 1;
}
</style>
