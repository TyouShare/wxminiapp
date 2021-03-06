// 物品列表页面
const network = require('../../utils/network.js')
Page({
  data: {
    item: []
  },

  onLoad: function(options) {
    //
    var that = this;
    var success = function(result) {
      console.log(result);
      that.setData({
        item: result
      });
      that.reloadItem();
    }
    var fail = function(result) {
      console.log('加载失败');
    }
    network.requestListData(success, fail)
  },

  onShow: function (options){
    this.reloadItem();
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
  },

  favourite_tap: function(arg) {
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
    this.reloadItem();
    wx.setStorage({
      key: 'collection',
      data: favouriteList
    })
  },

  reloadItem:function(){
    const appInstance = getApp();
    var favouriteList = appInstance.globalData.favouriteList;
    // 刷新页面
    var oldItems = this.data.item;
    for (var i = 0; i < oldItems.length; i++) {
      var oldItem = oldItems[i]
      oldItem.favourite = '../../images/tabbar_favourite.png';
      for (var j = 0; j < favouriteList.length; j++) {
        let favouriteItem = favouriteList[j]
        if (favouriteItem.name == oldItem.name) {
          oldItem.favourite = '../../images/tabbar_favourite_selected.png';
          continue;
        }
      }
    }
    this.setData({
      item: oldItems
    });
  }
})