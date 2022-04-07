<template>
    <div id="maps">
        <h1>BrawLegends - Game maps</h1>
        <div class="maps-box">
            <div v-for="maps in gameMaps" :key="maps.id" class="maps-flex">
                <h2>{{ maps.name }}</h2>
                <small>Version: {{ maps.version }}</small>
                <small>Name: {{ maps.environment.name }}</small>
                <a target="_blank" :href="maps.link">
                    <img :src="maps.imageUrl" class="maps-img">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import AOS from "aos"
import "aos/dist/aos.css"

const mapsURL = "https://api.brawlapi.com/v1/maps"

export default{
    data(){
        return{
            gameMaps: null,
        }
    },
    mounted(){
        axios.get(mapsURL).then(response => (this.gameMaps = response.data.list))
    },
    created(){
        AOS.init();
    }
}
</script>

<style scoped>
@font-face {
  font-family: "Nougat";
  src: local("Nougat"),
   url('../assets/fonts/Nougat-ExtraBlack.ttf') format("truetype");
}

h1, h2{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

h2{
    font-family: "Nougat", Helvetica, Arial;
    text-transform: uppercase;
    color: red;
}

h1{
    text-align: center;
    padding: 1.5em 0em;
}

.maps-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.maps-flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
    opacity: .8;
}

.maps-flex:hover{
    opacity: 1;
    transform: scale(1.1);
}

.maps-img{
    width: 400px;
    height: 500px;
}

</style>
