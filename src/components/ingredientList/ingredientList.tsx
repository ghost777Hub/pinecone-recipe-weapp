import React from 'react'
import './ingredientList.scss'
import {View, Text} from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"



//定义
interface IngredientListProps {
  ingredientsData:Array<{
    title: string;
    describe: string;
  }>
}

//组件
export const IngredientList: React.FC<IngredientListProps> = (props) => {
  const {ingredientsData} = props

  return(
    <View className="ingredient-list-component">
      <Text className="ingredient-list-h3">食材准备</Text>
      {ingredientsData ? 
        ingredientsData.map((item, i)=>{
          return(
            <AtList key={i}>
              <AtListItem title={item.title} extraText={item.describe} />
            </AtList>
        )})
      :null}
    </View>
  )
}