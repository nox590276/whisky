import React from 'react'
import style from './css/MH_recentlyAdded.module.css'

export default function MH_recentlyAdded() {
  const M_recentlyGoods = [
    {
      index: 0,
      href: './images/AMMUNITION STRAIGHT BOURBON FINISHED IN CABERNET SAUVIGNON BARRELS_M.png',
      text: 'AMMUNITION STRAIGHT BOURBON FINISHED IN CABERNET SAUVIGNON BARRELS'
    },
    {
      index: 1,
      href: './images/AMMUNITION STRAIGHT RYE FINISHED IN PINOT NOIR BARRELS_M.png',
      text: 'AMMUNITION STRAIGHT RYE FINISHED IN PINOT NOIR BARRELS'
    },
    {
      index: 2,
      href: './images/HUDSON WHISKEY 5 YEAR NEW YORK STRAIGHT BOURBON_M.png',
      text: 'HUDSON WHISKEY 5 YEAR NEW YORK STRAIGHT BOURBON'
    }
  ]
  return (
    <section id={style.M_recentlyAdded_wrap}>
      <div>
        <p className={style.M_title}>RECENTLY ADDED</p>
        <ul id={style.M_recently_contents}>
          {
            M_recentlyGoods.map((item) => (
              <li key={item.index}>
                <div id={style.M_recently_section}>
                <img src={item.href} alt='AMMUNITION STRAIGHT BOURBON FINISHED IN CABERNET SAUVIGNON BARRELS' />
                <p id={style.M_recently_text}>{item.text}</p>
                </div>
              </li>
            ))
          }
          {/* <li>
            <img src='' alt='AMMUNITION STRAIGHT RYE FINISHED IN PINOT NOIR BARRELS' />
            <p>AMMUNITION STRAIGHT RYE FINISHED IN PINOT NOIR BARRELS</p>
          </li>
          <li>
            <img src='' alt='HUDSON WHISKEY 5 YEAR NEW YORK STRAIGHT BOURBON' />
            <p>HUDSON WHISKEY 5 YEAR NEW YORK STRAIGHT BOURBON</p>
          </li> */}
        </ul>
      </div>
    </section>
  )
}
