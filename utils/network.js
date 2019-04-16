//
function requestListData(success, fail) {
  wx.showLoading();
  wx.request({
    url: "https://raw.githubusercontent.com/TyouShare/mallConfig/master/list_config.json",
    success(result) {
      if (result.data) {
        // 保存起来，下次用
        var encodeData = escape(JSON.stringify(result.data))
        wx.setStorage({
          key: 'list',
          data: encodeData,
        })
      }
      success(result.data)
      wx.hideLoading();
    },
    fail(result) {
      console.log(result)
      // 接口调失败了，就用本地缓存数据
      wx.getStorage({
        key: 'list',
        success: function(res) {
          var listData = JSON.parse(unescape(res.data))
          success(listData);
        },
        fail: function(res) {
          fail('')
        }
      })
      wx.hideLoading();
    }
  })
}

module.exports.requestListData = requestListData