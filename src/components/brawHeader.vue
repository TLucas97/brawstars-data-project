<template>
    <div id="header">
        <div>
            <img src="../assets/braw-logo.png" width="170">
        </div>
        <div class="navlist">
            <nav>
            <ul>
                    <li>
                        <router-link to="/">{{ title }}</router-link>
                    </li>
                    <li>
                        <router-link to="/brawlers">BRAWLERS</router-link>
                    </li>
                    <li>
                        <router-link to="/gamemodes">GAME MODES</router-link>
                    </li>
                    <li>
                        <router-link to="/maps">GAME MAPS</router-link>
                    </li>
            </ul>
        </nav>
        </div>
    </div>
</template>

<script>
export default{
    props: ['title']
}
</script>


<style scoped>
@font-face {
  font-family: "Nougat";
  src: local("Nougat"),
   url('../assets/fonts/Nougat-ExtraBlack.ttf') format("truetype");
}

a{
    text-decoration: none;
    color: white;
    font-family: "Nougat", Helvetica, Arial;
    padding-right: 3em;
    font-size: 1.7rem;
    text-transform: uppercase;
    transition: .2s;
}

a:hover{
    color: #FFBF21 !important;
}

#header{
    background: #343C52;
    width: 100%;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid black;
}

ul{
    display: flex;
}

li{
    list-style: none;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>