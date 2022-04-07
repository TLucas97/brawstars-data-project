<template>
    <div>
        <div class="braw-banner">
            <div class="title">
                <h1>BrawLegends</h1>
                <h5>Get your Brawler's data</h5>
            </div>
            <div class="social-logos">
                <div>
                    <img :src="github" width="50">
                </div>
                <dir>
                    <img :src="linkedin" width="50">
                </dir>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            github: 'https://cdn-icons-png.flaticon.com/512/1051/1051326.png',
            linkedin: 'https://cdn-icons-png.flaticon.com/512/1384/1384014.png',
        }
    }
}
</script>


<style scoped>
@font-face {
  font-family: "Nougat";
  src: local("Nougat"),
   url('../assets/fonts/Nougat-ExtraBlack.ttf') format("truetype");
}

.braw-banner{
    background: url("../assets/braw-banner.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 700px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title{
    margin-left: 1em;
    font-size: 3rem;
    font-family: "Nougat", Helvetica, Arial;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
}

.title h1{
    color: #F01919
}

.title h5{
    color: white;
}

.social-logos{
    display: flex;
    flex-direction: column;
    padding-right: 1em;
}

.social-logos img{
    transition: .2s;
    cursor: pointer;
    margin-bottom: 1em;
}

.social-logos img:hover{
    transform: scale(1.1);
}

</style>