import React, {useState} from 'react'
import './verticalMenuBar.scss'
import {View, Text, Image} from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { tabListLeft, tabListRight } from './options'



//定义
interface VerticalMenuBarProps {
  /**去食谱列表页 */
  onToListPageFn:(code: string)=>void
}

//组件
export const VerticalMenuBar: React.FC<VerticalMenuBarProps> = (props) => {
  const { onToListPageFn } = props
  const [current, setCurrent] = useState<number>(1)  //tab选中下标

  //切换右侧tab
  const handleClick = (index)=>{
    setCurrent(index)
  }
  //处理去食谱列表页
  const gotoListPage = (e)=>{
    const {subclasscode} = e.currentTarget.dataset
    onToListPageFn && onToListPageFn(subclasscode)
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
                    <View data-subclasscode={subItem.subClassCode} className="attabspane-boxarea" key={subI} onClick={gotoListPage}>
                      <View className="attabspane-imagebox"><Image className="attabspane-image" src={subItem.imageSrc} mode="aspectFill"></Image></View>
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