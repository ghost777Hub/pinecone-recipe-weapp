import React, {useState} from 'react'
import './randomSearchBar.scss'
import {View, Input} from '@tarojs/components'
import Iconfont from '../iconfont'
import Taro,{ useDidShow } from '@tarojs/taro'



//定义
interface RandomSearchBarProps {
  onAcceptChange: (currentValue: string) => void;
}

//组件
export const RandomSearchBar: React.FC<RandomSearchBarProps> = (props) => {
  const [boxIsClass, setBoxIsClass] = useState<boolean>(false) //边框阴影
  const [searchValue, setSearchValue] = useState<string>('') //搜索框中的值
  useDidShow(()=>{
    handleDelete()
  })

  //聚焦处理
  const boxFocus = ()=>{
    setBoxIsClass(true)
  }
  //失焦处理
  const boxBlur = ()=>{
    setBoxIsClass(false)
  }
  //输入处理
  const handleOnInput = (e)=>{
    const currentValue = e.detail.value
    setSearchValue(currentValue)
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
    <View className="random-search-bar-component">
      <View className={ boxIsClass ? 'randomsearchbar-box effect': 'randomsearchbar-box'}> 
        <Input 
          className="randomsearchbar-input" 
          placeholderClass="randomsearchbar-inputph"
          placeholder="输入你想吃的~"
          type="text"
          maxlength={30}
          value={searchValue}
          onInput={handleOnInput}
          onFocus={boxFocus}
          onBlur={boxBlur}
          onConfirm={handleConfirm}
        />
        <View className="randomsearchbar-icon-wrapper" onClick={handleConfirm}><Iconfont name="iconsearch" color="#ffffff" size={30} /></View>
      </View>
    </View>
  )
}