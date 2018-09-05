<template>
  <div>
      <div class="MainOne">
        <div class="Menu"><Menu></Menu></div>
        <div></div>
        <div class="box3">
          <Header></Header>
          </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="Slider">
          <div id="EmptyInnerLeft"></div>
          <div v-for="news in News" :key="news.id" class="News">
              <img :src="news[$route.params.id]['NewsImage']">
          </div>
          <div id="EmptyInnerRight"></div>
        </div>
      </div>
      <div class="MainTwo">
            <div id="OuterEmptyLeft"></div>
            <div v-for="news in News" :key="news.id">
                <p class="NewsHeader">{{news[$route.params.id]['NewsHeader']}}</p>
                <p class="NewsMainContent">{{news[$route.params.id]['NewsMainContent']}}</p>
            </div>
            <div id="OuterEmptyRight"></div>
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
  data() {
    return {
      id: 1,
      News: []
    };
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
  grid-template-rows: 1080px;
}
.News {
  margin: 0 auto;
}
.News img {
  max-width: 830px;
  max-height: 850px;
}
.MainTwo {
  display: grid;
  grid-template-columns: 360px 1200px 340px;
  grid-template-rows: 540px;
}
.NewsHeader {
  font-size: 24px;
  line-height: 20px;
  color: black;
  font-family: "Roboto";
  text-align: center;
  font-weight: 900;
}
.NewsMainContent {
  font-size: 14px;
  line-height: 30px;
  color: rgb(38, 38, 38);
  font-family: "Roboto";
  text-align: center;
}
</style>
