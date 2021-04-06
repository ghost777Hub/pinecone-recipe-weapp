import React from 'react'
import './excellentRecommends.scss'
import {View, Text} from '@tarojs/components'
import { RecommendsCard } from './recommendsCard'



//定义
interface ExcellentRecommendsProps {
  /**推荐卡数据 */
  dataPacket: any
  onBannerClick(id:string):void
}

//组件
export const ExcellentRecommends: React.FC<ExcellentRecommendsProps> = (props) => {
  const {dataPacket} = props
  const handleClick = (e)=>{
    const {id} = e.currentTarget.dataset
    props.onBannerClick && props.onBannerClick(id)
  }

  return(
    <View className="excellent-recommends-component">
        <View className="recommends-card-wrapper">
          <Text className="excellent-recommends-title ertitle1">最新食谱</Text>
          {dataPacket.newest ? dataPacket.newest.map((item, i)=>{
            return (<View data-id={item.id} onClick={handleClick}><RecommendsCard cardItemData={item} key={i} /></View>)
          }): null}
        </View>
        <View className="fenge-area"><View className="fenge-tupo"></View></View>

        <View className="recommends-card-wrapper">
          <Text className="excellent-recommends-title ertitle2">爆款食谱</Text>
          {dataPacket.hotMoney ? dataPacket.hotMoney.map((item, i)=>{
            return (<View data-id={item.id} onClick={handleClick}><RecommendsCard cardItemData={item} key={i} /></View>)
          }): null}
        </View>
        <View className="fenge-area"><View className="fenge-tupo"></View></View>

        <View className="recommends-card-wrapper">
          <Text className="excellent-recommends-title ertitle3">今日适合</Text>
          {dataPacket.todayFood ? dataPacket.todayFood.map((item, i)=>{
            return (<View data-id={item.id} onClick={handleClick}><RecommendsCard cardItemData={item} key={i} /></View>)
          }): null}
        </View>
    </View>
  )
}