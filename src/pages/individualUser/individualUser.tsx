import React from 'react'
import './individualUser.scss'
import {View, Text} from '@tarojs/components'



//定义
interface IndividualUserProps {}

//组件
const IndividualUser: React.FC<IndividualUserProps> = () => {
  return(
    <View className="individual-user-page">
      <Text>individualUser页2278标题</Text>
    </View>
  )
}
export default IndividualUser