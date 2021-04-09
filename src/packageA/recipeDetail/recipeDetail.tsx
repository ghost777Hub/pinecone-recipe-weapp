import React, { useEffect } from 'react'
import './recipeDetail.scss'
import { View, Image, Text } from '@tarojs/components'
import { NutritionProgressBar, IngredientList } from '../../components'
import { AtDivider } from 'taro-ui'
import bingqilinimageSrc from '../../assets/images/foodDetail/bingqilin.png'
import meiweiimageSrc from '../../assets/images/foodDetail/meiwei.png'
import miaobiaoimageSrc from '../../assets/images/foodDetail/miaobiao.png'
import nandudengjiimageSrc from '../../assets/images/foodDetail/nandudengji.png'
import shiwureliangimageSrc from '../../assets/images/foodDetail/shiwureliang.png'
import { getCurrentInstance } from '@tarojs/taro'
import { useDispatch } from 'react-redux'
import { postRecipesDetailAPI } from '../../redux/recipes/slice'
import { useSelector } from '../../redux/hooks'
import { AtActivityIndicator } from 'taro-ui'



//定义
interface RecipeDetailProps { }

//组件
const RecipeDetail: React.FC<RecipeDetailProps> = () => {
  const router = getCurrentInstance().router as any //路由对象
  const { id } = router.params
  const { composition, content, shuming, stepData } = useSelector(s => s.recipe.recipesDetailData) as any
  const recipesDetailData = useSelector(s => s.recipe.recipesDetailData) as any
  const error = useSelector(s=>s.recipe.error)
  const loading = useSelector(s=>s.recipe.loading)

  const shumingImgSrc = [  //说明数据图
    {
      imageSrc: meiweiimageSrc
    },
    {
      imageSrc: bingqilinimageSrc
    },
    {
      imageSrc: miaobiaoimageSrc
    },
    {
      imageSrc: shiwureliangimageSrc
    },
    {
      imageSrc: nandudengjiimageSrc
    }
  ]
  const dispatch = useDispatch()
  useEffect(() => {
    getDataPack()
  }, [])


  //获取食谱详情
  const getDataPack = async () => {
    await dispatch(postRecipesDetailAPI({
      rId: id
    }))
  }

  if(loading){
    return <AtActivityIndicator mode='center' content='Loading...' size={50} ></AtActivityIndicator>
  }

  if (error) {
    return <div>网站出错: {error}</div>
  }

  return (
    <View className="recipe-detail-page">
      {recipesDetailData ? <>
        {/* 头部背景标题 */}
        <View className="recipe-detail-header">
          <Image className="recipe-detail--header-img" src={recipesDetailData.imageSrc} mode="aspectFill"></Image>
          <View style={{ padding: '0 20px' }}>
            <Text className="recipe-detail--header-title">{recipesDetailData.title}</Text>
            <View className="at-row at-row__align--center">
              <Text className="caiming-renshu-text">{recipesDetailData.LikesNumber} 喜欢</Text>
              <Text className="caiming-renshu-text">{recipesDetailData.collectorsNumber} 收藏</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: '12px 20px 0' }}>
          {/* 营养成分进度条 */}
          <NutritionProgressBar compositionData={composition} />
          {/* 其他描述性信息 */}
          <View style={{ marginLeft: '-8px', marginTop: '15px' }} className="at-row at-row__justify--around at-row__align--center">
            {shuming.map((item, i) => {
              return (
                <View className="at-col at-col-2 at-col--auto" key={i}>
                  <View className="at-row at-row__justify--center">
                    <Image className="describe-row-img" src={shumingImgSrc[i].imageSrc}></Image>
                  </View>
                  <View className="at-row at-row__justify--center">
                    <Text className="describe-row-text">{item}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </View>

        <AtDivider customStyle={{marginTop: '8px', marginBottom: '16px' }} lineColor="#e7e7e7" content='' />

        {/* 食材列表 */}
        <View style={{ padding: '0 20px' }}>
          <IngredientList ingredientsData={content} />
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
      </> : null}
    </View>
  )
}
export default RecipeDetail