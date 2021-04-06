import React, { useState, useEffect } from 'react'
import './recipeList.scss'
import {View} from '@tarojs/components'
import { SearchBar, RecipeListCard } from '../../components'
import {getCurrentInstance} from '@tarojs/taro'



//定义
interface RecipeListProps {}

//组件
const RecipeList: React.FC<RecipeListProps> = () => {
  const [isResult] = useState<boolean>(true)
  const router = getCurrentInstance().router as any //路由对象
  useEffect(()=>{
    const { type,value } = router.params
    console.log(type,value);
  },[])


  //搜索输入处理
  const handleSearch = ()=>{
    console.log('处理');
  }


  return(
    <View className="recipe-list-page">
      <SearchBar onAcceptChange={handleSearch}/>
      <View className="recipe-list-contentbox">
        {isResult ? <RecipeListCard />:
          <></>
        }
      </View>
    </View>
  )
}
export default RecipeList