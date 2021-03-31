import React from 'react'
import './home.scss'
import {View, Image} from '@tarojs/components'
import { SearchBar, CarouselMap, PublicityArea, ExcellentRecommends } from '../../components'



//定义
interface HomeProps {}

//组件
const Home: React.FC<HomeProps> = ()=>{
  //搜索输入处理
  const showSearchRes = ()=>{
    console.log('展示组件');
  }

  return (
    <View className="home-page">
      <Image style={{width:'100%', height: '67px', background: '#fff'}} src={require('../../assets/images/jiatoubu.png')}></Image>
      {/* 轮播图 */}
      <CarouselMap />
      {/* 搜索栏 */}
      <SearchBar onAcceptChange={showSearchRes}/>
      {/* 主题四项 */}
      <PublicityArea />
      {/* 菜品推荐区域 */}
      <ExcellentRecommends />
    </View>
  )
}
export default Home