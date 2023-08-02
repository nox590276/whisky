import React from 'react'
import style from './css/SearchBest.module.css'

export default function SearchBest() {
  return (
    <section id={style.searchBest_wrap}>
      <div id={style.searchBest_contents}>
        <div id={style.searchBest_titlebox}>
          <p id={style.searchBest_title}>Search for the best whiskey<br></br>
            in one place!</p>
            <p id={style.searchBest_text}>Find the ideal Scotch Whiskey, Bourbon Whiskey and other products as a <br></br>
            high-end whisky finder on our site, where you find good whisky at a good<br></br>
            price. Whiskey from Scotland, Ireland, the United States, Japan and many <br></br>
            other parts of the world. Find the right whiskey online for you or as a gift.<br></br>
            Not sure which one to buy? </p>
            <button id={style.searchBest_moreView}>MORE VIEW</button>
        </div>
        <div id='searchBest_pointImg'><img src='./images/searchBest_point.png' alt=''/></div>
      </div>
    </section>
  )
}
