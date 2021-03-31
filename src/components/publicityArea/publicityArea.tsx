import React from 'react'
import './publicityArea.scss'
import {View, Text, Image} from '@tarojs/components'
import resizeApi1 from '../../assets/images/resizeApi.png'
import resizeApi2 from '../../assets/images/resizeApi-1.png'
import resizeApi3 from '../../assets/images/resizeApi-2.png'
import resizeApi4 from '../../assets/images/resizeApi-3.png'
import resizeApi5 from '../../assets/images/1255481.gif'



//定义
interface PublicityAreaProps {}

//组件
export const PublicityArea: React.FC<PublicityAreaProps> = () => {
  //栅格分布数据
  const atGridData = [
    {
      image: resizeApi1,
      value: '西餐'
    },
    {
      image: resizeApi2,
      value: '中餐'
    },
    {
      image: resizeApi3,
      value: '煲汤'
    },
    {
      image: resizeApi4,
      value: '烘焙'
    },
    {
      image: resizeApi5,
      value: '酒水'
    },
  ]


  return(
    <View className="publicity-area-component">
      {atGridData.map((item, i)=>{
        return (
          <View className="gongge-view" key={i}>
            <Image className="gongge-image" src={item.image}></Image>
            <Text className="gongge-text">{item.value}</Text>
          </View>
        )
      })}
    </View>
  )
}