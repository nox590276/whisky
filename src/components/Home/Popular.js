import React from 'react'
import style from './css/Popular.module.css'

export default function Popular() {
  return (
    <section id={style.popular_wrap}>
      <div id={style.popular_titlebox}>
        <p id={style.popular_title}>POPULAR WHISKY</p>
        <p id={style.popular_subtitle}>Experience the exquisite flavors of our top-rated whiskey, loved by enthusiasts worldwide</p>
      </div>
      <div id={style.tabMenu_wrap}>
        <ul id={style.popular_tabMenu}>
          <li className={style.selected}>Single Malt whiskey</li>
          <li>Blended Scotch</li>
          <li>Japanese whiskey</li>
        </ul>
        <ul id={style.popular_panel}>
          <li className={style.panelselected}>
            <p>Aberlour 18 Year Old</p>
            <p>Balvenie 21 Year Old Port Wood Finish</p>
            <p>Glenmorangie Sonnalta PX</p>
            <p>Aberlour 10 Year Old</p>
            <p>Glenfiddich 21 Year Old Port Wood Finish</p>
            <p>Highland Park 18 Year Old</p>
            <p>Ardbeg Corryvreckan</p>
            <p>Glenmorangie Nectar D’Or</p>
            <p>Highland Park 30 Year Old</p>
            <p>Ardbeg Uigeadail</p>
            <p>Glenmorangie Signet</p>
            <p>Laphroaig 15 Year Old</p>
          </li>
          <li>
            <p>Ballantine's 17 Year Old</p>
            <p>Chivas Regal 18 Year Old</p>
            <p>Johnnie Walker Blue Label</p>
            <p>Ballantine's 21 Year Old</p>
            <p>Compass Box Oak Cross</p>
            <p>Johnnie Walker Gold Label 18 Year Old</p>
            <p>Black Bottle</p>
            <p>Compass Box Peat Monster</p>
            <p>The Tweeddale Blend 10 Year Old</p>
            <p>Chivas Regal 12 Year Old</p>
            <p>Cutty Sark</p>
            <p>Whyte & Mackay 13 Year Old</p>
          </li>
          <li>
            <p>Hakushu Bourbon Barrel</p>
            <p>Nikka Pure Malt Black</p>
            <p>Suntory Hakushu 12 Year Old</p>
            <p>Nikka All Malt</p>
            <p>Nikka Yoichi 10 Year Old</p>
            <p>Suntory Hibiki 12 Year Old</p>
            <p>Nikka from the Barrel</p>
            <p>Nikka Yoichi 15 Year Old</p>
            <p>Suntory Yamazaki 18 Year Old</p>
            <p>Nikka Miyagikyo 15 Year Old</p>
            <p>Suntory Hakushu 10 Year Old</p>
            <p>Suntory Yamazaki Puncheon</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
