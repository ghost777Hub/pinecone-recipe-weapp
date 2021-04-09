import React from 'react'
import { View, Text } from '@tarojs/components'
import './leftProgress.scss'
import { AtProgress } from 'taro-ui'
import { itemDataType } from './interface'



//定义
interface LeftProgressProps { 
  itemData: itemDataType
}

//组件
export const LeftProgress: React.FC<LeftProgressProps> = (props) => {
  const {title,percentage} = props.itemData


  return (
    <View className='left-progress-component at-row'>
      <Text className="leftprogress-text at-col at-col-4 at-col--auto">{title}</Text>
      <AtProgress className='at-col' strokeWidth={6} percent={percentage} color='#4DD197' isHidePercent/>
    </View>
  )
}