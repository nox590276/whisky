import React from 'react'
import style from './css/MainVisual_whiskybox.module.css'

export default function MainVisual_whisky_box() {
  return (
    <div>
      <section id={style.mainVisual_img_box}>
        <ul id={style.mainVisual_img_list}>
          <li>
            <p className={style.mainVisual_whisky_img}><img src='./images/Balvenie 1.png' alt='BALVENIE' /></p>
            <div className={style.mainVisual_whisky_pricebox}>
              <p className={style.mainVisual_whisky_name}>BALVENIE</p>
              <p className={style.mainVisual_whisky_section_bar}> </p>
              <p className={style.etc_text_box}>
                <span className={style.price}>€123</span>
                <button className={style.mainVisual_whisky_add}>+</button>
              </p>
            </div>
          </li>
          <li>
            <p className={style.mainVisual_whisky_img}><img src='./images/main_blueLabel_full.png' alt='BLUELABEL' /></p>
            <div className={style.mainVisual_whisky_pricebox}>
              <p className={style.mainVisual_whisky_name}>BLUELABEL</p>
              <p className={style.mainVisual_whisky_section_bar}></p>
              <p className={style.etc_text_box}>
                <span className={style.price}>€123</span>
                <button className={style.mainVisual_whisky_add}>+</button>
              </p>
            </div>
          </li>
        </ul>
        <p id={style.mainVisual_imgbar}></p>
        <button id={style.mainVisual_ImgNext}>Next</button>
      </section>

    </div>
  )
}
