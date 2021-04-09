import React, { useEffect, useState } from 'react'
import './randomFood.scss'
import {View} from '@tarojs/components'
import { LotteryArea, RandomSearchBar, HotTagsArea, FoodCard } from '../../components'
import { useDispatch } from 'react-redux'
import { getRandomWordAPI, getRandomRecipesAPI } from '../../redux/recipes/slice'
import { useSelector } from '../../redux/hooks'
import Taro from '@tarojs/taro'



//定义
interface RandomFoodProps {}

//组件
const RandomFood: React.FC<RandomFoodProps> = () => {
  const [isFoodCardShow, setIsFoodCardShow] = useState<boolean>(false) //是否显示卡片
  const [debounce, setDebounce] = useState<boolean>(false) //防抖处理变量
  const keyWordData = useSelector(s=>s.recipe.keyWordData)
  const randomRecipesData = useSelector(s=>s.recipe.randomRecipesData)
  const dispach = useDispatch()
  useEffect(()=>{
    dispach(getRandomWordAPI())
  },[])


  //点菜
  const showLookRecipe = async()=>{
    await dispach(getRandomRecipesAPI())
    setIsFoodCardShow(true)
  }
  //隐藏食谱
  const hideLookRecipe = ()=>{
    setIsFoodCardShow(false)
  }
  //跳转详情
  const wordToDetailFn = (e)=>{
    Taro.navigateTo({
      url: `/packageA/recipeDetail/recipeDetail?id=${e}`
    })
  }
  //搜索跳转列表
  const acceptChangeFn = (e)=>{
    Taro.navigateTo({
      url: `/packageA/recipeList/recipeList?type=search&value=${e}`
    })
  }
  //再来一单
  const againFoodokFn = async()=>{
    if(debounce) return
    setDebounce(true)
    await dispach(getRandomRecipesAPI())
    setTimeout(() => {
      setDebounce(false)  
    }, 800)
  }

  return(
    <View className="random-food-page">
      {/* 生成的卡片 */}
      {isFoodCardShow ? 
        <FoodCard dataPack={randomRecipesData} onGoToDetail={wordToDetailFn} onLookRecipeok={hideLookRecipe} onAgainFoodok={againFoodokFn} /> : 
        <View className="random-food-components-wrapper">
          {/* 随机点菜区 */}
          <LotteryArea onLookRecipe={showLookRecipe}/>
          {/* 搜索栏 */}
          <RandomSearchBar onAcceptChange={acceptChangeFn}/>
          {/* 热门搜索标签 */}
          <HotTagsArea  dataPack={keyWordData} onWordToDetail={wordToDetailFn}/>
        </View>
      }
    </View>
  )
}
export default RandomFood