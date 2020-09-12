<template>
  <div id="app">
	 
   <!-- 1: 利用mint-ui中的header实现ui的头部 -->
   <mt-header fixed title="新闻栏目"></mt-header>
    <router-view></router-view>
   <!-- 3: 利用tabbar实现底部导航栏的制作 -->
   <nav class="mui-bar mui-bar-tab">
   	<router-link class="mui-tab-item" to="/home">
   		<span class="mui-icon mui-icon-home"></span>
   		<span class="mui-tab-label">首页</span>
   	</router-link>
   	<router-link class="mui-tab-item" to="/message">
   		<span class="mui-icon mui-icon-email"><span class="mui-badge">0</span></span>
   		<span class="mui-tab-label">消息</span>
   	</router-link>
   	<router-link class="mui-tab-item" to="/contact">
   		<span class="mui-icon mui-icon-contact"></span>
   		<span class="mui-tab-label">通讯录</span>
   	</router-link>
   	<router-link class="mui-tab-item" to="/set">
   		<span class="mui-icon mui-icon-gear"></span>
   		<span class="mui-tab-label">设置</span>
   	</router-link>
   </nav>
   
  </div>
</template>

<script>
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
