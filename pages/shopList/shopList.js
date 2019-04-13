// 物品列表页面
Page({
  data: {
    item: []
  },

  onLoad: function(options) {
    // 页面加载
    var that = this;
    wx.getStorage({
      key: 'list',
      success: function(res) {
        var listData = JSON.parse(unescape(res.data))
        that.setData({
          item: listData
        })
      },
    })

    this.loadConfig();
  },

  loadConfig: function() {
    var that = this;
    wx.request({
      url: "https://raw.githubusercontent.com/TyouShare/mallConfig/master/list_config.json",
      success(result) {
        if (result.data) {
          if (that.data.item.length == 0){
            console.log(result.data);
            that.setData({
              item: result.data
            })
          }
          // 保存起来，下次用
          var encodeData = escape(JSON.stringify(result.data))
          wx.setStorage({
            key: 'list',
            data: encodeData,
          })
        }
      },
      fail(result) {
        console.log(result)
      }
    })
  },

  // cell 点击事件
  handelTap(arg) {
    // 跳转详情页面
    var detailItem = arg.currentTarget.dataset.item;
    wx.navigateTo({
      url: "../shopDetail/shopDetail?detailItem=" + escape(JSON.stringify(detailItem))
    })
  },

  mobile_tap: function(arg) {
    //
    var mobile = arg.currentTarget.dataset.mobile;
    const connect = require('../../utils/connect.js')
    connect.alert(mobile)
  }
})