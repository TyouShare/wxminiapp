// 物品详情页面
Page({
  data: {
    detailItem: {},
    imageList:{}
  },

  onLoad: function(option) {
    // 页面加载
    var item = JSON.parse(unescape(option.detailItem))
    this.setData({
      detailItem : item,
      imageList : item.imageList
    })
  },

  image_tap: function (arg) {
    console.log(arg);
    // 预览头像
    var urls = arg.currentTarget.dataset.urls;
    if (urls.length > 0) {
      wx.previewImage({
        urls: urls
      })
    }
  },
  
  mobile_tap: function (arg) {
    //
    var mobile = arg.currentTarget.dataset.mobile;
    const connect = require('../../utils/connect.js')
    connect.alert(mobile)
  }
})