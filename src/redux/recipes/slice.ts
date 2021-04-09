import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRequest, postRequest } from '../../api/request'
import { ALLURLPATH } from '../../api/url'



//类型定义
interface recipesState {
  /**轮播图数据 */
  bannerListData: any[];
  /**推荐卡数据 */
  recommendData: {};
  /**搜索关键词数据 */
  keyWordData: any[];
  /**随机食谱数据 */
  randomRecipesData: {};
  /**食谱列表数据 */
  recipesListData: any[];
  /**数据请求完成前loading */
  loading: boolean;  //有DOM渲染，回到顶部问题。列表页不用了，用原生showloading
  /**数据错误 */
  error: string | null;
  /**当前数据列表数据码 */
  currentPage: number;
  /**食谱详情数据 */
  recipesDetailData: {};
}

//数据
const initialState: recipesState = {
  bannerListData: [],
  recommendData: {},
  keyWordData: [],
  randomRecipesData: {},
  recipesListData: [],
  loading: true,
  error: null,
  currentPage: 0,
  recipesDetailData: {}
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
//获取食谱列表API
export const postRecipesListAPI = createAsyncThunk(
  'recipes/postRecipesListAPI',
  async (parameters:{type:'search'|'class',  value:string, currentPage?:number}) => {
    let res
    if(parameters.type === 'search') {
      res = await postRequest(ALLURLPATH.RECIPESLIST, parameters)
    }
    //class具有分页性质
    if(parameters.type === 'class'){
      res = await postRequest(ALLURLPATH.RECIPESLIST, {
        type: parameters.type,
        value: parameters.value,
        currentPage: parameters.currentPage || 0
      })
    }
    return res
  }
)
//下拉刷新食谱列表API
export const postRecipesListPullDownAPI = createAsyncThunk(
  'recipes/postRecipesListPullDownAPI',
  async (parameters:{type: 'class',  value:string, currentPage:number}) => {
    const res = await postRequest(ALLURLPATH.RECIPESLIST, {
      type: parameters.type,
      value: parameters.value,
      currentPage: parameters.currentPage || 0
    })
    return res
  }
)
//获取食谱详情
export const postRecipesDetailAPI = createAsyncThunk(
  'recipes/postRecipesDetailAPI',
  async (parameters:{rId:string}) => {
    // console.log('parameters.id', parameters.rId);
    const res = await postRequest(ALLURLPATH.RECIPESDETAIL, parameters)
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
      const _data = action.payload.data
      state.bannerListData = _data
      console.log('getHomeBannerAPI成功:', state, action)
    },
    [getHomeBannerAPI.rejected.type]: (state,  action)=>{
      console.log('getHomeBannerAPI失败:', state, action)
    },

    //获取首页推荐卡API
    [getHomeRecommendAPI.pending.type]: (state,  action)=>{
      console.log('getHomeRecommendAPI等待:', state, action)
    },
    [getHomeRecommendAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data
      state.recommendData = _data
      console.log('getHomeRecommendAPI成功:', state, action)
    },
    [getHomeRecommendAPI.rejected.type]: (state,  action)=>{
      console.log('getHomeRecommendAPI失败:', state, action)
    },

    //获取随机页关键词API
    [getRandomWordAPI.pending.type]: (state,  action)=>{
      console.log('getRandomWordAPI等待:', state, action)
    },
    [getRandomWordAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data
      state.keyWordData = _data
      console.log('getRandomWordAPI成功:', state, action)
    },
    [getRandomWordAPI.rejected.type]: (state,  action)=>{
      console.log('getRandomWordAPI失败:', state, action)
    },

    //获取随机页生成食谱API
    [getRandomRecipesAPI.pending.type]: (state,  action)=>{
      console.log('getRandomRecipesAPI等待:', state, action)
    },
    [getRandomRecipesAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data
      state.randomRecipesData = _data
      console.log('getRandomRecipesAPI成功:', state, action)
    },
    [getRandomRecipesAPI.rejected.type]: (state,  action)=>{
      console.log('getRandomRecipesAPI失败:', state, action)
    },

    //获取食谱列表API
    [postRecipesListAPI.pending.type]: (state,  action)=>{
      console.log('postRecipesListAPI等待:', state, action)
    },
    [postRecipesListAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data
      state.currentPage = _data.currentPageCode
      state.recipesListData = _data.pageData
      state.error = null
      console.log('postRecipesListAPI成功:', state, action)
    },
    [postRecipesListAPI.rejected.type]: (state,  action)=>{
      state.error = action.payload
      console.log('postRecipesListAPI失败:', state, action)
    },

    //下拉刷新食谱列表API
    [postRecipesListPullDownAPI.pending.type]: (state,  action)=>{
      console.log('postRecipesListPullDownAPI等待:', state, action)
    },
    [postRecipesListPullDownAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data
      state.currentPage = _data.currentPageCode
      state.recipesListData = state.recipesListData.concat(_data.pageData)
      state.error = null
      console.log('postRecipesListPullDownAPI成功:', state, action)
    },
    [postRecipesListPullDownAPI.rejected.type]: (state,  action)=>{
      state.error = action.payload
      console.log('postRecipesListPullDownAPI失败:', state, action)
    },

    //获取食谱详情
    [postRecipesDetailAPI.pending.type]: (state,  action)=>{
      state.loading = true
      console.log('postRecipesDetailAPI等待:', state, action)
    },
    [postRecipesDetailAPI.fulfilled.type]: (state,  action)=>{
      const _data = action.payload.data
      state.recipesDetailData = _data
      state.loading = false
      state.error = null
      console.log('postRecipesDetailAPI成功:', state, action)
    },
    [postRecipesDetailAPI.rejected.type]: (state,  action)=>{
      state.loading = false
      state.error = action.payload
      console.log('postRecipesDetailAPI失败:', state, action)
    },
  }
})