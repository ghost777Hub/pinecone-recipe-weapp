import React from 'react'
import './recipeListCard.scss'
import {View, Text, Image} from '@tarojs/components'
import { AtRate } from 'taro-ui'
import Iconfont from '../iconfont'



//定义
interface RecipeListCardProps {
  dataPack:any;
  onGoToDetailPage(id:string): void;
}

//组件
export const RecipeListCard: React.FC<RecipeListCardProps> = (props) => {
  const {dataPack} = props
  const iconfontSize = 24
  const iconfontColor = '#C0C2C8'
  //准备跳转详情
  const handleClick = (e)=>{
    const {reId} = e.currentTarget.dataset
    props.onGoToDetailPage && props.onGoToDetailPage(reId)
  }

  return(
    <View className="recipe-list-card-component">
      {dataPack ? dataPack.map((item, i)=>{
        return (
          <View data-re-id={item.id} className="recipelist-card-item" key={i} onClick={handleClick}>
            {/* 左边 */}
            <View className="carditem-viewbox-left"><Image className="carditem-viewimg" src={item.imageSrc} mode="aspectFill"></Image></View>
            {/* 右边 */}
            <View className="carditem-viewbox-right">
              {/* 文本 */}
              <Text className="right-text">{item.title}</Text>
              <Text className="right-text2">
                {item.content.map(item=>{
                  return item.title
                }).join('、')}
              </Text>
              {/* 评分 */}
              <AtRate value={item.score} max={5} size={16}/>
              {/* 图标 */}
              <View className="icon-des-content">
                <Iconfont name="chakandianzan" color={iconfontColor} size={iconfontSize}/><View className="xiao-span">{item.LikesNumber}</View>
                <Iconfont name="shoucang" color={iconfontColor} size={iconfontSize}/><View className="xiao-span">{item.collectorsNumber}</View>
              </View>
            </View> 
          </View>
      )}):null}
    </View>
  )
}