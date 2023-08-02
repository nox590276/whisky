import React from 'react'
import style from './css/RecommandedContents.module.css'
import { FaGlassWhiskey } from "react-icons/fa";

export default function RecommendedContents() {
  return (
    <section id={style.recommanded_wrap}>
      <div id={style.recommanded_titlebox}>
        <p id={style.recommanded_title}>RECOMMAND CONTENTS</p>
        <p id={style.recommanded_subtitle}>Exquisite new whiskey, expertly crafted.</p>
      </div>
      <ul id={style.recommanded_goods}>
        <li>
          <img src='./images/Redbreast12YearOld .png' alt='Redbreast 12 Year Old'/>
          <div id={style.recommanded_textbox}>
            <p id={style.recommanded_goodsName}>Redbreast 12 Year Old</p>
            <p id={style.recommanded_type}>whiskey</p>
          </div>
        </li>
        <li>
          <img src='./images/Lagavulin16YearOld .png' alt='Lagavulin 16 Year Old'/>
          <div id={style.recommanded_textbox}>
            <p id={style.recommanded_goodsName}>Lagavulin 16 Year Old </p>
            <p id={style.recommanded_type}>whiskey</p>
          </div>
        </li>
        <li>
          <img src='./images/Octomore10.15YearOld .png' alt='Octomore 15 Year Old'/>
          <div id={style.recommanded_textbox}>
            <p id={style.recommanded_goodsName}>Octomore 15 Year Old </p>
            <p id={style.recommanded_type}>whiskey</p>
          </div>
        </li>
      </ul>
      <p id={style.section_bar_recommanded}>
        <span><FaGlassWhiskey/></span>
      </p>
    </section>
  )
}
