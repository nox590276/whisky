import React from 'react'
import MobileHeader from './MobileHeader'
import MobileHome from './MobileHome'
import style from './css/mobileApp.module.css'

export default function MobileRoot() {
  return (
    <div id={style.mobileWrap}>
      <MobileHeader/>
      <MobileHome/>
    </div>
  )
}
