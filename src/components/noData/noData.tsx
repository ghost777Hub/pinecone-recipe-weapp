import React from 'react'
import './noData.scss'
import {View, Text, Image} from '@tarojs/components'
import  noDataimageSrc from '../../assets/images/mySettings/e61190ef76c6a7ef63c540f8fffaaf51f2de6609.jpg'



//定义
interface NoDataProps {}

//组件
export const NoData: React.FC<NoDataProps> = () => {
  return(
    <View className="no-data-component">
      <View className="no-data-wrapper"><Image className="no-data-img" mode="aspectFill" src={noDataimageSrc}></Image></View>
      <Text className="no-data-text">暂无数据，换个关键词搜索看看吧~</Text>
    </View>
  )
}