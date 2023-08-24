import React, { useState } from 'react'
import style from './css/MH_mainVisualCard.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
// import { Pagination } from 'swiper/modules';

export default function MH_mainVIsualCard() {

  return (
    <>
      <section id={style.M_mainVisualCard_wrap}>
        <ul id={style.M_mainVisualCard}>
          <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={false}
          pagination={{
            clickable: false,
          }}
          className="mySwiper"
          >
            <SwiperSlide>
              <li id={style.mainVisual_1} style={{borderRadius:15}}>
                <p className={style.mainVisual_title}>Must-drink Bourbon Whiskey</p>
                <div id={style.MmainVisual_textBox}>
                  <p id={style.MmainVisual_img}><img src='./images/theCollection_point.png' /></p>
                  <p id={style.MmainVisual_text}>Bourbon whiskey is renowned for its rich and full-bodied flavor profile.</p>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li id={style.mainVisual_2} style={{borderRadius:15, height:170}}>
                <p className={style.mainVisual_title}>Search for the best whiskey
                  in one place!</p>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </section>
    </>
  )
}
