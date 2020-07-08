const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hero:app.globalData.hero,    //全局数组
    statusBar: app.globalData.statusBar,    //获得系统通知栏的高度
    customBar: app.globalData.customBar,    //
    custom: app.globalData.custom,  //都是
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // {name:'name',img:'img',lines:'lings'}

  },
  back:function(e){
    wx.navigateBack({
      delta: 1
    })
  },

  // 取得文本框内容
  inputname:function(e){
      console.log(e)
    var name = e.detail.value;
    var curname = e.detail.cursor;
    var typename = e.currentTarget.dataset.type;
    this.setData({
        name:name,
        curname:curname,
        typename:typename
    })
  },
  inputimg:function(e){
    var img = e.detail.value;
    var curimg = e.detail.cursor
    var typeimg = e.currentTarget.dataset.type;
    this.setData({
        img:img,        //内容 
        curimg:curimg,  // 字段下标
        typeimg:typeimg
    })
  },
  inputlines:function(e){
    var lines = e.detail.value;
    var curlines = e.detail.cursor
    var typelines = e.currentTarget.dataset.type;
    this.setData({
        lines:lines,
        curlines:curlines,
        typelines:typelines
    })
  },
//  提交
  sumb:function(e){
      let that = this;
      let name = that.data.name;
      let img = that.data.img;
      let lines= that.data.lines;
      let curname =that.data.curname;
      let curimg =that.data.curimg;
      let curlines =that.data.curlines;
      if(curname == 0){
          wx.showModal({
              title: '英雄名称不能为空',
          })
      }
      if(curimg == 0){
        wx.showModal({
            title: '英雄头像不能为空',
        })
      }
      if(curlines == 0 ){
        wx.showModal({
            title: '英雄台词不能为空',
        })
      }
      if(curname != 0 && curimg != 0 && curlines != 0){
          wx.showToast({
              title: '正在提交',
              icon: 'success',
              duration:1000
          })
        var hero = app.globalData.hero;
        getApp().globalData.hero = getApp().globalData.hero.concat({name:name,lines:lines,img:img});
        this.setData({
            hero:hero
        })  
        wx.redirectTo({
            url: '../lookDping/lookDping'
        })
      }
      

      //测试
      getApp().globalData.names = 'marset';
      var names = app.globalData.names;
      this.setData({
          names:names
      })

  }
})