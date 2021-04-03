import React from 'react'
import './foodCard.scss'
import {View, Text, Image} from '@tarojs/components'
import {CardBottomDesc} from '../index'
import cardImgSrc from '../../assets/images/01f2715f63369211013f31107ad80a.jpg'



//定义
interface FoodCardProps {
  onLookRecipeok:()=> void
}

//组件
export const FoodCard: React.FC<FoodCardProps> = (props) => {
  //返回搜索
  const backSearchFood = ()=>{
    props.onLookRecipeok && props.onLookRecipeok()
  }


  return(
    <View className="food-card-component">
      {/* 菜品图 */}
      <View className="food-card-imgbox">
        <Image className="food-card-imgg" src={cardImgSrc} mode="aspectFill"></Image>
      </View>
      {/* 标题文案与按钮 */}
      <View className="food-card-mainbox">
        <Text className="food-card-main-text text1">酸笋牛肉</Text>
        <Text className="food-card-main-text text2">算上又开胃！最适合夏天吃的一道肉</Text>
        <Text className="food-card-main-text text3">主食材：xx、xx、xx、xx、xx、xx、xx、xx、xx、xx、xx、</Text>
        <View className="mainbox-threebtnbox">
          <View className="food-card-main-btn"><Text>查看</Text><Text>详情</Text></View>
          <View className="food-card-main-btn" onClick={backSearchFood}><Text>返回</Text><Text>搜索</Text></View>
          <View className="food-card-main-btn"><Text>再选</Text><Text>一个</Text></View>
        </View>
      </View>
      {/* 底部其他描述 */}
      <View className="food-card-bottom-wrapper">
        <CardBottomDesc />
      </View>
    </View>
  )
}