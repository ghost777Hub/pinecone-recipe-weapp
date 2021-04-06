import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRequest } from '../../api/request'
import { ALLURLPATH } from '../../api/url'



//类型定义
interface recipesState {
  /**轮播图数据 */
  bannerListData: any[]
  /**推荐卡数据 */
  recommendData: {},
  /**搜索关键词数据 */
  keyWordData: any[],
  /**随机食谱数据 */
  randomRecipesData: {}
}

//数据
const initialState: recipesState = {
  bannerListData: [],
  recommendData: {},
  keyWordData: [],
  randomRecipesData: {}
}


/*异步API请求*/
//获取首页轮播图API
export const getHomeBannerAPI = createAsyncThunk(
  'recipes/getHomeBannerAPI',
  async () => {
    //第二参数thunkAPI: thunkAPI.dispatch()
    const res = await getRequest(ALLURLPATH.HOMEBANNER)
    return res
  }
)
//获取首页推荐卡API
export const getHomeRecommendAPI = createAsyncThunk(
  'recipes/getHomeRecommendAPI',
  async () => {
    const res = await getRequest(ALLURLPATH.HOMERECOMMEND)
    return res
  }
)
//获取随机页关键词API
export const getRandomWordAPI = createAsyncThunk(
  'recipes/getRandomWordAPI',
  async () => {
    const res = await getRequest(ALLURLPATH.RANDOMWORD)
    return res
  }
)
//获取随机页生成食谱API
export const getRandomRecipesAPI = createAsyncThunk(
  'recipes/getRandomRecipesAPI',
  async () => {
    const res = await getRequest(ALLURLPATH.RANDOMRECIPES)
    return res
  }
)


//创建slice
export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers:{
    //获取首页轮播图API
    [getHomeBannerAPI.pending.type]: (state,  action)=>{
      console.log('getHomeBannerAPI等待:', state, action)
    },
    [getHomeBannerAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data.data
      state.bannerListData = _data
      console.log('getHomeBannerAPI成功:', state, _data)
    },
    [getHomeBannerAPI.rejected.type]: (state,  action)=>{
      console.log('getHomeBannerAPI失败:', state, action)
    },

    //获取首页推荐卡API
    [getHomeRecommendAPI.pending.type]: (state,  action)=>{
      console.log('getHomeRecommendAPI等待:', state, action)
    },
    [getHomeRecommendAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data.data
      state.recommendData = _data
      console.log('getHomeRecommendAPI成功:', state, _data)
    },
    [getHomeRecommendAPI.rejected.type]: (state,  action)=>{
      console.log('getHomeRecommendAPI失败:', state, action)
    },

    //获取随机页关键词API
    [getRandomWordAPI.pending.type]: (state,  action)=>{
      console.log('getRandomWordAPI等待:', state, action)
    },
    [getRandomWordAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data.data
      state.keyWordData = _data
      console.log('getRandomWordAPI成功:', state, _data)
    },
    [getRandomWordAPI.rejected.type]: (state,  action)=>{
      console.log('getRandomWordAPI失败:', state, action)
    },

    //获取随机页生成食谱API
    [getRandomRecipesAPI.pending.type]: (state,  action)=>{
      console.log('getRandomRecipesAPI等待:', state, action)
    },
    [getRandomRecipesAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data.data
      state.randomRecipesData = _data
      console.log('getRandomRecipesAPI成功:', state, action)
    },
    [getRandomRecipesAPI.rejected.type]: (state,  action)=>{
      console.log('getRandomRecipesAPI失败:', state, action)
    },
  }
})