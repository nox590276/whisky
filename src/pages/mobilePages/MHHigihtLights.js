import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import style from './css/MH_hightLight.module.css'

import 'swiper/css';
import 'swiper/css/pagination';

export default function MH_higihtLights() {
  const M_highLightGoods = [
    {
      index: 0,
      highLightGoods_title: 'BOWMORE DISTILLERY',
      highLightGoods_type: 'whisky',
      highLightGoods_price: '3180.51',
      highLightGoods_img: './images/BOWMOREDISTILLERY.png'
    },
    {
      index: 1,
      highLightGoods_title: 'REGALROGUEDARING DRY',
      highLightGoods_type: 'whisky',
      highLightGoods_price: '26.63',
      highLightGoods_img: './images/RegalRogueDaringDry.png'
    },
    {
      index: 2,
      highLightGoods_title: 'BOWMORE DISTILLERY7',
      highLightGoods_type: 'whisky',
      highLightGoods_price: '3180.51',
      highLightGoods_img: './images/BOWMOREDISTILLERY7.png'
    },
    {
      index: 3,
      highLightGoods_title: 'BlUE LABEL',
      highLightGoods_type: 'whisky',
      highLightGoods_price: '72.45',
      highLightGoods_img: './images/BlueLabel.png'
    },
    {
      index: 4,
      highLightGoods_title: 'BALVENIE',
      highLightGoods_type: 'whisky',
      highLightGoods_price: '50.82',
      highLightGoods_img: './images/Balvenie.png'
    }
  ]
  return (
    <section id={style.M_hightLight_wrap}>
      <div id='M_hightLight'>
        <p className={style.M_title}>TODAY's HIGHLIGHTS</p>
        <ul id={style.M_highLight_goods} style={{width:543}}>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            centeredSlides={true}
            pagination={{
              clickable: false,
            }}
            className="mySwiper"
          >
            {
              M_highLightGoods.map((item) => (
                <SwiperSlide>
                  <li key={item.index} style={{width:99}}>
                    <div className={style.M_highLight_goods_section}>
                      <p className={style.highLightGoods_title}>{item.highLightGoods_title}</p>
                      <p className={style.highLightGoods_type}>{item.highLightGoods_type}</p>
                      <p className={style.highLightGoods_price}>${item.highLightGoods_price}</p>
                      <img src={item.highLightGoods_img} alt='' style={{left:50}}/>
                    </div>
                  </li>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </ul>
      </div>
    </section>
  )
}
