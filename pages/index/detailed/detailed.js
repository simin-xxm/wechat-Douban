const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBar: app.globalData.statusBar,    //获得系统通知栏的高度
    customBar: app.globalData.customBar,    //
    custom: app.globalData.custom,  //都是
    isok:1,
    id:'',
    showitem: false,    //开关 当接口数据没渲染完成时
    hero:app.globalData.hero    //全局数组
  },
  // 即将上映
  loadMovie:function(e){
    //   console.log(e)
    let that = this;  
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      header: {
        'Content-Type':"application/text"
      },
      success:result =>{
        let datas = result.data;
        console.log(datas);
        that.setData({
            showitem:true,
            movie:datas["subjects"]
        })
        setTimeout(function () {
            wx.hideLoading()
        },2000)
      },
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
      // console.log(result);
      let datas = result.data;
      this.setData({
        showitem:true,
        movie : datas['subjects']
      })
      setTimeout(function () {
        wx.hideLoading()
    },2000)
    },
    })
  },
  // 排行250
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
            showitem:true,
            movie: datas['subjects']
        })
        setTimeout(function () {
            wx.hideLoading()
        },2000)
      }
    })
  },

  onLoad: function (options) {
    wx.showLoading({
        title: '加载中',
    })
     let that = this;
     let id = options.id;
     let type = options.type;
     that.setData({
       id:id
     })
     if(type == "load"){
      this.loadMovie();
     }else
     if(type == "coming"){
      this.comingMovie();
     }else
     if(type == "top"){
      this.top250Movie();
     }
  },
  switch:function(e){
    // 展开和关闭
    let isok =this.data.isok;
    if(isok == 1){
      this.setData({
        isok:2,
      })
    }else if(isok== 2){
      this.setData({
        isok:1
      })
    }
  },
  back:function(e){
    wx.navigateBack({
      delta: 1
    })
  },
  lookDping:function(){
      wx.navigateTo({
          url: '../detailed/lookDping/lookDping'
      })
  },
  lookYping:function(){
      wx.navigateTo({
          url: '../detailed/lookYping/lookYping'
      })
  }
})