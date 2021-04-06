import React, { useEffect } from 'react'
import './recommendsCard.scss'
import {View, Text, Image} from '@tarojs/components'
import {CardBottomDesc} from '../index'



//定义
interface RecommendsCardProps {
  //卡片数据
  cardItemData: any
}

//组件
export const RecommendsCard: React.FC<RecommendsCardProps> = (props) => {
  const {cardItemData} = props
  useEffect(()=>{
    //注意不能写images/不能加/，不知怎么会有路径解析错误
    // console.log(require(`../../assets/images${cardItemData.imgSrc}`))
    // console.log(require(`../../assets/images/home/015c5d5d831815a8012060be859c4b.png`))
  },[])


  return(
    <View className="recommends-card-component">
      {cardItemData ? <>
        <View className="recommends-card-area1">
        <Image className="recard-area1-img" mode="aspectFill" src={ require(`../../assets/images${cardItemData.imgSrc}`) }></Image>
        <View className="recard-area1-textwrapper">
          <Text className="recard-area1-text">{cardItemData.title}</Text>
        </View>
      </View>
      <View className="recommends-card-area2">
        <Text className="recard-area2-text">{cardItemData.xuanchuanContent}</Text>
        <Text className="recard-area2-text area2-textcontent">{cardItemData.content}</Text>
      </View>
      <CardBottomDesc otherData={cardItemData}/>
      </>:null}
    </View>
  )
}