import React from 'react'
import './settingsList.scss'
import {View, Text, Switch} from '@tarojs/components'
import Iconfont from '../iconfont'



//定义
interface SettingsListProps {}

type optionsType = {
  iconName: string;
  title: string;
  isJump: boolean;
  clickFn: string;
}

//组件
export const SettingsList: React.FC<SettingsListProps> = () => {
  const iconColor:string = '#FFC75F'
  const iconSize:number = 38
  const options:Array<optionsType> = [  //设置列表
    {
      iconName: 'jingxi',
      title: '点我有惊喜',
      isJump: true, //显示>图标  还是其他控件
      clickFn: 'gotoSurprisedPage'
    },
    {
      iconName: 'fenxiang',
      title: '微信分享',
      isJump: true,
      clickFn: 'wechatShare'
    },
    {
      iconName: 'tihuantupian',
      title: '更换背景',
      isJump: true,
      clickFn: 'gotoDownloadPage'
    },
    {
      iconName: 'beijingyinle-',
      title: '背景音乐',
      isJump: false,
      clickFn: 'changeMusicState'
    }
  ]


  return(
    <View className="settings-list-component">
      {options.map((item:optionsType, i)=>{
        return (
          <View className="settings-list-item" key={i}>
            <View className="settings-item-front">
              <Iconfont name={item.iconName as any} color={iconColor} size={iconSize}/>
              <Text className="settings-item-fronttext">{item.title}</Text>
            </View>
            {item.isJump ? <Iconfont name="youjiantou" color={'#5F788A'} size={24}/> : <Switch type="switch" color="#FFC75F" />}
          </View>
      )})}
    </View>
  )
}