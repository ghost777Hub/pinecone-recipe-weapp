import React from 'react'
import './hotTagsArea.scss'
import {View, Text} from '@tarojs/components'
import { AtTag } from 'taro-ui'



//定义
interface HotTagsAreaProps {
  /**热门搜索关键词 */
  dataPack: any;
  onWordToDetail:(id:string)=>void
}

//组件
export const HotTagsArea: React.FC<HotTagsAreaProps> = (props) => {
  const {dataPack} = props
  //点击标签
  const clickTag = (e)=>{
    // console.log(e.name);
    props.onWordToDetail && props.onWordToDetail(e.name)
  }


  return(
    <View className="hot-tags-area-component">
      <Text className="hot-tags-area-title">热门搜索：</Text>
      {dataPack.length > 0 ? dataPack.map((item,i)=>{
        return (
          <View className="hot-tags-attag-wrapper" key={i}>
            <AtTag 
              name={item.id} 
              circle 
              active
              onClick={clickTag}>
              {item.title}
            </AtTag>
          </View>
      )}):null}
    </View>
  )
}