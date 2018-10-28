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
    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/bauisc-web.appspot.com/o/Tekneler%2FE%C4%9Fitim%20Teknesi%20(%C5%9Ean3%20ve%20%C5%9Ean%204)-min.png?alt=media&token=cc70b69d-0e08-44ea-9de8-8a8c45d6cf05" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">San 4</h5>
      <p class="card-text text-center"></p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
    <div class="card">
    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/bauisc-web.appspot.com/o/Tekneler%2FFOTO3-min.png?alt=media&token=af135b4b-7a42-450a-8486-a58f796efda4" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">San 3</h5>
      <p class="card-text text-center"></p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/bauisc-web.appspot.com/o/Tekneler%2FE%C4%9Fitim%20Teknesi%20(%C5%9Ean3%20ve%20%C5%9Ean4)-min.png?alt=media&token=78962f3f-f7e9-4cfe-bc3e-886c68898962" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">San 3</h5>
      <p class="card-text text-center"></p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
</div>
<div class="card-group">
        <div class="card">
    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/bauisc-web.appspot.com/o/Tekneler%2FEgitimTekneleriFotolar.jpg?alt=media&token=b95061c9-0c41-4bed-af7f-5f72b89e4af3" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-center">San 4</h5>
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
