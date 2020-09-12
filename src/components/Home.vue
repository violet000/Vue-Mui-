<template>
  <div id="home">
	  <!-- 轮播图 -->
	  <mt-swipe :auto='2000'>
		  <mt-swipe-item>
			  <img src="../images/shuijiao.jpg" alt="睡觉">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../images/cbd.jpg" alt="CBD">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../images/muwu.jpg" alt="木屋">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../images/yuantiao.jpg" alt="远眺">
		  </mt-swipe-item>
	  </mt-swipe>
	  <!-- 九宫格列表 -->
	  <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">个人中心</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">私信</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">评论</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">位置</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">搜索</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">致电</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">设置</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">关于</div></a></li>
		        </ul> 
		</div>
  </div>
</template>

<script>
export default {
    methods:{
		
	}
}
</script>

<style scoped>
	#home {
		width: 100%;
		height: 100%;
		margin-top: 40px;
	}
	.mint-swipe {
		height: 220px;
	}
	img {
		width: 100%;
		height: 220px;
	}
	.mint-swipe-item {
		width: 100%;
		height: 200px;
	}
	.mui-content{
		margin-top: -14px;
	}
</style>