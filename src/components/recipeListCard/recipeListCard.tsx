import React from 'react'
import './recipeListCard.scss'
import {View, Text, Image} from '@tarojs/components'
import sucaiImgSrc from '../../assets/images/home/017b2c5d831881a8012060be0d83e7.png'
import { AtRate } from 'taro-ui'
import Iconfont from '../iconfont'



//定义
interface RecipeListCardProps {}

//组件
export const RecipeListCard: React.FC<RecipeListCardProps> = () => {
  const iconfontSize = 24
  const iconfontColor = '#C0C2C8'
  const sample = [1, 2,3,1, 2,3,1, 2,3,1, 2,3,1, 2,3]

  return(
    <View className="recipe-list-card-component">
      {sample.map((item, i)=>{
        return (
          <View className="recipelist-card-item" key={i}>
            {/* 左边 */}
            <View className="carditem-viewbox-left"><Image className="carditem-viewimg" src={sucaiImgSrc} mode="aspectFill"></Image></View>
            {/* 右边 */}
            <View className="carditem-viewbox-right">
              {/* 文本 */}
              <Text className="right-text">南瓜粥</Text>
              <Text className="right-text2">主料：超级无敌超级无敌超级无敌超级无敌超级无敌超级无敌超级无敌</Text>
              {/* 评分 */}
              <AtRate value={3.5} max={5} size={16}/>
              {/* 图标 */}
              <View className="icon-des-content">
                <Iconfont name="chakandianzan" color={iconfontColor} size={iconfontSize}/><View className="xiao-span">989</View>
                <Iconfont name="shoucang" color={iconfontColor} size={iconfontSize}/><View className="xiao-span">36</View>
              </View>
            </View> 
          </View>
      )})}
    </View>
  )
}