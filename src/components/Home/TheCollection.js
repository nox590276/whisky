import React from 'react'
import style from './css/TheCollection.module.css'

export default function TheCollection() {
  return (
    <section id={style.theCollection_wrap}>
      <div id={style.thecollection_contents}>
        <p id={style.thecollection_point}><img src='./images/theCollection_point.png' alt='thecollection' /></p>
        <div id={style.collection_textbox}>
          <p id={style.collecion_title}>THE COLLECTION</p>
          <p id={style.collection_Main_text}>Must-drink Bourbon Whiskey</p>
          <p id={style.collection_text}>Bourbon whiskey is renowned for its rich and full-bodied flavor profile.</p>
          <button id={style.collection_MoreView}>MORE VIEW</button>
        </div>
      </div>
    </section>
  )
}
