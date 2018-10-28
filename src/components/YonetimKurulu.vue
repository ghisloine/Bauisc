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
    <img class="card-img-top" src="../../public/Photos/VedatcanBaltali.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">Vedatcan Baltalı</h5>
      <p class="card-text text-center">Yönetim Kurulu Başkanı.</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../../public/Photos/DogancanOz.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">Doğancan Öz</h5>
      <p class="card-text text-center">Komodor.</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../../public/Photos/CerenPeker.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">Ceren Peker</h5>
      <p class="card-text text-center">Denetim Kurulu Başkanı</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
</div>
    </div>
    <div>1</div>
    <div>2</div>
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
