import React, { useState } from 'react'
import './recipeList.scss'
import {View} from '@tarojs/components'
import { SearchBar, RecipeListCard } from '../../components'



//定义
interface RecipeListProps {}

//组件
const RecipeList: React.FC<RecipeListProps> = () => {
  const [isResult] = useState<boolean>(true)
  //搜索输入处理
  const handleSearch = ()=>{
    console.log('处理');
  }



  return(
    <View className="recipe-list-page">
      <SearchBar onAcceptChange={handleSearch}/>
      <View className="recipe-list-contentbox">
        {isResult ? 
          <RecipeListCard />:
          <></>
        }
      </View>
    </View>
  )
}
export default RecipeList