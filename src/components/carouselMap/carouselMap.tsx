import React from 'react'
import './carouselMap.scss'
import {View, Swiper, SwiperItem, Image } from '@tarojs/components'
import lunbotu1 from '../../assets/images/01a6a55f63369011013f31101def1d.jpg'
import lunbotu2 from '../../assets/images/01e7525f63368611013e458456823c.jpg'
import lunbotu3 from '../../assets/images/01f2715f63369211013f31107ad80a.jpg'
import lunbotu4 from '../../assets/images/0179665f63369011013f311090e0f4.jpg'



//定义
interface CarouselMapProps {}

//组件
export const CarouselMap: React.FC<CarouselMapProps> = () => {
  const swiperItemDom = [
    {imageSrc: lunbotu1},
    {imageSrc: lunbotu2},
    {imageSrc: lunbotu3},
    {imageSrc: lunbotu4},
  ]
  return(
    <View className="carousel-map-component">
      <Swiper
        className='carousel-swiper-container'
        indicatorColor='#FFFFFF'
        indicatorActiveColor='#CCCCCC'
        vertical={false} circular indicatorDots 
        autoplay
        interval={2200} duration={900}>
        {swiperItemDom.map((item,i) => {
          return (
            <SwiperItem key={i}>
              <View className={'carousel-swiper-itembox'}>
                <Image className={'carousel-swiper-itemimg'} src={item.imageSrc} mode="aspectFill"></Image>
              </View>
            </SwiperItem>
          )
        })}
      </Swiper>
    </View>
  )
}