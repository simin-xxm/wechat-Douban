const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBar: app.globalData.statusBar,    //获得系统通知栏的高度
    customBar: app.globalData.customBar,    //
    custom: app.globalData.custom,  //都是
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow: function () {
    this.setData({
      hero: app.globalData.hero,
      cs:app.globalData.cs
    })
  },
  back:function(e){
    wx.navigateBack({
      delta: 1
    })
  },
//   跳转评论页
  jumpPing:function(e){
      wx.navigateTo({
          url: '../../detailed/comment/comment'
      })
  }
})