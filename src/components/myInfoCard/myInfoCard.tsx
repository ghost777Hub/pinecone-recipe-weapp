import React, { useEffect } from 'react'
import './myInfoCard.scss'
import {View, Text, OpenData, Image} from '@tarojs/components'
import  defaultUserAvatar from '../../assets/images/mySettings/default_user_avatar.png'



//定义
interface MyInfoCardProps {}

//组件
export const MyInfoCard: React.FC<MyInfoCardProps> = () => {
  const ISH5 = process.env.TARO_ENV === "h5"  //判断当前平台
  useEffect(()=>{
    console.log(ISH5)
  })

  return(
    <View className="my-info-card-component">
      <View className="info-card-box">
        {ISH5 ? 
          <><Image className="info-card-useravatar" src={defaultUserAvatar}></Image><Text className="info-card-text1">游客</Text></> : 
          <>
            <OpenData className="info-card-text1" type="userNickName" defaultText="游客" />
            <OpenData className="info-card-useravatar" type="userAvatarUrl" defaultAvatar={defaultUserAvatar} />
          </>
        }
        <Text className="info-card-text2">逛吃逛吃是一种天赋</Text> 
      </View>
    </View>
  )
}