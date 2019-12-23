// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students1: {},
    startX: 0,
    endX: 0,
    shows: [],
    disps: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中',
    })

    var that = this;
    wx.request({
      url: 'http://192.168.43.201:8080/crm/sysUser/users.action',
      success: function (res) {
        console.log(res)
        that.setData({
          students1: res.data
        })
        wx.hideLoading();
      }
    })
  },
  toDetail: function (e) {
    // console.log(e)
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../user/detail/detail?usrId=' + e.currentTarget.dataset.id,
    })
  },

  toEdit: function (e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../user/edit/edit?usrId=' + e.currentTarget.dataset.id,
    })
  },

  touchStart: function (e) {
    console.log('接触屏幕时的x轴坐标' + e.changedTouches[0].pageX)
    this.data.startX = e.changedTouches[0].pageX
  },

  /**
   * 结束的时候判断两个x轴的值进行比较
   * this.data.endX-this.data.startX>50 右滑
   * this.data.endX-this.data.startX<-50 左滑
   */
  touchEnd: function (e) {
    console.log('离开屏幕时的x轴坐标' + e.changedTouches[0].pageX)
    this.data.endX = e.changedTouches[0].pageX
    var shows_ = this.data.shows
    var disps_ = this.data.disps
    if (this.data.endX - this.data.startX > 50) {
      //右滑的时候样式消失
      console.log(e.currentTarget.dataset.id + '右滑效果')
      console.log('右滑效果')
      shows_[e.currentTarget.dataset.id] = ''
      disps_[e.currentTarget.dataset.id] = 'none'
    }
    if (this.data.endX - this.data.startX < -50) {
      //左滑的时候样式出现
      //把shows[]对应的index的值的改掉，在setData
      console.log(e.currentTarget.dataset.id + '左滑效果')
      shows_[e.currentTarget.dataset.id] = 'translateX(-207px)'
      disps_[e.currentTarget.dataset.id] = 'inline'
    }
    this.setData({
      shows: shows_,
      disps: disps_
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading();
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