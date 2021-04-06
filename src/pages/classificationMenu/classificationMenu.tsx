import React from 'react'
import './classificationMenu.scss'
import {View} from '@tarojs/components'
import { SearchBar, VerticalMenuBar } from '../../components'
import Taro from '@tarojs/taro'



//定义
interface ClassificationMenuProps {}

//组件
const ClassificationMenu: React.FC<ClassificationMenuProps> = () => {
  //菜名搜索完成 - 去食谱列表页
  const showSearchRes = (e)=>{
    Taro.navigateTo({
      url: `/pages/recipeList/recipeList?type=search&value=${e}`
    })
  }
  //分类点击 -去食谱列表页
  const toListPage = (e)=>{
    Taro.navigateTo({
      url: `/pages/recipeList/recipeList?type=class&value=${e}`
    })
  }

  return(
    <View className="classification-menu-page">
      {/* 搜索栏 */}
      <SearchBar onAcceptChange={showSearchRes}/>
      {/* 垂直标签栏 */}
      <View className="verticalmenubar-wrapper"><VerticalMenuBar onToListPageFn={toListPage}/></View>
    </View>
  )
}
export default ClassificationMenu