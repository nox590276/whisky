import React, { useRef } from 'react'
import style from './css/MainVisual_whiskybox.module.css'
import { gsap } from 'gsap'

export default function MainVisual_whisky_box() {
  const nextBtn= useRef()
  const mainVisual_list= useRef()
  const mainVisual_box = useRef()
  // let currentPosition = mainVisual_list.client
  
  const slideGoods= ()=>{
    gsap.to(mainVisual_box.current,{overflow:'hidden'})
    gsap.to(mainVisual_list.current,{left:-72.2+'%',duration:0.5 ,ease:'power1.out'})
  }
  const activateBtn=()=>{
    gsap.to(nextBtn.current,{backgroundColor:'#F1C376', duration:0.3, ease:'power1.out'})
  }
  const nonactivateBtn=()=>{
    gsap.to(nextBtn.current,{backgroundColor:'#F7E6C4', duration:0.3 , ease:'power1.out'})
  }
  return (
    <div>
      <section id={style.mainVisual_img_box} ref={mainVisual_box}>
        <ul id={style.mainVisual_img_list} ref={mainVisual_list}>
          <li>
            <p className={style.mainVisual_whisky_img} ><img src='./images/Balvenie 1.png' alt='BALVENIE' /></p>
            <div className={style.mainVisual_whisky_pricebox}>
              <p className={style.mainVisual_whisky_name}>BALVENIE</p>
              <p className={style.mainVisual_whisky_section_bar}> </p>
              <p className={style.etc_text_box}>
                <span className={style.price}>€123</span>
                <button className={style.mainVisual_whisky_add}>+</button>
              </p>
            </div>
          </li>
          <li>
            <p className={style.mainVisual_whisky_img}><img src='./images/main_blueLabel_full.png' alt='BLUELABEL' /></p>
            <div className={style.mainVisual_whisky_pricebox}>
              <p className={style.mainVisual_whisky_name}>BLUELABEL</p>
              <p className={style.mainVisual_whisky_section_bar}></p>
              <p className={style.etc_text_box}>
                <span className={style.price}>€123</span>
                <button className={style.mainVisual_whisky_add}>+</button>
              </p>
            </div>
          </li>
        </ul>
        <p id={style.mainVisual_imgbar}></p>
        <button id={style.mainVisual_ImgNext} ref={nextBtn} onClick={slideGoods} onMouseLeave={nonactivateBtn} onMouseEnter={activateBtn}>Next</button>
      </section>

    </div>
  )
}
