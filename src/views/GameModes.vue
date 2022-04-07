<template>
    <div id="game-modes">
        <h1>BrawLegends - Game Modes</h1>
        <div class="game-flex">
            <div class="game-box" v-for="games in gameModes" :key="games.id">
                <img :src="games.imageUrl2" class="game-img">
                <div style="margin-left: 1em;">
                <h2>Game name: <span>{{ games.name }}</span> | Game mode: <span>{{ games.title }}</span></h2>
                <h2>Objective: <span class="description-game">{{ games.description }}</span></h2>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=pt_BR&gl=US">PLAY!</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
const gameModeURL = 'https://api.brawlapi.com/v1/gamemodes'


export default{
    data(){
        return{
            gameModes: null
        }
    },
    mounted(){
        axios.get(gameModeURL).then(response => (this.gameModes = response.data.list))
    }
}
</script>

<style scoped>
@font-face {
  font-family: "Nougat";
  src: local("Nougat"),
   url('../assets/fonts/Nougat-ExtraBlack.ttf') format("truetype");
}

#game-modes{
    background: #238FF2;
}

h1{
    text-align: center;
    padding: 1em 0em;
    color: white;
}

h1, h2{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

span{
    color: red;
}

.game-flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.game-box{
    margin-bottom: 6em;
    width: 800px;
    background: white;
    font-family: "Nougat", Helvetica, Arial;
    border: 5px solid black;
}

.game-box a{
    text-decoration: none;
    color: red;
    margin-top: 5em;
    font-size: 2rem;
    transition: .2s;
    opacity: .7;
}

.game-box a:hover{
    opacity: 1;
}

.description-game{
    font-size: 1rem;
}

.game-img{
    width: 100%;
}
</style>
