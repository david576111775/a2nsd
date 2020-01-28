export default {
  state: {
    phone:'',
    imgSrc:'',
    username:'',
  },
  mutations:{  //相当于method
    setPhone(state,phone){
      state.phone=phone;  //不能加this
    },
    setImgSrc(state,imgSrc){
      state.imgSrc=imgSrc;
    },
    setUserName(state,username){
      state.username=username;
    },
  },
  getters:{  //相当于computed 数据改变就会触发
    optCount:function(state){
      return state.phone;
    },
    getImgSrc:function (state) {
      return state.imgSrc;
    },
    getUserName:function (state) {
      return state.username;
    }
  },
}