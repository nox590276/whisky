import React from 'react'
import style from './css/MH_recommandedContents.module.css'

export default function MH_recommandedContents() {
  const M_recommandedContentsGoods=[
    {
      index:0,
      href:'./images/Redbreast12YearOld .png',
      goodsTitle:'Redbreast 12 Year Old Whiskey'
    },
    {
      index:1,
      href:'./images/Lagavulin16YearOld .png',
      goodsTitle:'Lagavulin 16 Year Oldwhiskey'
    },
    {
      index:2,
      href:'./images/Octomore10.15YearOld .png',
      goodsTitle:'Octomore 15 Year Oldwhiskey'
    }
  ]
  return (
    <section id={style.M_recommandedContents_wrap}>
      <div id=''>
        <p className={style.M_title}>RECOMMENDED CONTENTS</p>
        <ul id={style.M_recommanded_contents}>
          {
            M_recommandedContentsGoods.map((item)=>(
              <li key={item.index}>
              <img src={item.href} alt='' />
              <p className={style.recommandedContents_title}>{item.goodsTitle}</p>
            </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
