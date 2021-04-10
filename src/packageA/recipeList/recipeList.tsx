import React, { useEffect } from 'react'
import './recipeList.scss'
import {View} from '@tarojs/components'
import { SearchBar, RecipeListCard, NoData } from '../../components'
import Taro, {getCurrentInstance, useReachBottom} from '@tarojs/taro'
import { useDispatch } from 'react-redux'
import { postRecipesListAPI, postRecipesListPullDownAPI } from '../../redux/recipes/slice'
import { useSelector } from '../../redux/hooks'
import { debounce } from '../../utils/common'
import { AtActivityIndicator } from 'taro-ui'



//定义
interface RecipeListProps {}

//组件
const RecipeList: React.FC<RecipeListProps> = () => {
  const router = getCurrentInstance().router as any //路由对象
  const { type,value } = router.params
  const recipesListData = useSelector(s=>s.recipe.recipesListData)
  const currentPage = useSelector(s=>s.recipe.currentPage)
  const error = useSelector(s=>s.recipe.error)
  const loading = useSelector(s=>s.recipe.loading)
  const dispatch = useDispatch()
  useEffect(()=>{
    searchAndClass(type, value, 0)
  },[])
  //下拉触底
  useReachBottom(()=>{
    debounce(dispatch(postRecipesListPullDownAPI({
      type: 'class',
      value: value,
      currentPage
    })))
    // console.log('距离底部了');
  })


  //搜索输入处理
  const handleSearch = (e)=>{
    debounce(searchAndClass('search', e, 0))
  }
  //分类或搜索数据请求
  const searchAndClass = async (type:"search" | "class", value:string, _currentPage?:number)=>{
    await dispatch(postRecipesListAPI({type, value, currentPage: _currentPage}))
  }
  //去详情页面
  const goToDetailPageFn =(e)=>{
    Taro.navigateTo({
      url: `/packageA/recipeDetail/recipeDetail?id=${e}`
    })
  }


  if(loading){
    return <AtActivityIndicator mode='center' content='Loading...' size={50} ></AtActivityIndicator>
  }

  if (error) {
    return <div>网站出错: {error}</div>
  }

  return(
    <View className="recipe-list-page">
      <SearchBar onAcceptChange={handleSearch}/>
      <View className="recipe-list-contentbox">
        {recipesListData.length > 0 ? <RecipeListCard dataPack={recipesListData} onGoToDetailPage={goToDetailPageFn} /> : <View className="nodata-component-wrapper"><NoData /></View>}
      </View>
    </View>
  )
}
export default RecipeList