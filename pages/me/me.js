// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"xxx",
    mobile:"12345678",
    descr:"自我介绍",
    avatar:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555066398046&di=5c8a825f999787ed36717ca948207441&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161221%2F9760e3d5c61f41009cdddfb31795b8af_th.jpeg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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