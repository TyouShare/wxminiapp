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
    // 刷新页面
    let oldItem = this.data.detailItem;
    oldItem.favourite = '../../images/tabbar_favourite.png';
    for (var j = 0; j < favouriteList.length; j++) {
      let favouriteItem = favouriteList[j]
      if (favouriteItem.name == oldItem.name) {
        oldItem.favourite = '../../images/tabbar_favourite_selected.png';
        continue;
      }
    }

    this.setData({
      detailItem: oldItem
    });

    wx.setStorage({
      key: 'collection',
      data: favouriteList
    })
  }
})