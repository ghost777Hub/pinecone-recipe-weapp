import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {getStorage, setStorage} from '../../utils/storage'



//类型定义
interface userState {
  /**是否是微信平台 */
  ISWEAPP: boolean
  /**设置页可选的背景图 */
  allSettingsBgData: Array<{
    title: string;
    bgCode: string;
  }>;
  /**当前背景图 文字*/
  currentBgExtraText: string;
  /**当前页背景 图片标识*/
  currentBgCode: string;
}

//数据
const initialState: userState = {
  ISWEAPP: process.env.TARO_ENV === "weapp",
  allSettingsBgData: [
    {
      title: '橘子时光',
      bgCode: 'a1IhX.jpg'
    },
    {
      title: '草莓松饼',
      bgCode: 'a101H.jpg'
    },
    {
      title: '多色软糖',
      bgCode: 'a1ZAd.jpg'
    },
    {
      title: '清新面点',
      bgCode: 'a1TEp.jpg'
    },
    {
      title: '覆盆子',
      bgCode: 'a14Iq.jpg'
    },
    {
      title: '柿子甜筒',
      bgCode: 'a1Vg6.jpg'
    }
  ],
  currentBgExtraText: getStorage('currentBgExtraText') || '橘子时光',
  currentBgCode: getStorage('currentBgCode') || 'a1IhX.jpg',
}


/*异步API请求*/
//某某API
// export const getTemplateAPI = createAsyncThunk(
//   'user/getTemplateAPI',
//   async (parameters:{},) => {
//     //第二参数thunkAPI: thunkAPI.dispatch()
//     const res = await fetch('',parameters)
//     return res
//   }
// )


//创建slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**改变背景图 */
    changeSettingsPageBg(state, payload){
      const _index = payload.payload
      const _bgData = state.allSettingsBgData
      const title = _bgData[Number(_index)].title
      const bgCode = _bgData[Number(_index)].bgCode
      state.currentBgExtraText = title
      state.currentBgCode = bgCode
      setStorage('currentBgExtraText', title)
      setStorage('currentBgCode', bgCode)
    }
  },
  extraReducers:{
    // [getTemplateAPI.pending.type]: (state,  action)=>{
    //   // console.log('getTemplateAPI:', state, action)
    // },
    // [getTemplateAPI.fulfilled.type]: (state,  action)=>{
    //   // console.log('getTemplateAPI:', state, action)
    // },
    // [getTemplateAPI.rejected.type]: (state,  action)=>{
    //   // console.log('getTemplateAPI:', state, action)
    // },
  }
})