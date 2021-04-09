import { ALLURLPATH } from '../api/url'
import { getHomeBannerServer, getHomeRecommendServer, getRandomKeywordServer, getRandomRecipesServer, 
postRecipesDetailServer, postRecipesListServer} from './itemServer'



/**处理GET请求 */
export const handleGetRequestAndReturnData = (url:string)=>{
  if(url === ALLURLPATH.HOMEBANNER){
    return getHomeBannerServer()
    //console.log('处理首页轮播图：', url);
  }

  if(url === ALLURLPATH.HOMERECOMMEND){
    return getHomeRecommendServer()
    // console.log('处理首页推荐卡：', url);
  }

  if(url === ALLURLPATH.RANDOMRECIPES){
    return getRandomRecipesServer()
    // console.log('处理随机页生成食谱：', url);
  }

  if(url === ALLURLPATH.RANDOMWORD){
    return getRandomKeywordServer()
    // console.log('处理随机页关键词：', url);
  }
}

/**处理POST请求 */
export const handlePostRequestAndReturnData = (url:string, data)=>{
  if(url === ALLURLPATH.RECIPESDETAIL){
    return postRecipesDetailServer(data)
    // console.log('处理食谱详情：', url, data);
  }

  if(url === ALLURLPATH.RECIPESLIST){
    return postRecipesListServer(data)
    // console.log('处理食谱列表：', url);
  }
}