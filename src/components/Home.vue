<template>
      <div>
      <div class="Kont">
        <Menu class="box1"></Menu>
        <div class="box box2"></div>
        <div class="box box3">
            <Header></Header>
        </div>
        <div class="box box4"></div>
        <div class="box box5">
            <img src="../../public/Photos/Logo.png" style="padding-top: 360px;" data-aos="fade-down">
        </div>
        <div class="box box6" id="app2" >
            <div v-for='data in Slider' :key="data.id">

                <p id="HeaderInfo" data-aos="fade-right">{{data[SliderID]['Header']}}
                    <br>{{data[SliderID]['HeaderDate']}}</p>
                <img id="Slider" :src="data[SliderID].ImageURL" data-aos="fade-left">

                <img src="../../public/Photos/SliderBack2.png" id="SliderBack">
                <img src="../../public/Photos/RotationKadran.png" id="RotationKadran">
                <img src="../../public/Photos/LeftArrow.png" id="SliderLeftArrow" v-on:click="prevPic">
                <img src="../../public/Photos/RightArrow.png" id="SliderRightArrow" v-on:click="nextPic">

                <div class="rotateRight" id="rotateRight">

                    <p class="Index animated fadeInDown">0{{SliderID}}</p>
                    <p class="Total animated fadeInDown">05</p>

                </div>



            </div>

        </div>
        <div class="box box7"></div>
        <div class="box box8">
            <!-- 
                <ul>
                <li class="leftSide">
                    <img src="../../public/Photos/VideoIcon.png" alt="">
                </li>
                <li class="leftSide">
                    <a href="">VIDEO & PHOTOS</a>
                </li>
                <li class="leftSide">
                    <img src="../../public/Photos/WeatherIcon.png" alt="">
                </li>
                <li class="leftSide">
                    <a href="">WEATHER</a>
                </li>
                <li class="leftSide">
                    <img src="../../public/Photos/SailingIcon.png" alt="">
                </li>
                <li class="leftSide">
                    <a href="">SAILING RACE</a>
                </li>
                <li class="leftSide">
                    <img src="../../public/Photos/RaceBookIcon.png" alt="">
                </li>
                <li class="leftSide">
                    <a href="">RACE BOOK</a>
                </li>
            </ul>
             -->
        </div>
        <div class="box box9"></div>
    </div>
    <div class="SecondKont" id="app">

        <div class="SecondBox SecondBox1"></div>
        <div class="SecondBox SecondBox2"></div>
        <div class="SecondBox SecondBox3"></div>
        <div class="SecondBox SecondBox4"></div>
        <div class="SecondBox SecondBox5">
            <div class="SecondBoxInternal" v-for="data in News" :key = data.id>
                <div class="SecondBoxInternal1" >
                    <p id="TanitimBaslik" data-aos = "fade-down" data-aos-delay="500">
                        BAU INTERNATIONAL
                        <span style="font-style: italic">SAILING</span> CLUB
                    </p>
                    <p id="TanitimYazisi" data-aos = "fade-down" data-aos-delay="500">
                        Üç tarafı denizlerle çevrili olan ülkemizde hedefimiz; Türk Yelkenciliğini uluslararası boyutta geliştirmek, yelkenciği 7’den
                        70’ e geniş kitlelere yaymak ve ülkemizde denizcilik kültürünün oluşmasını sağlamaktır.
                    </p>
                </div>
                <div class="SecondBoxInternal2">
                    <br>
                    <br>
                    <img style="max-width: 490px;max-height: 780px" :src="data[NewsID].NewsImage" data-aos = "fade-right" data-aos-delay="500">
                </div>
                <div class="SecondBoxInternal3">
                    <ul style="padding-top: 190px;">
                        <li class="Numerator" v-on:click="SetId1">1</li>
                        <li class="Numerator" v-on:click="SetId2">2</li>
                        <li class="Numerator" v-on:click="SetId3">3</li>
                        <li class="Numerator" v-on:click="SetId4">4</li>
                        <li class="Numerator" v-on:click="SetId5">5</li>
                    </ul>
                </div>
                <div class="SecondBoxInternal4">
                    <br>
                    <br>
                    <br>
                    <br>
                    <p id="NewsHead" data-aos = "fade-left">
                        {{data[NewsID].NewsHeader}}
                        <br>
                        <span> {{data[NewsID]['HeaderDetail']}}</span>
                    </p>
                    <p class="NewsContent" data-aos = "fade-left">
                        {{data[NewsID]['NewsContent']}}
                        <br>{{data[NewsID]['NewsSecondParag']}}
                        <br><br>
                        <router-link :to=NewsLink>
                        <p style="float:right">Read More...</p>
                        </router-link>
                    </p>
                </div>
                

            </div>
        </div>
        <div class="SecondBox SecondBox6">
            <img src="../../public/Photos/SideRectangle.png" style="position: relative;
            left: 113px;
            top: 255px;">
            <p class="RightSideText">
                INTERNATIONAL SAILING CLUB
            </p>
        </div>
        <div class="SecondBox SecondBox7"></div>
        <div class="SecondBox SecondBox8"></div>
        <div class="SecondBox SecondBox9"></div>

    </div>
    <div class="ThirdKont">
        <div class="LonelyDiv">

        </div>
    </div>
    <div class="ForthKont">
        <div class="ForthBox1">
            <img src="../../public/Photos/SideRectangle.png" style="position: relative;
                left: 254px;
                top: 10px;">
            <p class="LeftSideText">
                INTERNATIONAL SAILING CLUB
            </p>
        </div>
        <div class="ForthBox2"></div>
        <div class="ForthBox3"></div>
        <div class="ForthBox4" v-for="Race in Races" :key="Race.id">
            <p class="ForthHeader">
                RACE & ADVENTURE
            </p>
            <p class="ForthAltHeader">
                {{Race[RaceID]['Header']}}
            </p>
            <p class="ForthContent">
                {{Race[RaceID]['Content']}}
            </p>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p class="ReadMore">
               <a :href = "Race[RaceID]['URL']" target="_blank">READ MORE</a>
            </p>
            
            

            <br>
            <br>
            <br>
            
            <p class="GaleriParag">BAU INTERNATIONAL SAILING CLUB</p>
            <br>
            <div class="card-deck">
  <div class="card">
    <img class="card-img-top" v-on:click="SpringTrophy" src="../../public/Photos/SpringTrophy.png" style="cursor:pointer;max-height:230px">
    <div class="card-body">
      <h5 class="card-title text-center">BAU Spring Trophy</h5>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" v-on:click="BosphorusCup" src="../../public/Photos/BosphorusCup.jpg" style="cursor:pointer;max-height:230px">
    <div class="card-body">
      <h5 class="card-title text-center">Turkcell Platinum Bosphorus Cup</h5>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" v-on:click="UniconRegatta" src="../../public/Photos/UniconRegatta.png" style="cursor:pointer;max-height:230px">
    <div class="card-body">
      <h5 class="card-title text-center">Unicon Regatta</h5>
    </div>
  </div>
  
</div>
        </div>
        <div class="ForthBox5">
        </div>
        <div class="ForthBox6"></div>
        <div class="ForthBox7"></div>
        <div class="ForthBox8"></div>
        <div class="ForthBox9"></div>
    </div>
    <div class="LastKont">
        <div class="BiggestOne">

        </div>
    </div>

    </div>
</template>
<script>
import Menu from "./Menu.vue"
import Header from "./Header.vue"
import AOS from 'aos';
AOS.init();
export default {
  name: "Home",
  data() {
    return {
      News: [],
      Slider : [],
      Races : [],
      NewsID: 1,
      SliderID : 1,
      RaceID : 1
    };
  },
  created() {
    fetch('../public/MainSlider.json')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.Slider = res.Slider;
            }),
    fetch("../public/News.json")
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.News = res.News;
            }),
    fetch('../public/Races.json')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.Races = res.Races;
            })
  },
  components: {
    Menu,
    Header
  },
  computed: {
    NewsLink() {
      return `/News/${this.NewsID}`;
    }
  },
  methods:{
            SetId1 : function(){
                this.NewsID = 1;
            },
            SetId2 : function(){
                this.NewsID = 2;
            },
            SetId3 : function(){
                this.NewsID = 3;
            },
            SetId4 : function(){
                this.NewsID = 4;
            },
            SetId5 : function(){
                this.NewsID = 5;
            },
            prevPic : function(){
                if(this.SliderID == 1){
                    this.SliderID = 1;
                }else{
                    this.SliderID = this.SliderID - 1;
                }
                
            },
            nextPic : function(){
                if(this.SliderID == 5){
                    this.SliderID = 1;
                }else{
                    this.SliderID = this.SliderID + 1;
                }
            },
            SpringTrophy : function(){
                this.RaceID = 1;
            },
            BosphorusCup : function(){
                this.RaceID = 2;
            },
            UniconRegatta : function(){
                this.RaceID = 3;
            }
            
    }
    
};
</script>

