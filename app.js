//app.js

App({
  onLaunch: function() {
    var collection = wx.getStorageSync('collection');
    if (collection){
      this.globalData.favouriteList = wx.getStorageSync('collection')
    }else{
      this.globalData.favouriteList = new Array;
    }
  },
  globalData:{
    favouriteList:[]
  }
})