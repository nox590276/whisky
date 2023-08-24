import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoArrowBackOutline } from "react-icons/io5";
import style from './css/mobileDetail.page.module.css'

export default function MobileDetailPage() {
  return (
    <section id={style.MobileDetailPage_wrap}>
      <div id={style.MdetailGoods_imgBox}>
        <p id={style.backBtn}><IoArrowBackOutline/></p>
        <p id={style.MdetailGoods_type}>whisky</p>
        <p id={style.MdetailGoods_img}><img src='' alt=''/></p>
      </div>
      <div id={style.MdetailGoods_infoBox}>
        <p id={style.MdetailGoods_title}>Famous Grouse</p>
        <p id={style.MdetailGoods_score}><FaStar /><FaStar /><FaStar /></p>
        <p id={style.MdetailGoods_text}>A 20cl bottle of Famous Grouse's immensely popular blended Scotch Whisky. First 
        released in 1860, as of the 2010s, it has been Scotland's most popular Scotch for 30 years.</p>
        <div id={style.MdetailGoods_cashInfo}>
          <p id={style.price_box}>
            <span id={style.degreeOfDrinking}>20cl</span>
            <span id={style.goodsPrice}>$8.86</span>
          </p>
          <p id={style.addToCart}>ADD TO CART</p>
        </div>
      </div>
    </section>
  )
}
