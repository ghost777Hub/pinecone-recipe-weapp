import Mock from './mock'
let Random = Mock.Random
import { bannerListData, recommendData, keyWordData, randomRecipesData, allRecipesData} from '../database/index'



/**首页轮播图 - 返回的数据*/
export const getHomeBannerServer = ()=>{
  return {
    meta: {
      message: 'success'
    },
    status: true,
    data: bannerListData
  }
}
/**首页推荐卡 - 返回的数据*/
export const getHomeRecommendServer = ()=>{
  return {
    meta: {
      message: 'success'
    },
    status: true,
    data: recommendData
  }
}
/**随机页关键词 - 返回的数据*/
export const getRandomKeywordServer = ()=>{
  return {
    meta: {
      message: 'success'
    },
    status: true,
    data: keyWordData
  }
}
/**随机页生成食谱 - 返回的数据*/
export const getRandomRecipesServer = ()=>{
  let data = Mock.mock({
    "randomRecipes": randomRecipesData[Random.natural(0, randomRecipesData.length-1)]
  })
  
  return {
    meta: {
      message: 'success'
    },
    status: true,
    data: data.randomRecipes
  }
}


/**食谱详情 - 返回的数据*/
export const postRecipesDetailServer = (req)=>{
  const {rId} = req
  let searchValue  //搜索结果
  let _data = {}  //数据数据

  if(rId) {
    searchValue = allRecipesData.find((item)=>{  //id是唯一的
      if(item.id === rId) return item
    })

    if(searchValue){
      _data = searchValue
    }
    // console.log(searchValue)
  }

  return {
    meta: {
      message: 'success'
    },
    status: true,
    data: _data
  }
}
/**食谱列表 - 返回的数据*/
export const postRecipesListServer = (req)=>{
  const {type, value, currentPage} = req
  let searchValue  //搜索结果
  let _data:any[] = []  //数据数据
  let afterPageCOde  //搜索后的当前页码
  let str = ['',...value,''].join('.*') //转化成正则格式的字符串 -->你好
  let reg = new RegExp(str) //正则  --> /.*你.*好.*/

  //数据搜索
  if(type === 'search'){
    searchValue = allRecipesData.filter((item)=>{
      if(reg.test(item.title)) return item  //模糊匹配  这里没有考虑非法字符等问题
    })

    //数据组装
    if(searchValue.length > 0){
      searchValue.forEach(item=>{
        const _arrObj = {
          id: item.id,
          imageSrc: item.imageSrc,
          title: item.title,
          content: item.content,
          score: item.score,
          LikesNumber: item.LikesNumber,
          collectorsNumber: item.collectorsNumber,
        }
        _data.push(_arrObj)
      })
    }
  }

  //数据搜索
  if(type === 'class'){
    searchValue = allRecipesData.filter((item)=>{
      return item.subClassCode.find(subItem=>{ //第二层级应该用find
        if(subItem === value) return item
        //console.log('subItem', subItem, value)
      })
    })

    //数据组装(每次返回10条，不包括上次返回的最后一条，so+1。 例：上次9，这次--> 10~20)
    if(searchValue.length > 0){
      for (let index = currentPage+1; index < currentPage+11; index++) {
        if(!searchValue[index]) {
          afterPageCOde =  index -1
          break //超出数组下标，结束
        }

        const item = searchValue[index]
          const _arrObj = {
          id: item.id,
          imageSrc: item.imageSrc,
          title: item.title,
          content: item.content,
          score: item.score,
          LikesNumber: item.LikesNumber,
          collectorsNumber: item.collectorsNumber,
        }
        _data.push(_arrObj)
        afterPageCOde =  index
      }
    }
  }


  // console.log(searchValue, _data, req.body);
  //数据填充
  return {
    meta: {
      message: 'success'
    },
    status: true,
    data: {
      pageData: _data,
      currentPageCode: afterPageCOde || 0,
      type
    }
  }
}
