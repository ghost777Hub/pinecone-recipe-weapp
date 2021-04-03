import React, { useState } from 'react'
import './myRing.scss'
import {View, Text} from '@tarojs/components'



//定义
type leftAndRightOptions = {
  changeBackground: string;  //改变的背景色
  changeZindex: number; //z-index的值
  changeRotateZ: number;  //z方向旋转的值
}

interface MyRingProps {
  size?: number;  //宽高
  coreColor?: string;  //中心色
  edgeColor?: string; //底色
  edgeDecColor?: string; //边缘辅助色
  percentage: number; //进度
  contentText: string; //圆心文字
  contentTextSize?: number; //圆心文字大小
  // contentTextColor?: string; //圆心文字颜色
}

//组件
export const MyRing: React.FC<MyRingProps> = (props) => {
  const cSize = props.size || 90
  const cCoreColor = props.coreColor || '#FFFFFF'
  const cEdgeDecColor = props.edgeDecColor || 'rgb(255, 232, 232)'
  const cEdgeColor = props.edgeColor || 'red'
  const cPercentage = props.percentage || 0  //30度为10%， 所以计算时，用180-传值*3.6
  const cContentText = props.contentText
  const cContentTextSize = props.contentTextSize || 12
  // const cContentTextColor = props.contentTextColor || '#272727e0'

  //右圆的配置
  const [rightOptions] = useState<leftAndRightOptions>(()=>{
    if(cPercentage > 50) {  //50%以上, 原地不动，层在上
      return {
        changeBackground: cEdgeColor,
        changeZindex: 10,
        changeRotateZ: 0
      }
    }else{   //正向旋转，层在下
      return {  
        changeBackground: cEdgeDecColor,
        changeZindex: 5,
        changeRotateZ: 3.6*cPercentage
      }
    }
  })
  //左圆的配置
  const [leftOptions] = useState<leftAndRightOptions>(()=>{
    if(cPercentage > 50) {  //50%以上，逆向旋转，层在下
      return {
        changeBackground: cEdgeDecColor,
        changeZindex: 5,
        changeRotateZ: 3.6*(cPercentage-50)
      }
    }else{ //原地不动,层在上
      return {  
        changeBackground: cEdgeDecColor,
        changeZindex: 10,
        changeRotateZ: 0
      }
    }
  })

  return(
    <View className="my-ring-component circular-component" 
      style={{width: `${cSize}px`, height: `${cSize}px`, background: cEdgeColor}
    }>
      <View className="main-circular"
        style={{ backgroundColor: leftOptions.changeBackground, 
          borderRadius: `${cSize / 2}px ${cSize / 2}px 0 0`, 
          zIndex: leftOptions.changeZindex,
          transform: `rotateZ(${leftOptions.changeRotateZ}deg)`,
        }}
      ></View>  
      <View className="auxiliary-circular"
        style={{ backgroundColor: rightOptions.changeBackground, 
          borderRadius: `0 0 ${cSize / 2}px ${cSize / 2}px`, 
          zIndex: rightOptions.changeZindex,
          transform: `rotateZ(${rightOptions.changeRotateZ}deg)`,
        }} 
      ></View>  
      <View className="center-circular" style={{ background: cCoreColor, fontSize:`${cContentTextSize}px`, color: cEdgeColor }}>
        <Text>{cContentText}</Text>
      </View>
    </View>
  )
}
