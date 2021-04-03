import React, { useState } from 'react'
import './randomFood.scss'
import {View} from '@tarojs/components'
import { LotteryArea, RandomSearchBar, HotTagsArea, FoodCard } from '../../components'



//定义
interface RandomFoodProps {}

//组件
const RandomFood: React.FC<RandomFoodProps> = () => {
  const [isFoodCardShow, setIsFoodCardShow] = useState<boolean>(false) //是否显示卡片
  //显示食谱 
  const showLookRecipe = ()=>{
    setIsFoodCardShow(true)
  }
  //隐藏食谱
  const hideLookRecipe = ()=>{
    setIsFoodCardShow(false)
  }



  return(
    <View className="random-food-page">
      {/* 生成的卡片 */}
      {isFoodCardShow ? 
        <FoodCard onLookRecipeok={hideLookRecipe}/> : 
        <View className="random-food-components-wrapper">
          {/* 随机点菜区 */}
          <LotteryArea onLookRecipe={showLookRecipe}/>
          {/* 搜索栏 */}
          <RandomSearchBar />
          {/* 热门搜索标签 */}
          <HotTagsArea />
        </View>
      }
    </View>
  )
}
export default RandomFood