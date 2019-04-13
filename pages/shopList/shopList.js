// 物品列表页面
Page({
  data: {
    item: [{
        "name": "面膜",
        "descr": "这款面膜很好",
        "price": "人民币 150元",
        "imageUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555066192050&di=538e6eb3e2e881fecbdb63bc0361f949&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fm8%2FM07%2FD5%2F17%2FwKhQplb12vSEc7W7AAAAALr2l3k971.jpg",
        "imageList":[
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555066192050&di=538e6eb3e2e881fecbdb63bc0361f949&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fm8%2FM07%2FD5%2F17%2FwKhQplb12vSEc7W7AAAAALr2l3k971.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555066192050&di=538e6eb3e2e881fecbdb63bc0361f949&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fm8%2FM07%2FD5%2F17%2FwKhQplb12vSEc7W7AAAAALr2l3k971.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555066192050&di=538e6eb3e2e881fecbdb63bc0361f949&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fm8%2FM07%2FD5%2F17%2FwKhQplb12vSEc7W7AAAAALr2l3k971.jpg"
        ]
      }, {
        "mobile" : "123456",
        "name": "卸妆棉",
        "descr": "这款面膜很好",
        "price": "人民币 150元",
        "imageUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555066398046&di=5c8a825f999787ed36717ca948207441&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161221%2F9760e3d5c61f41009cdddfb31795b8af_th.jpeg"
      }, {
        "name": "面膜",
        "descr": "这款面膜很好",
        "price": "人民币 150元",
        "imageUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555066192050&di=538e6eb3e2e881fecbdb63bc0361f949&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fm8%2FM07%2FD5%2F17%2FwKhQplb12vSEc7W7AAAAALr2l3k971.jpg"
      }, {
        "name": "卸妆棉",
        "descr": "这款面膜很好",
        "price": "人民币 150元",
        "imageUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555066398046&di=5c8a825f999787ed36717ca948207441&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161221%2F9760e3d5c61f41009cdddfb31795b8af_th.jpeg"
      }

    ],
    text: "商品展示列表"
  },

  onLoad:function(options) {
    // 页面加载
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
  }
})