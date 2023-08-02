import React from 'react'
import style from './css/RecentlyAdded.module.css'

export default function RecentlyAdded() {
  return (
    <section id={style.recentlyAdded_wrap}>
      <div id={style.recentlyAdded_titlebox}>
        <p id={style.recentlyAdded_title}>RECENTLY ADDED</p>
        <p id={style.recentyleAdded_subtitle}>Discover the new whiskey sensation, masterfully crafted for pure delight.</p>
      </div>
      <ul id={style.recentlyAdded_goods}>
        <li>
          <p id={style.recentlyAdded_img}><img src='./images/AMMUNITION STRAIGHT BOURBON FINISHED IN CABERNET SAUVIGNON BARRELS.png' alt='AMMUNITION STRAIGHT BOURBON FINISHED IN CABERNET SAUVIGNON BARRELS' /></p>
          <p id={style.recentlyAdded_goodsName}>AMMUNITION STRAIGHT BOURBON FINISHED <br></br>
            IN CABERNET SAUVIGNON BARRELS</p>
        </li>
        <li>
          <p id={style.recentlyAdded_img}><img src='./images/AMMUNITION STRAIGHT RYE FINISHED IN PINOT NOIR BARRELS.png' alt='AMMUNITION STRAIGHT RYE FINISHED IN PINOT NOIR BARRELS' /></p>
          <p id={style.recentlyAdded_goodsName}>AMMUNITION STRAIGHT RYE FINISHED <br></br>
            IN PINOT NOIR BARRELS</p>
        </li>
        <li>
          <p id={style.recentlyAdded_img}> <img src='./images/HUDSON WHISKEY 5 YEAR NEW YORK STRAIGHT BOURBON.png' alt='HUDSON WHISKEY 5 YEAR NEW YORK STRAIGHT BOURBON' /></p>
          <p id={style.recentlyAdded_goodsName}>HUDSON WHISKEY 5 YEAR NEW <br></br>
            YORK STRAIGHT BOURBON</p>
        </li>
      </ul>
    </section>
  )
}
