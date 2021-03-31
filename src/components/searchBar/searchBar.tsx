import React, {useState} from 'react'
import './searchBar.scss'
import {View, Text, Input} from '@tarojs/components'
import IconFont from '../iconfont'



//定义
interface SearchBarProps {
  onAcceptChange: (currentValue: string) => void;
}

//组件
export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const default_border_bg = '#E8E8E8' //浅色
  const deepen_border_bg = '#B3B3B3'  //深色
  const leftAndRightIconColor = '#ACACAC' //左右icon颜色
  const [searchBarBoxBrderColor, setSearchBarBoxBrderColor] = useState<string>('') //边框颜色
  const [searchValue, setSearchValue] = useState<string>('')


  //输入处理
  const handleOnInput = (e)=>{
    const currentValue = e.detail.value
    setSearchValue(currentValue)
    props.onAcceptChange && props.onAcceptChange(currentValue)
    // console.log(currentValue)
  }
  //聚焦处理
  const handleOnFocus = ()=>{
    setSearchBarBoxBrderColor(deepen_border_bg) 
  }
  //失焦处理
  const handleOnBlur = ()=>{
    setSearchBarBoxBrderColor(default_border_bg) 
  }
  //清除输入文本
  const handleDelete = ()=>{
    setSearchValue('')
  }


  return(
    <View className="search-bar-component">
      <View className="search-bar-box" style={{ borderColor: searchBarBoxBrderColor}}>
        <View className="search-img-zuo"><IconFont name="iconsearch" color={leftAndRightIconColor} size={22} /></View>
        <View className="search-bar-input-wrapper">
          <Input
            className="search-bar-input"
            placeholderClass="search-bar-inputph"
            type='text'
            placeholder='搜索菜名'
            maxlength={20}
            value={searchValue}
            onInput={handleOnInput}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </View>
        <View className="delete-img-you" onClick={handleDelete}><IconFont name="delete" color={leftAndRightIconColor} size={22} /></View>
      </View>
      <Text className="search-bar-cancel">取消</Text>
    </View>
  )
}