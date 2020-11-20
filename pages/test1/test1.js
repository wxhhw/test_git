// pages/test1/test1.js
Page({
  data:
  {
    num:0
  },

  handleInput(e){
    //console.log(e.detail.value)
    this.setData(
      {
        num:e.detail.value
      }
    )
  },

  handleTap(e){
    //console.log(e)，如果记不住以下的值，那么可以通过在控制台打印的方式来推理
    const operation=e.currentTarget.dataset.in//从事件源当中获得自定义属性in的值
    this.setData(
      {
        num:this.data.num+operation//使用获取到的值来改变num的值
      }
    )
  }

})