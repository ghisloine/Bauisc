<template>
  <div>
    <div class="MainOne">
      <div class="Menu">
        <Menu></Menu>
      </div>
      <div></div>
      <div class="box3">
        <Header></Header>
      </div>
      <div id="Empty"></div>
      <div id="Empty"></div>
      <div></div>
      <div id="Empty"></div>
      <div id="Empty"></div>
      <div class="Slider">
        <div><img src="../../public/Photos/Left.png" @click="Left"></div>
        <div class="News">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" v-for="news in News" :key="news.id">
                <router-link :to=NewsLink><img :src="news[id]['NewsImage']"></router-link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="../../public/Photos/Right.png" @click="Right" class="RightButton">
        </div>
      </div>
      <div></div>
    </div>
    <div class="MainTwo">
      <div id="OuterEmptyLeft"></div>
      <div v-for="news in News" :key="news.id">
        <p class="NewsHeader">{{news[id]['NewsHeader']}}</p>
        <p class="NewsMainContent">{{news[id]['NewsMainContent']}}</p><br>
        <router-link :to=NewsLink>
          <p style="text-align : center">Read More</p>
        </router-link>
      </div>
      <div id="OuterEmptyRight"></div>
    </div>
    <div class="MainThree" v-for="news in News" :key="news.id">
      <div></div>
      <div>
        <div id="PhotoDetail">
          <ul>
            <ul>
              <li>
                <img :src="news[id]['NewsImage']" class="GalleryShortPic">
              </li>
            </ul>
            <ul>
              <li>18.08.2018</li>
              <li>BURAK</li>
              <li style="font-style:italic;color:grey;">TAGTEKIN</li>
              <li>RACE TODAY</li>
            </ul>
          </ul>
        </div>
        <span id="Galery">GALERY</span>
      </div>
      <div></div>
      <div class="try"></div>

      <div></div>
      <div>
        <ul style="float:right">
        <ul id="PhotoDetail2">
          <ul>
            <li style="float:right"><img :src="news[id + 1]['NewsImage']" class="GalleryShortPic"></li>
            <li style="float:right"><ul>
              <li>18.08.2018</li>
              <li>BURAK</li>
              <li style="font-style:italic;color:grey;">TAGTEKIN</li>
              <li>RACE TODAY</li>
            </ul>
            </li>
          </ul>
          <ul>
            <li><img :src="news[id + 2]['NewsImage']" class="GalleryShortPic"></li>
            <li>
              <ul>
              <li>18.08.2018</li>
              <li>BURAK</li>
              <li style="font-style:italic;color:grey;">TAGTEKIN</li>
              <li>RACE TODAY</li>
            </ul>
            </li>
          </ul>
        </ul>
        </ul>
      </div>
      <div></div>
    </div>
    <div class="MainFour">
      <ul id="VideoDesc">
        <li id="Video">VIDEO</li>
        <li>18.08.2016</li>
        <li>SAILING</li>
        <li>CLUB</li>
        <li>RACE TODAY</li>
      </ul>
      <img src="../../public/Photos/Line.png" id="LineTop">
      <iframe id = "YoutubeVideo" width="560" height="315" src="https://www.youtube.com/embed/RNhfpUmPRuY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <img src="../../public/Photos/Line.png" id="LineBottom">
    </div>
    <div class="MainFive">
      <div id="LonelyCont">

      </div>
    </div>
  </div>
</template>
<script>
import Menu from "./Menu.vue";
import Header from "./Header.vue";

export default {
  name: "News",
  components: {
    Menu,
    Header
  },
  created() {
    fetch("../public/News.json")
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.News = res.News;
      });
  },
  computed: {
    NewsLink() {
      return `/News/${this.id}`;
    }
  },
  data() {
    return {
      id: 1,
      News: []
    };
  },
  methods: {
    Left: function() {
      if (this.id == 1) {
        this.id = 1;
      } else {
        this.id = this.id - 1;
      }
    },
    Right: function() {
      if (this.id == 5) {
        this.id = 1;
      } else {
        this.id = this.id + 1;
      }
    }
  }
};
</script>
<style scoped>
.MainOne {
  display: grid;
  grid-template-columns: 70px 290px 1200px 340px;
  grid-template-rows: 100px 130px 850px;
}

.Menu {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}

.Slider {
  display: grid;
  grid-template-columns: 185px 830px 185px;
  grid-template-rows: 850px;
}

.News {
  margin: 0 auto;
}

.News img {
  max-width: 830px;
  max-height: 850px;
}

.RightButton {
  float: right;
}

.NewsHeader {
  font-size: 24px;
  line-height: 20px;
  color: black;
  font-family: "Roboto";
  text-align: center;
  font-weight: 900;
  padding-top: 40px;
}

.NewsMainContent {
  font-size: 14px;
  line-height: 30px;
  color: rgb(38, 38, 38);
  font-family: "Roboto";
  text-align: center;
}

.MainTwo {
  display: grid;
  grid-template-columns: 360px 1200px 340px;
  grid-template-rows: 540px;
}

.MainThree {
  display: grid;
  grid-template-columns: 360px 1200px 340px;
  grid-template-rows: 370px 70px 560px;
}

.try {
  grid-column: 1/4;
  grid-row: 2/3;
}

.GalleryShortPic {
  max-width: 370px;
  max-height: 370px;
}

#Galery {
  font-size: 133px;
  letter-spacing: -3px;
  line-height: 151px;
  color: rgb(38, 38, 38);
  font-family: "Pathway Gothic One", sans-serif;
  font-weight: bold;
  position: absolute;
  top: 1860px;
  left: 1270px;
}

#PhotoDetail ul {
  list-style-type: none;
  float: left;
  overflow: hidden;
}

#PhotoDetail li {
  font-size: 18px;
  letter-spacing: 4px;
  color: rgb(38, 38, 38);
  font-family: "Lato";
  font-weight: bold;
}
#PhotoDetail2 ul {
  list-style-type: none;
  float: left;
  overflow: hidden;
  
}
#PhotoDetail2 li {
  font-size: 18px;
  letter-spacing: 4px;
  color: rgb(38, 38, 38);
  font-family: "Lato";
  font-weight: bold;
}
.MainFour{
  display: grid;
  display: grid;
  grid-template-columns: 1900px;
  grid-template-rows: 1080px;
}
#Video{
  font-size: 133px;
  letter-spacing: -3px;
  line-height: 151px;
  color: rgb(38, 38, 38);
  font-family: "Pathway Gothic One", sans-serif;
  font-weight: bold;
}
.MainFour li{
      font-size: 18px;
      letter-spacing: 4px;
      color: rgb(38, 38, 38);
      font-family: "Lato";
      font-weight: bold;
      list-style-type: none;
      overflow: hidden;
      text-align: end;
}
#VideoDesc{
  position: relative;
    right: 1240px;
    top: 300px;
  overflow: hidden;
}
#YoutubeVideo{
    position: absolute;
    top: 2900px;
    left: 820px;
}
#LineTop{
  position: absolute;
  left: 550px;
}
#LineBottom{
   position: absolute;
    top: 3400px;
    left: 1250px;
}
.MainFive{
  display: grid;
  grid-template-columns: 1900px;
  grid-template-rows: 2380px;
}
.MainFive #LonelyCont{
  background-image: url(../../public/Photos/NewsFooter.png);
  background-repeat: no-repeat;
}
</style>
