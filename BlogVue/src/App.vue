<template>
  <div id="app">
    <img src="./assets/bg.jpg" class="img-responsive" alt="图片无法加载">
    <nav class="navbar navbar-fixed-top navbar-default navbar-inverse visible-lg visible-md visible-sm" role="navigation">
  <div class="container-fluid ">
    <div class="navbar-header header_margin">
      <a href="#" class="navbar-brand">咸鱼阁</a>
    </div>
    <div>
      <ul class="nav navbar-nav ">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/Article">程序人生</router-link></li>
          <li><router-link to="/Read">朝花夕拾</router-link></li>
          <li><router-link to="/Miss">抚今思昔</router-link></li>
          <li><router-link to="/Plugs">插件</router-link></li>
          <li><router-link to="/About">关于我</router-link></li>
      </ul>
    </div>
  </div>
</nav>
<div id="anything" class="visible-lg">
      <router-view></router-view>
      <input type="text" name="myvalue1"  placeholder="请输入您要找的内容" v-on:keyup.enter="lgModal.show()" class="xy_input"  autocomplete="on">
      <button type="button" class="btn btn-default xj_button" v-on:click="lgModal.show()" >Serach</button>
      <div class="xjyz_button" >
      <input type="text" name="myvalue2" class="xy_input" disabled="disabled"  placeholder="请输入您要找的内容" value="" >
      <button type="button" class="btn btn-default xj_button" disabled style="cursor: default;">Serach</button>
  </div>
</div>
<!--影子区域-->
<!--modal-->
<div bsModal class="modal fade" tabindex="-1" role="dialog" id="lgModal" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title text-center">搜索结果</h4>
        <button type="button" class="close pull-right" v-on:click="lgModal.hide()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="modalbody">
       <p class="text-center text-info" ></p>
       <p class="text-center text-info" ></p>
      </div>
    </div>
  </div>
</div>
<footer class="text-center text-success ">Design by BigJiang 浙ICP备17012690号</footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#anything{
border: 1px solid white;
position: absolute;
width: 45%;
height: 350px;
z-index: 10;
top: 90px;
left: 50px;
border-radius: 10px;
box-shadow: 15px 15px 15px #403c39; 
}
.xy_input{
margin-top:70%;
margin-left: 150px;
width: 55%;
height: 33px;
}
.xj_button{margin-left: -5px;margin-top: -2px;}
.xjyz_button{transform: rotateX(180deg);margin-top:5px;opacity: 0.3;}
</style>
