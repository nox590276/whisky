import React from 'react'
import style from './css/SelectedWhisky.module.css'

export default function SelectWhisky() {
  return (
    <section id={style.selectWhisky_wrap}>
      <div id={style.selectWhisky_checkbox_wrap}>
        <ul id={style.selectWhisky_checkbox}>
          <li>Whisky <input type='checkbox'/></li>
          <li>Vodka <input type='checkbox'/></li>
          <li>Brandy <input type='checkbox'/></li>
          <li>Tequila <input type='checkbox'/></li>
          <li>Rum <input type='checkbox'/></li>
          <li>Jin <input type='checkbox'/></li>
          <li>Liqueur <input type='checkbox'/></li>
        </ul>
        <ul id={style.scroll_box}>
          <li className={style.price_scroll}><span className={style.scroll_title}>price</span>< span className={style.block}></span></li>
          <li className={style.price_scroll}><span className={style.scroll_title}>Year Old</span> <br></br><span className={style.block}></span></li>
        </ul>
      </div>
    </section>
  )
}
