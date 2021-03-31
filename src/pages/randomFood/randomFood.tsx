import React from 'react'
import './randomFood.scss'
import {View, Text} from '@tarojs/components'



//定义
interface RandomFoodProps {}

//组件
const RandomFood: React.FC<RandomFoodProps> = () => {
  return(
    <View className="random-food-page">
      <Text>randomFood页标题</Text>
    </View>
  )
}
export default RandomFood