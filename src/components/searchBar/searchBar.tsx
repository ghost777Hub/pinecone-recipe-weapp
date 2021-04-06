import React, {useState} from 'react'
import './searchBar.scss'
import {View, Text, Input} from '@tarojs/components'
import IconFont from '../iconfont'
import Taro, { useDidShow } from '@tarojs/taro'



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
  const [searchValue, setSearchValue] = useState<string>('') //搜索框中的值
  useDidShow(()=>{
    handleDelete()
  })


  //输入处理
  const handleOnInput = (e)=>{
    const currentValue = e.detail.value
    setSearchValue(currentValue)
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
  //点击输入完成 提交
  const handleConfirm = ()=>{
    const submitValue = searchValue.replace(/\s+/g, "")
    if(!submitValue) return Taro.showToast({
      title: '搜索不能为空',
      icon: 'none'
    })
    props.onAcceptChange && props.onAcceptChange(submitValue)
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
            maxlength={30}
            value={searchValue}
            onInput={handleOnInput}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onConfirm={handleConfirm}
          />
        </View>
        <View className="delete-img-you" onClick={handleDelete}><IconFont name="delete" color={leftAndRightIconColor} size={22} /></View>
      </View>
      <Text className="search-bar-cancel" onClick={handleConfirm}>搜索</Text>
    </View>
  )
}