<template>
<div>
    <div id="MainPart">
        <div>
        <div id="Header">
            <Menu></Menu>
        </div>
        <div></div>
        <div class="box3">
            <Header></Header>
        </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div>
<div class="card-group">
        <div class="card">
    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/bauisc-web.appspot.com/o/Tekneler%2F4.20%20BOT.jpg?alt=media&token=ceb9cd52-7af1-4036-997c-c9fac0c1872f" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">Bot</h5>
      <p class="card-text text-center"></p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
</div>
    
    <div class=""></div>
    </div>
    <div></div>
    <div></div>
    <div id="Lonely"></div>
    <div></div>
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
    background-image: url(../../public/Photos/LastPart.png);
}
#MainPart{
    display: grid;
    grid-template-columns: 70px 290px 1200px 340px;
    grid-template-rows: 100px 1080px 1970px;
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
