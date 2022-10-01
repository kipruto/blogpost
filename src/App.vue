<template>
  <html>

  <router-view></router-view>

  </html>


</template>

<script>


export default {
  name: 'App',
  components: {

}
}
</script>

<style>


  @import url(./assets/css/bootstrap.min.css);
  @import url(./assets/css/templatemo-digital-trend.css);


  @font-face {
  font-family: "Sofia";
  src: url(./assets/fonts/Sofia-Regular.ttf) format("truetype");
}

#app {
  font-family: "Sofia" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fafafa;

}
</style>
