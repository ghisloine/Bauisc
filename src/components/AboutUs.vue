<template>
<div>
    <div id="MainPart">
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
</template>
<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
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
#MainPart{
    display: grid;
    grid-template-columns: 70px 290px 1200px 340px;
    grid-template-rows: 100px 2050px;
    background-image: url(../../public/Photos/AboutUs.png)
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
