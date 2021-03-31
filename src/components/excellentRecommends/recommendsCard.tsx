import React from 'react'
import './recommendsCard.scss'
import {View, Text, Image} from '@tarojs/components'
import IconFont from '../iconfont'



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
  const iconSize:number = 35 //icon大小
  const iconColor:string = '#B3B3B3' //icon颜色


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
      <View className="recommends-card-area3">
        <View className="recard-area3-textwrapper  wrapper11">
          <IconFont name="shijian" color={iconColor} size={iconSize} />
          <Text className="recard-area3-text">{cardItemData.productionTime}</Text>
        </View>
        <View className="recard-area3-textwrapper wrapper22">
          <IconFont name="chakandianzan" color={iconColor} size={iconSize} />
          <Text className="recard-area3-text">{cardItemData.LikesNumber}人</Text>
        </View>
        <View className="recard-area3-textwrapper wrapper33">
          <IconFont name="shoucang" color={iconColor} size={iconSize} />
          <Text className="recard-area3-text">{cardItemData.collectorsNumber}人</Text>
        </View>
      </View>
    </View>
  )
}