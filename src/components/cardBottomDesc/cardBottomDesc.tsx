import React from 'react'
import './cardBottomDesc.scss'
import { View, Text } from '@tarojs/components'
import IconFont from '../iconfont'



//定义
interface CardBottomDescProps { }

//组件
export const CardBottomDesc: React.FC<CardBottomDescProps> = () => {
  const iconSize: number = 35 //icon大小
  const iconColor: string = '#B3B3B3' //icon颜色


  return (
    <View className="card-bottom-desc-component recommends-card-area3">
      <View className="recard-area3-textwrapper  wrapper11">
        <IconFont name="shijian" color={iconColor} size={iconSize} />
        <Text className="recard-area3-text">{'30min'}</Text>
      </View>
      <View className="recard-area3-textwrapper wrapper22">
        <IconFont name="chakandianzan" color={iconColor} size={iconSize} />
        <Text className="recard-area3-text">{'2231'}人</Text>
      </View>
      <View className="recard-area3-textwrapper wrapper33">
        <IconFont name="shoucang" color={iconColor} size={iconSize} />
        <Text className="recard-area3-text">{'55'}人</Text>
      </View>
    </View>
  )
}