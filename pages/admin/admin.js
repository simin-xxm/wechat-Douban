const app = getApp();
Page({

  data: {
    statusBar: app.globalData.statusBar,    //获得系统通知栏的高度
    customBar: app.globalData.customBar,    //
    custom: app.globalData.custom,  //都是
    // login:false
  },

  onLoad: function (options) {
      let that = this;
    //   是否授权
    if (app.globalData.userInfo === null) {
        that.setData({
          login: false
        })
      } else {
        that.setData({
          login: true,
          avatarUrl: app.globalData.userInfo.avatarUrl,
          nickName: app.globalData.userInfo.nickName
        })
      }
  },
    //   获得用户头像和昵称
  bindGetUserInfo(e) {
    wx.showLoading({
        title: '加载中',
    })
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(e.detail.userInfo);
        app.globalData.userInfo = e.detail.userInfo;
        that.setData({
          login: true,
          avatarUrl: e.detail.userInfo.avatarUrl,
          nickName: e.detail.userInfo.nickName
        })
        setTimeout(function () {
            wx.hideLoading()
        },500)
      }
    })
  },


})