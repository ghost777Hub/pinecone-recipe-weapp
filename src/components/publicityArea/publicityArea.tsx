import React from 'react'
import './publicityArea.scss'
import {View, Text, Image} from '@tarojs/components'
import resizeApi1 from '../../assets/images/home/1255481.gif'
import resizeApi2 from '../../assets/images/home/resizeApi-3.png'
import resizeApi3 from '../../assets/images/home/resizeApi-2.png'
import resizeApi4 from '../../assets/images/home/jiachangcai.png'
import resizeApi5 from '../../assets/images/home/e43afe96a5ba4e18aa7cef325ac31be3.png'



//定义
interface PublicityAreaProps {
  onPublicityClick(code:string):void
}

//组件
export const PublicityArea: React.FC<PublicityAreaProps> = (props) => {
  //栅格分布数据
  const atGridData = [
    {
      image: resizeApi1,
      value: '早餐',
      subClassCode: 'zaocan',
    },
    {
      image: resizeApi2,
      value: '素食',
      subClassCode: 'sushi',
    },
    {
      image: resizeApi3,
      value: '肉食',
      subClassCode: 'roushi',
    },
    {
      image: resizeApi4,
      value: '家常菜',
      subClassCode: 'jiachangcai',
    },
    {
      image: resizeApi5,
      value: '汤羹',
      subClassCode: 'tanggeng',
    },
  ]

  const handleClick = (e)=>{
    const {code} = e.currentTarget.dataset
    props.onPublicityClick && props.onPublicityClick(code)
  }


  return(
    <View className="publicity-area-component">
      {atGridData.map((item, i)=>{
        return (
          <View data-code={item.subClassCode} className="gongge-view" key={i} onClick={handleClick}>
            <Image className="gongge-image" src={item.image}></Image>
            <Text className="gongge-text">{item.value}</Text>
          </View>
        )
      })}
    </View>
  )
}