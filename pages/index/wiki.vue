<template>
	<uni-search-bar :style="{backgroundColor:bgcolor}" @confirm="search" cancel-button="none" :focus="true"
		v-model="searchValue">
	</uni-search-bar>
	<view class="catogory">
		<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" :show-scrollbar="true">
			<view v-for="(item,index) in articleCats" class="scroll-view-item_H"
			 :class="cur == index ? 'cur-item' : ''"
			 @click="moveIndex(index)">{{ item.catName }}</view>
		</scroll-view>
		<uni-icons :type="type" class="more"></uni-icons>
	</view>
	<view>
		<view v-for="article in articles" :key="article.id">
			<text>articleCatId:{{ article.articleCatId }}</text><br>
			<text>content:{{ article.content }}</text><br>
		    <text>title:{{ article.title }}</text><br>
			<text>updateTime:{{ article.updateTime.slice(0, 10)}} {{ article.updateTime.slice(11, 16)}}</text><br>
		    <!-- 其他文章相关内容... -->
		  </view>
	</view>
</template>

<script>
	import { getRequest } from '@/http/index.js'
	export default {
		data() {
			return {
				searchValue: '',
				bgcolor: '#1296db',
				frontColor: '#ffffff',
				type: 'bottom',
				articleCats:[],
				articles:[],
				cur:0
			}
		},
		onLoad() {
			//导航栏背景
			uni.setNavigationBarColor({
				backgroundColor: this.bgcolor,
				frontColor: this.fontColor
			})
			this.init();
			
		},

		methods: {
			init(){
				getRequest('api/articleCat/all')
				.then(res => {
					const articleCats = res.data.articleCats;
					this.articleCats.push({})
					articleCats.forEach(item => {
						if(item.catName != '推荐')
							this.articleCats.push(item);
						else
							this.articleCats[0] = item;
					})
					
				}).catch(err => {
					console.error(err);
				})
			},
			moveIndex(i){
				this.cur = i;
				const item = this.articleCats[i];
				const cateId = item.id;
				getRequest(`api/article/${cateId}`)
				.then(res => {
					 this.articles = res.data.articles;
					 
					}).catch(err => {
					console.error(err);
				})
			},
			search(e) {
				console.log(e)
			},
			scroll(e) {
				// console.log(e)
			}
		}
	}
</script>

<style>
	.catogory {
		position: relative;

	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		height: 60rpx;
		border-bottom: 1upx solid #ccc;
	}
	/deep/::-webkit-scrollbar{
		display: none;
		width: 0;
		height: 0;
	}

	.cur-item{
		font-size: 28rpx;
		font-weight: bold;
		color: white;
		background-color: #1296db;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100upx;
		line-height: 60rpx;
		text-align: center;
		font-size: 20rpx;
		overflow: hidden;
	}

	.more {
		position: absolute;
		top: 10upx;
		right: 0;
		background-color: #f5f5f5;
	}
</style>