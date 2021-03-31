import React from 'react'
import './classificationMenu.scss'
import {View} from '@tarojs/components'
import { SearchBar, VerticalMenuBar } from '../../components'



//定义
interface ClassificationMenuProps {}

//组件
const ClassificationMenu: React.FC<ClassificationMenuProps> = () => {
  //搜索输入处理
  const showSearchRes = ()=>{
    console.log('展示组件');
  }


  return(
    <View className="classification-menu-page">
      {/* 搜索栏 */}
      <SearchBar onAcceptChange={showSearchRes}/>
      {/* 垂直标签栏 */}
      <View className="verticalmenubar-wrapper"><VerticalMenuBar /></View>
    </View>
  )
}
export default ClassificationMenu