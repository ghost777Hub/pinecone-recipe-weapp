import React, { useEffect } from 'react'
import './myInfoCard.scss'
import {View, Text, OpenData, Image} from '@tarojs/components'
import  defaultUserAvatar from '../../assets/images/mySettings/default_user_avatar.png'
import { useSelector } from '../../redux/hooks'



//定义
interface MyInfoCardProps {}

//组件
export const MyInfoCard: React.FC<MyInfoCardProps> = () => {
  const ISWEAPP = useSelector(s=> s.user.ISWEAPP)
  const currentBgCode = useSelector(s=> s.user.currentBgCode)
  const currentBgImgSrc = require(`../../assets/images/mySettings/setting_page_${currentBgCode}_bg.png`) //背景图地址
  useEffect(()=>{
  },[])

  return(
    <View style={{backgroundImage: `url(${currentBgImgSrc})`}} className="my-info-card-component">
      <View className="info-card-box">
        {ISWEAPP ? 
          <>
            <OpenData className="info-card-useravatar" type="userAvatarUrl" defaultAvatar={defaultUserAvatar} />
            <OpenData className="info-card-text1" type="userNickName" defaultText="游客" />
          </>:
          <><Image className="info-card-useravatar" src={defaultUserAvatar}></Image><Text className="info-card-text1">游客</Text></>
        }
        <Text className="info-card-text2">逛吃逛吃是一种天赋</Text> 
      </View>
    </View>
  )
}