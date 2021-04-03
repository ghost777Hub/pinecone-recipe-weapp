import React from 'react'
import './recipeDetail.scss'
import { View, Image, Text } from '@tarojs/components'
import { NutritionProgressBar, IngredientList } from '../../components'
import { AtDivider } from 'taro-ui'
import bingqilinImgSrc from '../../assets/images/foodDetail/bingqilin.png'
import meiweiImgSrc from '../../assets/images/foodDetail/meiwei.png'
import miaobiaoImgSrc from '../../assets/images/foodDetail/miaobiao.png'
import nandudengjiImgSrc from '../../assets/images/foodDetail/nandudengji.png'
import shiwureliangImgSrc from '../../assets/images/foodDetail/shiwureliang.png'
import headerBgImgSrc from '../../assets/images/01e7525f63368611013e458456823c.jpg'



//定义
interface RecipeDetailProps { }

//组件
const RecipeDetail: React.FC<RecipeDetailProps> = () => {
  const giveCompositionData = [  //营养数据
    {
      title: '卡路里',
      percentage: 100
    },
    {
      title: '碳水化合物',
      percentage: 8
    },
    {
      title: '脂肪',
      percentage: 100
    },
    {
      title: '蛋白质',
      percentage: 10.7
    },
    {
      title: '钙',
      percentage: 33
    },
    {
      title: '铁',
      percentage: 80
    },
  ]
  const giveIngredientsData = [ //食材数据
    {
      title: '西兰花',
      describe: '60克',
    },
    {
      title: '虾仁(大)',
      describe: '60克',
    },
    {
      title: '南豆腐',
      describe: '60克',
    },
    {
      title: '水',
      describe: '60克',
    },
    {
      title: '盐',
      describe: '60克',
    },
    {
      title: '生抽',
      describe: '60克',
    },
    {
      title: '西蓝花',
      describe: '60克',
    },
    {
      title: '小葱',
      describe: '60克',
    },
    {
      title: '鸡蛋',
      describe: '60克',
    },
    {
      title: '香油',
      describe: '60克',
    },
  ]
  const shuming = [  //说明数据
    {
      title: '蒸',
      imgSrc: meiweiImgSrc
    },
    {
      title: '奶香味',
      imgSrc: bingqilinImgSrc
    },
    {
      title: '<30分钟',
      imgSrc: miaobiaoImgSrc
    },
    {
      title: '较高热量',
      imgSrc: shiwureliangImgSrc
    },
    {
      title: '初级入门',
      imgSrc: nandudengjiImgSrc
    }
  ]
  const stepData = [ //制作步骤
    {
      stepTitle: '步骤一',
      stepContent: '锅中刷油，放入模具，加入鸡蛋，煎至半熟，加d32u98u94盐'
    },
    {
      stepTitle: '步骤一',
      stepContent: '锅中刷油，323fvr放入模具，加入鸡蛋，煎至半熟，加盐'
    },
    {
      stepTitle: '步骤一',
      stepContent: '锅中刷油，放入模具，加入鸡蛋，煎至半熟，加盐'
    },
    {
      stepTitle: '步骤一',
      stepContent: '锅中刷油，放入模具，加入鸡蛋，煎至半熟，加盐23rfg54bbfb hgn tgny565'
    },
    {
      stepTitle: '步骤一',
      stepContent: '锅中刷油，放入模具，加入鸡蛋，煎至半熟，加盐'
    },
    {
      stepTitle: '步骤一',
      stepContent: '锅中刷油，放入模具，加入鸡蛋，煎至半熟，加盐'
    },
  ]


  return (
    <View className="recipe-detail-page">
      {/* 头部背景标题 */}
      <View className="recipe-detail-header">
        <Image className="recipe-detail--header-img" src={headerBgImgSrc} mode="aspectFill"></Image>
        <View style={{ padding: '0 30px' }}>
          <Text className="recipe-detail--header-title">双皮奶</Text>
          <View className="at-row at-row__align--center">
            <Text className="caiming-renshu-text">3528 收藏</Text>
            <Text className="caiming-renshu-text">21814 浏览</Text>
          </View>
        </View>
      </View>

      <View style={{ padding: '0 30px' }}>
        {/* 营养成分进度条 */}
        <NutritionProgressBar compositionData={giveCompositionData} />
        {/* 其他描述性信息 */}
        <View style={{ marginLeft: '-8px', marginTop: '3px' }} className="at-row at-row__justify--around at-row__align--center">
          {shuming.map((item, i) => {
            return (
              <View className="at-col at-col-2 at-col--auto" key={i}>
                <View className="at-row at-row__justify--center">
                  <Image className="describe-row-img" src={item.imgSrc}></Image>
                </View>
                <View className="at-row at-row__justify--center">
                  <Text className="describe-row-text">{item.title}</Text>
                </View>
              </View>
            )
          })}
        </View>
      </View>

      <AtDivider customStyle={{ marginBottom: '16px' }} lineColor="#e7e7e7" content='' />

      {/* 食材列表 */}
      <View style={{ padding: '0 30px' }}>
        <IngredientList ingredientsData={giveIngredientsData} />
        <AtDivider lineColor="transparent" content='' />
        {/* 制作步骤 */}
        <View className="production-steps-area">
          {stepData ? stepData.map((item, i) => {
            return (<View className="production-steps-item" key={i}>
              <View className='at-article__h2'>{item.stepTitle}</View>
              <View className='at-article__p'>{item.stepContent}</View>
            </View>)
          }) : null}
        </View>
      </View>
    </View>
  )
}
export default RecipeDetail