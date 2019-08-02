// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据14:24
   */
  data: {
    value:"",     //输入框中用户输入内容
    score:5,      //打分默认 5分(满分)
    movieid:0,    //电影id值
    detail:{}    //保存电影信息
  },
  loadMore(){
    //功能:发送请求获取云函数返回数据
    //1:接收电影列表传递参数id
    var id = this.data.movieid;
    console.log(id);
    //2:显示数据加载提示框
    wx.showLoading({
      title: '加载中...',
    })
    //3:调用云函数
    wx.cloud.callFunction({
      name:"getDetail4", //云函数名字
       data:{id:id}
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
    //4:获取云函数返回结果17:48
     //4.1:将云函数返回字符串转js对象
     //4.2:保js对象保存 deail
     //4.3:隐藏加载提示框
  },
  onScoreChange:function(e){
    //用户打分对应事件处理函数
    //1:获取用户现在输入分数
    //console.log(e.detail);
    //2:将用户输入新分数赋值操作
    this.setData({
      score:e.detail
    })
  },
  onContentChange:function(e){//e事件对象
    //输入框对应事件处理函数
    //用户输入内容
    console.log(e.detail);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //将电影列表组件传递参数 id
     //保存data中movieid
     this.setData({
       movieid:options.id
     });
     this.loadMore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})