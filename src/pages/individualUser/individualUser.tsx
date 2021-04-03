import React from 'react'
import './individualUser.scss'
import {View} from '@tarojs/components'
import { MyInfoCard, SettingsList } from '../../components'



//定义
interface IndividualUserProps {}

//组件
const IndividualUser: React.FC<IndividualUserProps> = () => {
  return(
    <View className="individual-user-page">
      {/* 我的信息卡片 */}
      <MyInfoCard />
      {/* 设置选项 */}
      <SettingsList />
    </View>
  )
}
export default IndividualUser