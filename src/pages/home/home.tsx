import React from 'react'
import './home.scss'
import {View, Text} from '@tarojs/components'



//定义
interface HomeProps {}

//组件
const Home: React.FC<HomeProps> = ()=>{
  return (
    <View className="home-page">
      <Text>首页标题</Text>
    </View>
  )
}
export default Home