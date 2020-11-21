// pages/text12/text12.js
Page({
  data:{
    gender: ""
  },
  handleChange(e){
    //获取单选框的值
    let gender=e.detail.value;
    //把值赋值给data中的数据
    this.setData(
      {
        gender
      }
    )
  }
})