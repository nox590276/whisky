import React from 'react'
import style from './css/MH_mainVisualCard.module.css'

export default function MH_mainVIsualCard() {
  return (
    <section id={style.M_mainVisualCard_wrap}>
      <ul id={style.M_mainVisualCard}>
        <li id={style.mainVisual_1}>
          <p className={style.mainVisual_title}>Must-drink Bourbon Whiskey</p>
          <div id={style.MmainVisual_textBox}>
            <p id={style.MmainVisual_img}><img src='./images/theCollection_point.png' /></p>
            <p id={style.MmainVisual_text}>Bourbon whiskey is renowned for its rich and full-bodied flavor profile.</p>
          </div>
        </li>
        <li id={style.mainVisual_2}>
          <p className={style.mainVisual_title}>Search for the best whiskey
            in one place!</p>
        </li>
      </ul>
    </section>
  )
}
