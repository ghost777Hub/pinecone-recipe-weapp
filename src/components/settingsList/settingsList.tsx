import React, { useState, useEffect } from 'react'
import './settingsList.scss'
import { View, Text, Switch, Button, Picker } from '@tarojs/components'
import Iconfont from '../iconfont'
import { AtModal, AtList, AtListItem } from "taro-ui"
import Taro from '@tarojs/taro'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { userSlice } from '../../redux/user/slice'



//定义
interface SettingsListProps { }

//组件
export const SettingsList: React.FC<SettingsListProps> = () => {
  const [isAtModal, setIsAtModal] = useState<boolean>(false) //弹窗
  const [switchState, setSwitchState] = useState<boolean>(false) //音乐开关状态

  const ISWEAPP = useSelector(s => s.user.ISWEAPP)
  const currentBgExtraText = useSelector(s => s.user.currentBgExtraText)
  const allBgTitleArr = useSelector(s => {  //选择器选择项文本
    return s.user.allSettingsBgData.map(item => {
      return item.title
    })
  })
  const dispatch = useDispatch()

  const iconColor: string = '#FFC75F'  //icon颜色
  const iconSize: number = 38 //icon大小
  const iconYouSize: number = 24 //icon右箭头大小
  const iconYoucolor: string = '#5F788A' //icon右箭头颜色
  let bgAudio = ISWEAPP ? Taro.getBackgroundAudioManager() : null //背景音乐对象

  useEffect(() => {
    //初始化音乐对象后，开启监听
    if (bgAudio) {
      bgAudio.onPlay(openBackgroundAMG)
      bgAudio.onPause(pauseBackgroundAMG)
      bgAudio.onEnded(offBackgroundAMG)
    }
    // console.log(allBgTitleArr);
  }, [])


  //音乐开关
  const handleChange = (e) => {
    const value = e.detail.value
    value ? openBackgroundAMG() : pauseBackgroundAMG()
  }
  //开启背景音乐
  const openBackgroundAMG = () => {
    if (!bgAudio) return

    /**背景音乐标题 */
    bgAudio.title = "Dan Gibson Returning Home"
    /**分享时专辑名*/
    bgAudio.epname = "Canoe Country"
    /**分享时歌手名*/
    bgAudio.singer = 'Dan Gibson'
    /**播放器背景图 */
    bgAudio.coverImgUrl = "https://imgessl.kugou.com/stdmusic/20150718/20150718122053526024.jpg"
    /**设置了 src 之后会自动播放 */
    bgAudio.src = "https://aod.cos.tx.xmcdn.com/group39/M03/EB/B4/wKgJnlp1jRKi-I0bACvAC5FrmT8075.m4a"
    setSwitchState(true)
  }
  //暂停背景音乐
  const pauseBackgroundAMG = () => {
    if (!bgAudio) return
    bgAudio.pause()
    setSwitchState(false)
  }
  //停止结束背景音乐
  const offBackgroundAMG = () => {
    if (!bgAudio) return
    bgAudio.stop()
    setSwitchState(false)
  }
  //改变背景
  const changeBg = (e) => {
    // console.log(e.detail.value);
    const bgIndex = e.detail.value
    dispatch(userSlice.actions.changeSettingsPageBg(bgIndex))
  }


  return (
    <View className="settings-list-component">
      <View className="settings-list-item" onClick={() => { setIsAtModal(true) }}>
        <View className="settings-item-front">
          <Iconfont name={'jingxi'} color={iconColor} size={iconSize} />
          <Text className="settings-item-fronttext">{'点我有惊喜'}</Text>
        </View>
        <Iconfont name="youjiantou" color={iconYoucolor} size={iconYouSize} />
      </View>

      <View className="settings-list-item settings-list-item2" onClick={() => { }}>
        <View className="settings-item-front">
          <Iconfont name={'fenxiang'} color={iconColor} size={iconSize} />
          <Text className="settings-item-fronttext">{'微信分享'}</Text>
        </View>
        <Iconfont name="youjiantou" color={iconYoucolor} size={iconYouSize} />
        <Button className="fenxiang-btn" openType="share"></Button>
      </View>

      <View className="settings-list-item">
        <View className="settings-item-front">
          <Iconfont name={'tihuantupian'} color={iconColor} size={iconSize} />
          <View style={{ flex: 1 }}>
            <Picker mode='selector' range={allBgTitleArr} onChange={changeBg}>
              <AtList>
                <AtListItem
                  title='更换背景'
                  extraText={currentBgExtraText}
                />
              </AtList>
            </Picker>
          </View>
        </View>
      </View>

      <View className="settings-list-item" onClick={() => { }}>
        <View className="settings-item-front">
          <Iconfont name={'beijingyinle-'} color={iconColor} size={iconSize} />
          <Text className="settings-item-fronttext">{'背景音乐'}</Text>
        </View>
        <Switch type="switch" color="#FFC75F" checked={switchState} onChange={handleChange} />
      </View>

      <AtModal
        isOpened={isAtModal}
        title='提示'
        confirmText='确认'
        content='送您一朵🌹'
        onConfirm={() => { setIsAtModal(false) }}
        onClose={() => { setIsAtModal(false) }}
      />
    </View>
  )
}