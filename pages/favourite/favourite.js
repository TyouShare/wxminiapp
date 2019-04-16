// 收藏列表页面
Page({
  data: {
    item: []
  },

  onShow: function (options) {
    //
    const appInstance = getApp();
    var favouriteList = appInstance.globalData.favouriteList;
    this.setData({
      item:favouriteList
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

  mobile_tap: function (arg) {
    //
    var mobile = arg.currentTarget.dataset.mobile;
    const connect = require('../../utils/connect.js')
    connect.alert(mobile)
  },

  favourite_tap: function (arg) {
    var item = arg.currentTarget.dataset.item;
    const appInstance = getApp();
    var favouriteList = appInstance.globalData.favouriteList;

    let has = false;
    for (var i = 0; i < favouriteList.length; i++) {
      let favouriteItem = favouriteList[i]
      if (favouriteItem.name == item.name) {
        favouriteList.splice(i, 1); // 将使后面的元素依次前移，数组长度减1
        i--; // 如果不减，将漏掉一个元素
        item.favourite = '../../images/tabbar_favourite.png';
        has = true;
      }
    }

    if (has == false) {
      item.favourite = '../../images/tabbar_favourite_selected.png';
      favouriteList.push(item);
    }

    this.setData({
item:favouriteList
    });

    wx.setStorage({
      key: 'collection',
      data: favouriteList
    })
  }

})