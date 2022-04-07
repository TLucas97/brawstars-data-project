<template>
    <div id="footer">
        <h3>Made by: 
            <a target="_blank" href="https://lucas-senna-portfolio.netlify.app/">
                Lucas-Senna-Dev
            </a>
        </h3>
        <h3>Brawlstars data by: 
            <a target="_blank" href="https://brawlapi.com/#/">
                brawlapi.com
            </a>
        </h3>
    </div>
</template>

<style scoped>
#footer{
    background: #343C52;
    color: white;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

a{
    color: white;
    text-decoration: none;
    opacity: .7;
    transition: .3s
}

a:hover{
    color: red;
}
</style>