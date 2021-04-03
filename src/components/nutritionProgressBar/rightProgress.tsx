import React, {useEffect, useState} from 'react'
import { View,Text } from '@tarojs/components'
import './rightProgress.scss'
import { itemDataType } from './interface'
import { MyRing } from '../index'



//定义
interface RightProgressProps { 
  itemData: Array<itemDataType>
}

//组件
export const RightProgress: React.FC<RightProgressProps> = (props) => {
  const {itemData} = props
  //卡路里对象
  const [kaluli] = useState<any>(()=>{
    return itemData && itemData.find(item => {  //使用filter会返回是数组
      if(item.title === '卡路里') return item
    })
  })
  //蛋白质对象
  const [danbaizhi] = useState<any>(()=>{
    return itemData && itemData.find(item => {  //find返回的是对象，因为找到后立刻停止了
      if(item.title === '蛋白质') return item
    })
  })

  useEffect(()=>{
    console.log(kaluli,danbaizhi)
  },[kaluli,danbaizhi])


  return (
    <View className='right-progress-component at-row'>
      <View className="at-row at-row__align--center">
        <MyRing edgeColor={'#F2576E'} edgeDecColor={'#FABDC6'} size={60} percentage={kaluli.percentage} contentText={kaluli.title} />
        <Text className="huan-text text1">{kaluli.percentage}%</Text>
      </View>
      <View className="danbaizhi-wrapper at-row at-row__align--center">
        <MyRing edgeColor={'#5397DF'} edgeDecColor={'#C7DFF7'} size={60} percentage={danbaizhi.percentage} contentText={danbaizhi.title}/>
        <Text className="huan-text text2">{danbaizhi.percentage}%</Text>
      </View>
    </View>
  )
}