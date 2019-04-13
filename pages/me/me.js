// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    mobile:"",
    descr:"自我介绍",
    avatar:"",
    hasData:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载
    var that = this;
    wx.getStorage({
      key: 'me',
      success: function (res) {
        var meData = JSON.parse(unescape(res.data))
        that.setData({
          name: meData.name,
          descr: meData.descr,
          mobile: meData.mobile,
          avatar: meData.avatar,
          hasData: true
        })
      },
    })

    this.loadConfig();
  },

  loadConfig: function () {
    var that = this;
    wx.request({
      url: "https://raw.githubusercontent.com/TyouShare/mallConfig/master/me.json",
      success(result) {
        var meData = result.data;
        if (meData) {
          if (that.data.hasData == false) {
            that.setData({
              name: meData.name,
              descr: meData.descr,
              mobile: meData.mobile,
              avatar: meData.avatar,
              hasData: true
            })
          }
          // 保存起来，下次用
          var encodeData = escape(JSON.stringify(result.data))
          wx.setStorage({
            key: 'me',
            data: encodeData,
          })
        }
      },
      fail(result) {
        console.log(result)
      }
    })
  },

  avatat_tap: function (arg){
    console.log(arg);
    // 预览头像
    var avatarUrl = arg.currentTarget.dataset.url;
    if (avatarUrl.length > 0){
      wx.previewImage({
        urls: [avatarUrl],
      })
    }
  },
  mobile_tap : function (arg) {
    //
    var mobile = arg.currentTarget.dataset.mobile;
    const connect = require('../../utils/connect.js')
    connect.alert(mobile)
  }
})