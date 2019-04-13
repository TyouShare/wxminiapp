//
function alert(mobile){
  if (mobile.length > 0) {
    wx.showActionSheet({
      itemList: ["联系我", "复制号码"],
      success(res) {
        if (res.tapIndex == 0) {
          // 打电话
          wx.makePhoneCall({
            phoneNumber: mobile,
          })
        } else if (res.tapIndex == 1) {
          // 复制
          wx.setClipboardData({
            data: mobile,
            success(res) {
              console.log(res)
            }
          })
        }
      }
    })
  }else{

  }
}

module.exports.alert = alert
