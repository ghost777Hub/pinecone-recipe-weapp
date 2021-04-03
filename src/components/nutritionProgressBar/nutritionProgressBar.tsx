import React from 'react'
import './nutritionProgressBar.scss'
import {View} from '@tarojs/components'
import {LeftProgress, RightProgress} from './index'
import {itemDataType} from './interface'



//定义
interface NutritionProgressBarProps {
  compositionData: Array<itemDataType>  //成分数据
}

//组件
export const NutritionProgressBar: React.FC<NutritionProgressBarProps> = (props) => {
  const {compositionData} = props


  return(
    <View className="nutrition-progress-bar-component at-row at-row--wrap">
      {compositionData ? <>
        {/* 左边进度条 */}
        <View className='at-col at-col-7 at-col--wrap'>
          {compositionData.map((item ,i)=>{
            return (
              <LeftProgress itemData={item} key={i}/>
          )})}
        </View>
        <View className="center-line"></View>
        {/* 右边环形条 */}
        <View className='at-col'>
          <RightProgress itemData={compositionData} />
        </View>
      </> :null}
    </View>
  )
}