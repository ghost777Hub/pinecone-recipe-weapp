import React from 'react'
import './excellentRecommends.scss'
import {View, Text} from '@tarojs/components'
import { RecommendsCard } from './recommendsCard'
import cardImageSrc from '../../assets/images/u=2546459787,3978521414&fm=26&gp=0.jpg'
import cardImageSrc2 from '../../assets/images/0179665f63369011013f311090e0f4.jpg'



//定义
interface ExcellentRecommendsProps {}

//组件
export const ExcellentRecommends: React.FC<ExcellentRecommendsProps> = () => {
  const cardItemData = {
    imgSrc: cardImageSrc,
    title: '红烧大肉',
    xuanchuanContent: '吃了它，这个春天才算没白过',
    content: '主料: 鸡蛋,生菜,黄瓜,心里美萝卜,猕猴桃,大象，松鼠，白色梨子',
    productionTime: '<1小时',
    LikesNumber: '996',
    collectorsNumber: '78'
  }

  const cardItemData2 = {
    imgSrc: cardImageSrc2,
    title: '精品全家饭',
    xuanchuanContent: '吃了它，这个春天才算没白过',
    content: 'this is a goods suahiu ashuiahf4 32f4nk 32fvuik ',
    productionTime: '>2小时',
    LikesNumber: '2116',
    collectorsNumber: '1243'
  }

  return(
    <View className="excellent-recommends-component">
      <View className="recommends-card-wrapper">
        <Text className="excellent-recommends-title ertitle1">最新食谱</Text>
        <RecommendsCard cardItemData={cardItemData}/>
        <RecommendsCard cardItemData={cardItemData}/>
      </View>
      <View className="fenge-area"><View className="fenge-tupo"></View></View>

      <View className="recommends-card-wrapper">
        <Text className="excellent-recommends-title ertitle2">爆款食谱</Text>
        <RecommendsCard cardItemData={cardItemData2}/>
        <RecommendsCard cardItemData={cardItemData2}/>
      </View>
      <View className="fenge-area"><View className="fenge-tupo"></View></View>

      <View className="recommends-card-wrapper">
        <Text className="excellent-recommends-title ertitle3">今日适合</Text>
        <RecommendsCard cardItemData={cardItemData}/>
        <RecommendsCard cardItemData={cardItemData}/>
      </View>
    </View>
  )
}