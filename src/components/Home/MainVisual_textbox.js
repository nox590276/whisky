import React from 'react'

export default function MainVisual_textbox() {
  return (
    <div>
      <div id='mainVisual_left_wrap'>

        <div id='mainVisual_textBox_wrap'>
          <section id='mainVisual_textBox'>
            <p id='mainVisual_main_text'>
              Unravel the mysteries of hidden whiskies, one glass at  a  time
            </p>
            <p id='mainVisual_text'>
              Welcome to our whisky sanctuary, a haven where connoisseurs and enthusiasts unite to celebrate the artistry of this exquisite spirit. Immerse yourself in a world of rare
              expressions, curated selections, and unparalleled knowledge, as we guide you on an extraordinary journey through the depths of whisky's history, flavors, and traditions
            </p>
            <button id='mainVisual_viewMore'>View More</button>
          </section>
        </div>

        <div id='lifeQuotes_box_wrap'>
          <section id='lifeQuotes_box'>
            <p id='personImg'>
              <img src='#' alt='Raymond Chandler(American novelist)' />
            </p>
            <p id='lifeQuotes_textbox'>
              <span id='lifeQuotes'>
                "There is no such thing as a bad whisky. Some whiskies are just better than others."
              </span>
              <span id='lifeQuotes_name'>
                Raymond Chandler(American novelist)
              </span>
            </p>
            <button id='readMore'></button>
          </section>
        </div>

      </div>
      
    </div>
  )
}
