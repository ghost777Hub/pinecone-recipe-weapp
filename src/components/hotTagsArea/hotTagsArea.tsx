import React from 'react'
import './hotTagsArea.scss'
import {View, Text} from '@tarojs/components'
import { AtTag } from 'taro-ui'



//定义
interface HotTagsAreaProps {}

//组件
export const HotTagsArea: React.FC<HotTagsAreaProps> = () => {
  const a = [1,232131,3,4,4345,62121212121212121,7]
  //点击标签
  const clickTag = (e)=>{
    console.log(e);
  }


  return(
    <View className="hot-tags-area-component">
      <Text className="hot-tags-area-title">热门搜索：</Text>
      {a.map((item,i)=>{
        return (
          <View className="hot-tags-attag-wrapper" key={i}>
            <AtTag 
              name='tag-1' 
              circle 
              active
              onClick={clickTag}>
              {item}
            </AtTag>
          </View>
      )})}
    </View>
  )
}