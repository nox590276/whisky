import React from 'react'
import style from './css/MH_userBox.module.css'

export default function MH_userBox() {
  return (
    <section id={style.M_userBox_wrap}>
      <div id={style.M_userBox}>
        <p id={style.userImg}></p>
        <p id={style.userName}>Login is required</p>
        <p id={style.welcomeText}>
          Find your favorites whisky
        </p>
      </div>
    </section>
  )
}
