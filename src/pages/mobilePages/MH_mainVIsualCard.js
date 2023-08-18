import React from 'react'
import style from './css/MH_mainVisualCard.module.css'

export default function MH_mainVIsualCard() {
  return (
    <section id={style.M_mainVisualCard_wrap}>
      <ul id={style.M_mainVisualCard}>
        <li id={style.mainVisual_1}>
          <p>Must-drink Bourbon Whiskey</p>
          <div>
            <p>Bourbon whiskey is renowned for its rich and full-bodied flavor profile.</p>
            <p><img src='' /></p>
          </div>
        </li>
        <li id={style.mainVisual_2}>
          <p>Search for the best whiskey
            in one place!</p>
        </li>
      </ul>
    </section>
  )
}
