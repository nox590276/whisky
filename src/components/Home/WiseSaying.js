import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import style from './css/WiseSaying.module.css'

export default function WiseSaying() {
  return (
    <section id={style.wiseSaying_wrap}>
      <div id={style.wiseSaying_contents}>
        <p id={style.wiseSaying_img}>
          <img src='./images/ Haruki Murakami.png' alt='Haruki Murakami' />
        </p>
        <p id={style.wiseSaying_textbox}>
          "Whiskey, like a beautiful woman, demands appreciation. You gaze first, then <br />
          it's time to drink." - Haruki Murakami
        </p>
        <button id={style.left}><FaAngleLeft /></button>
        <button id={style.right}><FaAngleRight /></button>
      </div>
    </section>
  )
}
