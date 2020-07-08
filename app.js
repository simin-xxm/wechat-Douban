//app.js


App({

  onLaunch: function () {

    // this.globalData.hero = 

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户机器状态栏信息
    wx.getSystemInfo({
      success: e =>{
        this.globalData.statusBar = e.statusBarHeight; //状态栏高度
        let custom = wx.getMenuButtonBoundingClientRect();//菜单按钮
        this.globalData.custom = custom;
        this.globalData.customBar = custom.bottom + custom.top - e.statusBarHeight;
        //计算得到定义的状态栏高度
        // console.log(custom)
      }
    })
    
    // 获取用户信息
    wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                console.log("app.js:"+res.userInfo)
                this.globalData.userInfo = res.userInfo
                this.globalData.login = false
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            })
          }
        }
    })
  },
  globalData: {
    userInfo: null,
    hero:[  
        {name:'艾瑞利亚',lines:'均衡存乎万物之间。我的剑刃愿为你效劳。均衡存乎万物之间。 我的剑刃愿为你效劳。均衡存乎万物之间。 我的剑刃愿为你效劳。',img:'http://img2.imgtn.bdimg.com/it/u=1840416473,915427395&fm=26&gp=0.jpg'},
        {name:'Ashe',lines:'我射的很准！',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=337914839,1803386594&fm=26&gp=0.jpg'},
        {name:'安妮',lines:'你也要来玩吗?很好玩的哦 再烦我就打你哦 爱玩火法的火法的火球 你看见我的小熊了吗',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2479735790,764684083&fm=26&gp=0.jpg'},
        {name:'炼金',lines:'摇还是不摇，这是一个问题 ',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1247305700,2488837962&fm=26&gp=0.jpg'},
        {name:'娑娜',lines:'完美的二重唱',img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2508546553,2854682852&fm=26&gp=0.jpg'},
        {name:'好运姐',lines:'我有两把枪，一把叫射，另一把叫…啊。 你确定能把到我吗',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3382200605,3406192068&fm=26&gp=0.jpg'},
        {name:'ez',lines:'是时候表演真正的技术了！',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3024676974,4242248627&fm=26&gp=0.jpg'},
        {name:'亡灵',lines:'不要再2了 ',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=589523712,3025253038&fm=26&gp=0.jpg'},
        {name:'小炮',lines:'我好想射点什么 ',img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=601712070,3987141674&fm=26&gp=0.jpg'},
        {name:'狗头',lines:'生与死轮回不止，我们生他们死',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1273509877,3196870361&fm=26&gp=0.jpg'},
        {name:'盲僧',lines:'我用双手成就你的梦想',img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4173909830,717820732&fm=26&gp=0.jpg'},
        {name:'诡术妖姬',lines:'接下来要表演的是，将你的血条弄消失！',img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1259790526,3930216193&fm=26&gp=0.jpg'},
        {name:'武器',lines:'呵！一个能打的都没有。',img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=658971964,450855833&fm=26&gp=0.jpg'}
    ]
  }
})