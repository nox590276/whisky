import React from 'react'
import style from './css/MH_mainVisualCard.module.css'

export default function MH_mainVIsualCard() {
  return (
    <section id={style.M_mainVisualCard_wrap}>
      <ul id={style.M_mainVisualCard}>
        <li>
          <p>Must-drink Bourbon Whiskey</p>
          <p>Bourbon whiskey is renowned for its rich and full-bodied flavor profile.</p>
        </li>
        <li>
          <p>Search for the best whiskey
            in one place!</p>
        </li>
      </ul>
    </section>
  )
}
