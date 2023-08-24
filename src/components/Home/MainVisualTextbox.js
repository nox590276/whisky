import React from 'react'
import style from './css/MainVisual_textbox.module.css'

export default function MainVisual_textbox() {
  return (
    <div>

        <div id={style.mainVisual_textBox_wrap}>
          <section id={style.mainVisual_textBox}>
            <p id={style.mainVisual_main_text}>
              Unravel the mysteries of hidden whiskies, one glass at  a  time
            </p>
            <p id={style.mainVisaul_text}>
              Welcome to our whisky sanctuary, a haven where connoisseurs and enthusiasts unite to celebrate the artistry of this exquisite spirit. Immerse yourself in a world of rare
              expressions, curated selections, and unparalleled knowledge, as we guide you on an extraordinary journey through the depths of whisky's history, flavors, and traditions
            </p>
          </section>
          <button id={style.mainVisual_viewMore}>View More</button>
        </div>

        <p id={style.section_Bar}></p>

        <div id={style.lifeQuotes_box_wrap}>
          <section id={style.lifeQuotes_box}>
            <p id={style.personImg}>
              <img src='./images/Raymond Chandler(American novelist).png' alt='Raymond Chandler(American novelist)' />
            </p>
            <p id={style.lifeQuotes_textbox}>
              <span id={style.lifeQuotes}>
                "There is no such thing as a bad whisky. Some whiskies are just better than others."
              </span>
              <span id={style.lifeQuotes_name}>
                Raymond Chandler(American novelist)
              </span>
            </p>
            <button id={style.readMore}>Read more</button>
          </section>
        </div>

      
      <p id={style.section_rightBar}></p>
    </div>
  )
}
