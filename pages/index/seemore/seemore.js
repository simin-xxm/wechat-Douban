/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-05-13 16:43:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-05-13 17:00:51
 */

const app = getApp();

Page({
  data: {
    statusBar: app.globalData.statusBar,  
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,

    imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      interval: 3000, //停留时间间隔
      duration: 1000, //播放时长
      previousMargin: '100px', //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
      nextMargin: '100px', //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
      circular: true, //是否采用衔接滑动
      currentSwiperIndex: 0, //swiper当前索引
  },

 
  onLoad: function (options) {

  },
  swiperBindchange(e) {
    this.setData({
      currentSwiperIndex: e.detail.current
    })
  },
})