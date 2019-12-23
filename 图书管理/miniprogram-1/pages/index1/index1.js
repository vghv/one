// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasLogin: false
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

  },
  checkLogin() {
    wx.showToast({
      title: '请先登录!',
      icon: 'none',
      duration: 800,
      success: function (res) {
        setTimeout(() => {
          wx.navigateTo({
            url: '../login/level1/level1'
          })
        }, 800)
      }
    })
  },
  //收货地址
   addressList: function () {
    if (!this.data.hasLogin) {
      return this.checkLogin()
    }
    wx.navigateTo({
      url: '../addressList/addressList'
    })
  },
  //我的优惠券
  coupon: function () {
    if (!this.data.hasLogin) {
      return this.checkLogin()
    }
    wx.navigateTo({
      url: '../coupon/coupon'
    })
  },
  //待发货订单
  orderNoShip: function () {
    if (!this.data.hasLogin) {
      return this.checkLogin()
    }
    wx.navigateTo({
      url: '../book/book_list'
    })
  }

})