import React, { useEffect } from 'react'
import './individualUser.scss'
import { View } from '@tarojs/components'
import { MyInfoCard, SettingsList } from '../../components'
import { useShareAppMessage } from '@tarojs/taro'



//定义
interface IndividualUserProps { }

//组件
const IndividualUser: React.FC<IndividualUserProps> = () => {
  useEffect(() => {
  }, [])
  //分享朋友圈  -该钩子只能在页面级组件触发
  useShareAppMessage(() => {
    return {
      title: '小松果食谱',
      path: 'pages/home/home',
      //promise  //如果该参数存在，则以 resolve 结果为准
    }
  })

  return (
    <View className="individual-user-page">
      {/* 我的信息卡片 */}
      <MyInfoCard />
      {/* 设置选项 */}
      <SettingsList />
    </View>
  )
}
export default IndividualUser