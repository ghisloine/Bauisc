<template>
  <div>
      <div class="MainOne">
        <div class="Menu"><Menu></Menu></div>
        <div></div>
        <div class="box3">
          <Header></Header>
          </div>
        <div id="Empty"></div>
        <div id="Empty"></div>
        <div v-for="news in News" :key="news.id"><p class="NewsHeader">{{news[id]['NewsHeader']}}</p></div>
        <div id="Empty"></div>
        <div id="Empty"></div>
        <div class="Slider">
          <div><img src="../../public/Photos/Left.png" @click="Left"></div>
          <div v-for="news in News" :key="news.id" class="News">
              <router-link :to = NewsLink ><img :src="news[id]['NewsImage']"></router-link>
          </div>
          <div>
            <img src="../../public/Photos/Right.png" @click="Right" class="RightButton">
            </div>
        </div>
        <div></div>
      </div>
      <div class="SecondOne">
        
      </div>
  </div>
</template>
<script>
import Menu from './Menu.vue'
import Header from './Header.vue'

export default {
  name: "News",
  components : {
    Menu,
    Header
  },
  created(){
    fetch("../public/News.json")
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.News = res.News;
      });
  },
  computed : {
    NewsLink(){
      return `/News/${this.id}`
    }
  },
  data(){
    return {
      id : 1,
      News : []
    }
  },
  methods : {
        Left : function(){
                if(this.id == 1){
                    this.id = 1;
                }else{
                    this.id = this.id - 1;
                }
                
            },
            Right : function(){
                if(this.id == 5){
                    this.id = 1;
                }else{
                    this.id = this.id + 1;
                }    
    }
  }
};
</script>
<style scoped>
  .MainOne{
    display: grid;
    grid-template-columns : 70px 290px 1200px 340px;
    grid-template-rows: 100px 130px 850px;
  }
  .Menu{
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }
  .Slider{
    display: grid;
    grid-template-columns: 185px 830px 185px;
    grid-template-rows: 850px;
  }
  .News{
    margin: 0 auto;
  }
  .News img{
    max-width: 830px;
    max-height: 850px;
  }
  .RightButton{
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
</style>
