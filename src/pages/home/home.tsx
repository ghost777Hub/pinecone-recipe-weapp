import React, {useEffect} from 'react'
import './home.scss'
import {View} from '@tarojs/components'
import { SearchBar, CarouselMap, PublicityArea, ExcellentRecommends } from '../../components'
import Taro from '@tarojs/taro'
import { useDispatch } from 'react-redux'
import { getHomeBannerAPI,getHomeRecommendAPI } from '../../redux/recipes/slice'
import { useSelector } from '../../redux/hooks'



//定义
interface HomeProps {}

//组件
const Home: React.FC<HomeProps> = ()=>{
  const bannerListData = useSelector(s=> s.recipe.bannerListData)
  const recommendData = useSelector(s=>s.recipe.recommendData)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getHomeBannerAPI())
    dispatch(getHomeRecommendAPI())
  },[])

  //跳转详情
  const bannerClickFn = (e)=>{
    // console.log(e);
    Taro.navigateTo({
      url: `/pages/recipeDetail/recipeDetail?id=${e}`
    })
  }
  //菜名搜索完成 - 去食谱列表页
  const showSearchRes = (e)=>{
    Taro.navigateTo({
      url: `/pages/recipeList/recipeList?type=search&value=${e}`
    })
  }
  //点击分类区域 - 去食谱列表页
  const publicityClickFn = (e)=>{
    Taro.navigateTo({
      url: `/pages/recipeList/recipeList?type=class&value=${e}`
    })
  }

  return (
    <View className="home-page">
      {/* 轮播图 */}
      <CarouselMap list={bannerListData} onBannerClick={bannerClickFn} />
      {/* 搜索栏 */}
      <SearchBar onAcceptChange={showSearchRes}/>
      {/* 主题四项 */}
      <PublicityArea onPublicityClick={publicityClickFn} />
      {/* 菜品推荐区域 */}
      <ExcellentRecommends dataPacket={recommendData} onBannerClick={bannerClickFn}/>
    </View>
  )
}
export default Home