import React from 'react'
import './foodCard.scss'
import {View, Text, Image} from '@tarojs/components'
import {CardBottomDesc} from '../index'



//定义
interface FoodCardProps {
  dataPack: any;
  onLookRecipeok:()=> void
  onAgainFoodok:()=> void
  onGoToDetail:(id:string)=> void
}

//组件
export const FoodCard: React.FC<FoodCardProps> = (props) => {
  const {dataPack} = props
  //返回搜索
  const backSearchFood = ()=>{
    props.onLookRecipeok && props.onLookRecipeok()
  }
  //再选一个
  const againFood = ()=>{
    props.onAgainFoodok && props.onAgainFoodok()
  }
  //去详情页面
  const wantToDetail = (e)=>{
    const {id} =  e.currentTarget.dataset
    props.onGoToDetail && props.onGoToDetail(id)
  }


  return(
    <View className="food-card-component">
      {dataPack ? <>
        {/* 菜品图 */}
        <View className="food-card-imgbox">
          <Image className="food-card-imgg" src={require(`../../assets/images${dataPack.imgSrc}`)} mode="aspectFill"></Image>
        </View>
        {/* 标题文案与按钮 */}
        <View className="food-card-mainbox">
          <Text className="food-card-main-text text1">{dataPack.title}</Text>
          <Text className="food-card-main-text text2">{dataPack.xuanchuanContent}</Text>
          <Text className="food-card-main-text text3">{dataPack.content}</Text>
          <View className="mainbox-threebtnbox">
            <View data-id={dataPack.id} className="food-card-main-btn" onClick={wantToDetail}><Text>查看</Text><Text>详情</Text></View>
            <View className="food-card-main-btn" onClick={backSearchFood}><Text>返回</Text><Text>搜索</Text></View>
            <View className="food-card-main-btn" onClick={againFood}><Text>再选</Text><Text>一个</Text></View>
          </View>
        </View>
        {/* 底部其他描述 */}
        <View className="food-card-bottom-wrapper">
          <CardBottomDesc otherData={dataPack}/>
        </View>
      </>:null}
    </View>
  )
}