<template>
	<view>
		534543
	</view>
  <view>
    <router-link to="/login">跳转到登录页面</router-link>
  </view>
</template>


<script>
	//import routingIntercept from '@/router/index.js'
	export default {
		onLaunch: function() {
			//routingIntercept();
		
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
