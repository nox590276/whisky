import React from 'react'
import style from './css/HighLights.module.css'

export default function HighLights() {
  return (
    <section id={style.highLights_wrap}>
      <div id={style.title_box}>
        <h3 className={style.main_title} id={style.highLight_title}>TODAY'S HIGHLIGHTS</h3>
        <p className={style.main_subtitle} id={style.highLight_subtitle}>Our top picks on some spectacular spirits.</p>
      </div>
      <ul id={style.highLights_goods}>
        <li id={style.BOWMOREDISTILLERY6_img}>
          <img src='./images/BOWMOREDISTILLERY.png' alt='BOWMORE DISTILLERY' />
          <div className={style.goods_text}>
            <p className={style.highLight_goodName}>BOWMORE DISTILLERY</p>
            <p className={style.highLight_type}>Whisky</p>
            <p className={style.highLight_price}>£2,500.00</p>
          </div>
        </li>
        <li>
          <img src='./images/RegalRogueDaringDry.png' alt='Regal Rogue Daring Dry' />
          <div className={style.goods_text}>
            <p className={style.highLight_goodName}>REGALROGUEDARINGDRY</p>
            <p className={style.highLight_type}>Whisky</p>
            <p className={style.highLight_price}>€24.50</p>
          </div>
        </li>
        <li>
          <img src='./images/BOWMOREDISTILLERY7.png' alt='BOWMORE DISTILLERY7' />
          <div className={style.goods_text}>
            <p className={style.highLight_goodName}>BOWMORE DISTILLERY7</p>
            <p className={style.highLight_type}>Whisky</p>
            <p className={style.highLight_price}>£2,500.00</p>
          </div>
        </li>
        <li>
          <img src='./images/BlueLabel.png' alt='BluLabel' />
          <div className={style.goods_text}>
            <p className={style.highLight_goodName}>BlUE LABEL</p>
            <p className={style.highLight_type}>Whisky</p>
            <p className={style.highLight_price}>£56.95</p>
          </div>
        </li>
        <li id={style.balvenie_img}>
          <img src='./images/Balvenie.png' alt='Balvenie' />
          <div className={style.goods_text}>
            <p className={style.highLight_goodName}>BALVENIE</p>
            <p className={style.highLight_type}>Whisky</p>
            <p className={style.highLight_price}>£39.95</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
