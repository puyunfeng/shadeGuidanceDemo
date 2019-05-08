//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showShade:true
  },

  onLoad: function () {
   
  },
  openShade(){
    this.setData({
      showShade:true
    })
  }
})
