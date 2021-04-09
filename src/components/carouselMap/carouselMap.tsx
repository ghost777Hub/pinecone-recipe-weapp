import React, { useEffect } from 'react'
import './carouselMap.scss'
import {View, Swiper, SwiperItem, Image } from '@tarojs/components'



//定义
interface CarouselMapProps {
  list: any[],
  onBannerClick(id:string):void
}

//组件
export const CarouselMap: React.FC<CarouselMapProps> = (props) => {
  const { list } = props
  const handleClick = (e)=>{
    const {id} = e.currentTarget.dataset
    props.onBannerClick && props.onBannerClick(id)
  }
  useEffect(()=>{
  },[])

  return(
    <View className="carousel-map-component">
      {list.length > 0 ? 
        <Swiper
        className='carousel-swiper-container'
        indicatorColor='#FFFFFF'
        indicatorActiveColor='#CCCCCC'
        vertical={false} circular indicatorDots 
        autoplay
        interval={2200} duration={900}>
        {list.map((item,i) => {
          return (
            <SwiperItem key={i}>
              <View data-id={item.id} className={'carousel-swiper-itembox'} onClick={handleClick}>
                <Image className={'carousel-swiper-itemimg'} src={item.imageSrc} mode="aspectFill"></Image>
              </View>
            </SwiperItem>
          )
        })}
        </Swiper>
      : null}
    </View>
  )
}