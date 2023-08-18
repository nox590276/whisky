import React, { useState } from 'react'
import MainVisual from './Home/MainVisual'
import style from './Home/css/Hom.module.css'
import MainSelectedPage from './Home/MainSelectedPage';

export default function Home() {
  return (
    <div id={style.home_wrap}>
      <MainVisual/>
      <MainSelectedPage />
    </div>
  )
}
