import React from 'react'
import MobileHeader from './MobileHeader'
import MobileHome from './MobileHome'
import style from './css/mobileApp.module.css'
import MH_selectedWhisky from './MH_selectedWhisky'

export default function MobileRoot() {
  return (
    <div id={style.mobileWrap}>
      <MobileHeader/>
      <MobileHome/>
      <MH_selectedWhisky/>
    </div>
  )
}
