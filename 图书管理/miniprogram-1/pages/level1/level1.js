// pages/level1/level1.js
Page({
  getUserInfo: function (e) {
    var page = this
    if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '未授权',
        success: function (res) { }
      })
    } else {
      var data = {
        open_id: page.data.open_id,
        iv: e.detail.iv,
        edata: e.detail.encryptedData,
        signature: e.detail.signature
      }
     
      //注意，这里不检查登陆态了，默认一直有效，这是个隐含的问题,因为wx.checkSession永远都是fail，不知道为啥，以后再来处理吧。
      // wx.checkSession({
      //   success: function () {
      //     var data = {
      //       open_id: this.open_id,
      //       iv: e.detail.iv,
      //       edata: e.detail.encryptedData
      //     };
      //     page.toLogin(data);
      //   },
      //   fail: function () {
      //     // session_key 已经失效，需要重新执行登录流程
      //     //wx.login() //重新登录
      //   }
      // })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})