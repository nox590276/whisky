import React from 'react'

export default function MainVisual_whisky_box() {
  return (
    <div>
      <div id='mainVisual_right_wrap'>
        <section id='mainVisual_img_box'>
          <ul id=' mainVisual_img_list'>
            <li>
              <p className='mainVisual_whisky_Img'><img src='' alt='BALVENIE'/></p>
              <p className='mainVisual_whisky_name'>BALVENIE</p>
              <p className='mainVisual_whisky_section_bar'></p>
              <p className='etc_text_box'>
                <span className='price'>€123</span>
                <button className='mainVisual_whisky_add'>+</button>
              </p>
            </li>
          </ul>
        </section>
      </div>
      
    </div>
  )
}
