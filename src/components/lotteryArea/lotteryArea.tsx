import React from 'react'
import './lotteryArea.scss'
import {View, Text} from '@tarojs/components'



//定义
interface LotteryAreaProps {
  onLookRecipe: ()=>void
}

//组件
export const LotteryArea: React.FC<LotteryAreaProps> = (props) => {
  //随机生成一份食谱  
  const handleClick = ()=>{
    props && props.onLookRecipe()
  }


  return(
    <View className="lottery-area-component">
      <View className="center-circle" onClick={handleClick}>
        <Text className="center-circle-text1">准备吃啥?</Text>
        <Text className="center-circle-text2">点我选菜</Text>
      </View>
    </View>
  )
}