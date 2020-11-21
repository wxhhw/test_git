// pages/text13/text13.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    list:[
      {
        id:0,
        name:"苹果",
        value:"apple"
      },
      {
        id:1,
        name:"葡萄",
        value:"grape" 
      },
      {
        id:2,
        name:"香蕉",
        value:"banana"
      }
    ],

    checked_list:[]
  },

  

  handleItemChange(e){
    const checked_list=e.detail.value;
    this.setData(
      {
        checked_list
      }
    )
  }

  
})