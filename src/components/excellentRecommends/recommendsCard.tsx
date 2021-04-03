import React from 'react'
import './recommendsCard.scss'
import {View, Text, Image} from '@tarojs/components'
import {CardBottomDesc} from '../index'



//定义
interface RecommendsCardProps {
  cardItemData: { //卡片数据
    imgSrc: string;
    title: string;
    xuanchuanContent: string;
    content: string;
    productionTime: string;
    LikesNumber: string;
    collectorsNumber: string;
  } 
}

//组件
export const RecommendsCard: React.FC<RecommendsCardProps> = (props) => {
  const {cardItemData} = props


  return(
    <View className="recommends-card-component">
      <View className="recommends-card-area1">
        <Image className="recard-area1-img" mode="aspectFill" src={cardItemData.imgSrc}></Image>
        <View className="recard-area1-textwrapper">
          <Text className="recard-area1-text">{cardItemData.title}</Text>
        </View>
      </View>
      <View className="recommends-card-area2">
        <Text className="recard-area2-text">{cardItemData.xuanchuanContent}</Text>
        <Text className="recard-area2-text area2-textcontent">{cardItemData.content}</Text>
      </View>
      <CardBottomDesc />
    </View>
  )
}