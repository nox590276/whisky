import React from 'react'
import style from './css/MH_selected.module.css'

export default function MH_selectedWhisky() {
  return (
    <section id={style.M_selected_wrap}>
      <ul id={style.M_selected_list}>
        <li>Whisky</li>
        <li>Vodka</li>
        <li>Brandy</li>
        <li>Tequila</li>
        <li>Rum</li>
        <li>Jin</li>
        <li>Liqueur</li>
      </ul>
    </section>
  )
}
