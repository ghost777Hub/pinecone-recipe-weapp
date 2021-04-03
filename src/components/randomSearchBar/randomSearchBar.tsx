import React, {useState} from 'react'
import './randomSearchBar.scss'
import {View, Input} from '@tarojs/components'
import Iconfont from '../iconfont'



//定义
interface RandomSearchBarProps {}

//组件
export const RandomSearchBar: React.FC<RandomSearchBarProps> = () => {
  const [boxIsClass, setBoxIsClass] = useState<boolean>(false)
  //聚焦处理
  const boxFocus = ()=>{
    setBoxIsClass(true)
  }
  //失焦处理
  const boxBlur = ()=>{
    setBoxIsClass(false)
  }



  return(
    <View className="random-search-bar-component">
      <View className={ boxIsClass ? 'randomsearchbar-box effect': 'randomsearchbar-box'}> 
        <Input 
          className="randomsearchbar-input" 
          placeholderClass="randomsearchbar-inputph"
          placeholder="输入你想吃的~"
          maxlength={20}
          onFocus={boxFocus}
          onBlur={boxBlur}
        />
        <View className="randomsearchbar-icon-wrapper"><Iconfont name="iconsearch" color="#ffffff" size={30} /></View>
      </View>
    </View>
  )
}