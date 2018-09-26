<template>
<div>
    <div id="MainPart">
        <div id="Lonely">
        <div id="Header">
            <Menu></Menu>
        </div>
        <div></div>
        <div class="box3">
            <Header></Header>
        </div>
        <div></div>
        <iframe id = "YoutubeVideo" width="560" height="315" src="https://www.youtube.com/embed/RNhfpUmPRuY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    </div>
</div>
</template>
<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
import ScrollReveal from 'scrollreveal'
export default {
    name : "AboutUs",
    components : {
        Menu,
        Header
    },
    data(){
        return {

        }
    }

}
</script>
<style scoped>
#Lonely{
    height: 2150px;
    width: 1900px;
    background-image: url(../../public/Photos/AboutUs.png);
}
#MainPart{
    display: grid;
    grid-template-columns: 70px 290px 1200px 340px;
    grid-template-rows: 100px 2050px;
}
#Header{
    grid-column: 1/2;
    grid-row: 1/3;
}
#YoutubeVideo{
    position: absolute;
    top: 360px;
    left: 1200px;
}
</style>
