<template>
    <div>
        <div class="box" @click="openNav">
        </div>
        <div class="sidenav" id="mySidenav">
            <h2>
                BAU INTERNATIONAL
            </h2>
            <h2 style="font-style: italic">
                SAILING CLUB
            </h2>
            <button class="closebtn" v-on:click = "closeNav" href="javascript:void(0)">&times;</button>
            <div class="col-sm-2">

                <ul>
                    <li class="outerList">
                        <h1>BAU
                            <span style="font-style: italic;font-weight: lighter;">ISC</span>
                        </h1>
                    </li>
                    <li class="outerList">
                        <router-link to = "/hakkimizda"><h1 class="outerList">Hakkımızda</h1></router-link>
                    </li>
                    <li class="outerList">
                        <h1 class="outerList">Vizyon-Misyon</h1>
                    </li>
                    <li class="outerList">
                        <h1 class="outerList">Kurullar</h1>
                    </li>
                    <li class="outerList">
                        <h1 class="outerList">Ekip</h1>
                    </li>
                    <li class="outerList">
                        <h1 class="outerList">Üyelik</h1>
                    </li>
                </ul>
            </div>

            <div class="col-sm-2">
                <router-link to = "/News"><h1>HABERLER</h1></router-link>
            </div>

            <div class="col-sm-2">
                <ul>
                    <li class="outerList">
                        <h1>YELKEN
                            <span style="font-style: italic;font-weight: lighter;">Okulu</span>
                        </h1>
                    </li>

                    <h1 class="outerList">Programlar</h1>
                    <ul>

                        <li class="innerList">
                            <a href="#">Temel Yelkencilik Programı</a>
                        </li>
                        <li class="innerList">
                            <a href="#">İleri Yelkencilik Programı</a>
                        </li>
                        <li class="innerList">
                            <a href="#">Yarışçılık Programı</a>
                        </li>
                        <li class="innerList">
                            <a href="#">Yatçılık Programı</a>
                        </li>
                        <li class="innerList">
                            <a href="#">Match-Race Programı</a>
                        </li>
                        <li class="innerList">
                            <a href="#">Kurumsal Programlar</a>
                        </li>
                        <li class="innerList">
                            <a href="#">Teorik Programlar</a>
                        </li>
                        <li class="innerList">
                            <a href="#">Online Eğitim Başvurusu</a>
                        </li>
                    </ul>
                    <h1 class="outerList">Kulüp Filosu</h1>
                    <ul>
                        <li class="innerList">
                            <a href="">ŞAN-3</a>
                        </li>
                        <li class="innerList">
                            <a href="">ŞAN4</a>
                        </li>
                        <li class="innerList">
                            <a href="">GOLDEN TOY</a>
                        </li>
                        <li class="innerList">
                            <a href="">BOT</a>
                        </li>
                    </ul>
                    <h1 class="outerList">Yelken Ve Deniz</h1>
                    <ul>
                        <li class="innerList">
                            <a href="">Yelken Tarihi</a>
                        </li>
                        <li class="innerList">
                            <a href="">Denizcilik Bağları</a>
                        </li>
                        <li class="innerList">
                            <a href="">Denizcilik Terimleri</a>
                        </li>
                        <li class="innerList">
                            <a href="">Yelken Yarışları</a>
                        </li>
                        <li class="innerList">
                            <a href="">Americas Cup</a>
                        </li>
                        <li class="innerList">
                            <a href="">Vendee Globe</a>
                        </li>
                        <li class="innerList">
                            <a href="">VOR</a>
                        </li>
                        <li class="innerList">
                            <a href="">Fastnet Race</a>
                        </li>
                    </ul>
                    <ul>
                        <li class="outerList">Tekne Rezervasyon Sistemi
                        </li>
                    </ul>

                </ul>
            </div>

            <div class="col-sm-2">
                <ul>
                    <li class="outerList">
                        <h1>Galeri</h1>
                    </li>
                    <li class="outerList">
                        <h1 class="outerList">Fotoğraflar</h1>
                    </li>
                    <ul>
                        <li class="innerList">
                            <a href="">BAU Spring Trophy</a>
                        </li>
                        <li class="innerList">
                            <a href="">BAU Unicon Regatta</a>
                        </li>
                    </ul>
                    <li class="outerList">
                        <h1 class="outerList">Videolar</h1>
                    </li>
                    <ul>
                        <li class="innerList">
                            <a href="">BAU Spring Trophy</a>
                        </li>
                        <li class="innerList">
                            <a href="">BAU Unicon Regatta</a>
                        </li>
                    </ul>

                </ul>
            </div>
            <div class="col-sm-2">
                <h1>Store</h1>
            </div>
            <div class="col-sm-2">
                <h1>İletişim</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Menu",
  methods: {
    closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("mySidenav").style.paddingLeft = "0%"
            document.getElementById("mySidenav").style.paddingRight = "0%"
            document.getElementById("Slider").style.visibility = "visible"
            document.getElementById("SliderBack").style.visibility = "visible"
            document.getElementById("SliderLeftArrow").style.visibility = "visible"
            document.getElementById("SliderRightArrow").style.visibility = "visible"
            document.getElementById("rotateRight").style.visibility  = "visible";
            document.getElementById("HeaderInfo").style.visibility = "visible"
            console.log("Hello Form Menu Close");
        },
        openNav(){
            document.getElementById("mySidenav").style.width = "100%";
            document.getElementById("mySidenav").style.paddingLeft = "5%"
            document.getElementById("mySidenav").style.paddingRight = "5%"
            document.getElementById("Slider").style.visibility = "hidden"
            document.getElementById("SliderBack").style.visibility = "hidden"
            document.getElementById("SliderLeftArrow").style.visibility = "hidden"
            document.getElementById("SliderRightArrow").style.visibility = "hidden"
            document.getElementById("rotateRight").style.visibility  = "hidden";
            document.getElementById("HeaderInfo").style.visibility = "hidden"
            console.log("Hello From Open NAV")
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
.box {
  text-align: center;
  overflow: hidden;
  height: 1080px;
  width: 70px;
  background: url("../../public/Photos/Menu.png");
  cursor: pointer;
}

a:link {
  color: rgb(153, 153, 153);
  text-decoration: none;
}
.Kont {
  display: grid;
  grid-template-rows: 100px 850px 130px;
  grid-template-columns: 70px 290px 1200px 340px;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align: center;
}

.sidenav h2 {
  font-size: 18px;
  letter-spacing: 4px;
  line-height: 28px;
  color: rgb(230, 230, 230);
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-align: center;
}
.sidenav h1 {
  font-size: 30px;
  letter-spacing: -1px;
  line-height: 71px;
  color: rgb(230, 230, 230);
  font-family: "Roboto";
  font-weight: bold;
}
.sidenav .outerList {
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 28px;
  color: rgb(230, 230, 230);
  font-family: "Inconsolata", monospace;
  list-style-type: none;
  text-align: left;
}
.sidenav .innerList {
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 28px;
  color: rgb(153, 153, 153);
  font-family: "Inconsolata";
  list-style-type: none;
  text-align: left;
}
.sidenav a {
  text-decoration: none;
  transition: 0.3s;
  display: block;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 28px;
  color: rgb(153, 153, 153);
  font-family: "Inconsolata";
  list-style-type: none;
}
.sidenav div {
  float: left;
}

.sidenav a:hover {
  color: #fff101;
  font-size: 18px;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>
