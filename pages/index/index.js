/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-05-11 14:41:39 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-05-13 18:13:16
 */
const app = getApp();

Page({
  data: {
    statusBar: app.globalData.statusBar,  
    customBar: app.globalData.customBar,
    custom: app.globalData.custom,
      duration: 1000, //播放时长
      previousMargin: '100px', //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
      nextMargin: '100px', //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
      circular: true, //是否采用衔接滑动
      currentSwipermovie: 0, //swiper索引
      currentSwipercoming: 0,
      currentSwipertop: 0,
  },
    //      轮播图下标
    swipermovie(e) {
        this.setData({
        currentSwipermovie: e.detail.current
     })
    },
    swipercoming(e) {
        this.setData({
        currentSwipercoming: e.detail.current
     })
    },
    swipertop(e) {
        console.log(e)
        this.setData({
        currentSwipertop: e.detail.current
     })
    },

  
  // 即将上映
  loadMovie:function(e){
    let that = this;  
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      header: {
        'Content-Type':"application/text"
      },
      success:result =>{
        let datas = result.data;
        that.setData({
          showitem:true,
          movie:datas["subjects"],
          loadMovie:datas.title,
        })
        setTimeout(function () {
            wx.hideLoading()
        },2000)
      },
      complete: res =>{
        wx.showLoading({
        title: '加载中',
      })
    }     
    })
  },

  // 正在热映
  comingMovie:function(e){
    wx.request({
      url:'https://douban.uieee.com/v2/movie/in_theaters',
    header:{
      'Content-Type':"application/text"
    },
    success:result =>{
        console.log(result)
      let datas = result.data;
      this.setData({
        coming : datas['subjects'],
        comingMovietitle:datas.title
      })
      setTimeout(function () {
        wx.hideLoading()
      },1000)
    },
    complete: res =>{
        wx.showLoading({
            title: '加载中',
        })
    }
    })
  },
  // 排行
  top250Movie:function(e){
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250',
      header:{   
        'Content-Type':"application/text"
      },
      dataType:'json',
      success:(res)=>{
        let datas =res.data;
        this.setData({
          top: datas['subjects'],
          top250Movietitle:datas.title
        })
        setTimeout(function () {
            wx.hideLoading()
        },1000)
      },
      complete: res =>{
        wx.showLoading({
        title: '加载中',
      })
    }
    })

  },
  onLoad: function (options) {
    wx.showLoading({
        title: '加载中',
    })
    this.loadMovie();
    this.comingMovie();
    this.top250Movie();
  },
  cc:function(e){
    // console.log(e);
    let type = e.currentTarget.dataset.type;
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/index/detailed/detailed?id='+id+"&type="+type
    })
    
  }
})
