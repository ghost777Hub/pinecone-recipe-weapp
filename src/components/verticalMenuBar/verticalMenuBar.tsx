import React, {useState} from 'react'
import './verticalMenuBar.scss'
import {View, Text, Image} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { tabListLeft, tabListRight } from './options'



//定义
interface VerticalMenuBarProps {}

//组件
export const VerticalMenuBar: React.FC<VerticalMenuBarProps> = () => {
  const [current, setCurrent] = useState<number>(0)  //选中下标

  //点击处理
  const handleClick = (index)=>{
    setCurrent(index)
  }

  return(
    <View className="vertical-menu-bar-component">
      <AtTabs
        current={current}
        scroll
        height='100%'
        tabDirection='vertical'
        tabList={tabListLeft}
        onClick={handleClick}>
        {tabListRight.map((item, i)=>{
          return (
            <AtTabsPane tabDirection='vertical' current={current} index={i} key={i}>
              <View className="attabspane-view">
                {item.subcategory.map((subItem, subI)=>{
                  return(
                    <View className="attabspane-boxarea" key={subI}>
                      <View className="attabspane-imagebox"><Image className="attabspane-image" src={subItem.imgSrc} mode="aspectFill"></Image></View>
                      <Text className="attabspane-caitext">{subItem.title}</Text>
                    </View>
                )})}
              </View>
            </AtTabsPane>
        )})}
      </AtTabs>
    </View>
  )
}