import React from 'react'
import style from './css/GiftCard.module.css'
import { FaGlassWhiskey } from "react-icons/fa";


export default function GiftCard() {
  return (
    <section id={style.giftCard_wrap}>
      <div id={style.giftCard_titlebox}>
        <p id={style.giftCard_title}>WHISKY STORE GIFT CARD</p>
        <p id={style.giftCard_subtitle}>A whiskey gift card for the perfect whiskey experience.</p>
      </div>
      <ul id={style.giftCard_contents}>
        <li>
          <p className={style.card_whiskyType}>WHISKEY</p>
          <p className={style.card_image}><img src='./images/free-icon-whiskey-3875390 3.png'/></p>
          <p className={style.card_price}>$300</p>
          <button className={style.card_addToCart}>ADD TO CART</button>
        </li>
        <li>
          <p className={style.card_whiskyType}>VODKA</p>
          <p className={style.card_image}><img src='./images/free-icon-vodka-7455893 4.png'/></p>
          <p className={style.card_price}>$300</p>
          <button className={style.card_addToCart}>ADD TO CART</button>
        </li>
        <li>
          <p className={style.card_whiskyType}>TEQUILA</p>
          <p className={style.card_image}><img src='./images/free-icon-whiskey-4128603 3.png'/></p>
          <p className={style.card_price}>$300</p>
          <button className={style.card_addToCart}>ADD TO CART</button>
        </li>
      </ul>
      <p id={style.section_bar_giftCard}>
        <span><FaGlassWhiskey/></span>
      </p>
    </section>
  )
}
