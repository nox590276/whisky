import React from 'react'
import MainVisual_textbox from './MainVisualTextbox'
import MainVisual_whisky_box from './MainVisualWhiskybox'
import style_mainvisual from './css/MainVisual.module.css'
import style_textbox from './css/MainVisual_textbox.module.css'
import style_whiskybox from './css/MainVisual_whiskybox.module.css'

export default function MainVisual() {
  return (
      <section id={style_mainvisual.mainVisual_wrap}>
        <div id={style_textbox.mainVisual_textbox_wrap}><MainVisual_textbox /></div>
        <div id={style_whiskybox.mainVisual_whiskybox_wrap}><MainVisual_whisky_box /></div>
        <p id={style_mainvisual.mainVisual_section_bar}></p>
      </section>
  )
}