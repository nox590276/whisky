import React from 'react'
import MobileHeader from './MobileHeader'
import MobileHome from './MobileHome'
import style from './css/mobileApp.module.css'
import MH_selectedWhisky from './MH_selectedWhisky'
// import { Outlet } from 'react-router-dom'
import MobileWhiskySearch from './MobileWhiskySearch'
import { Outlet } from 'react-router-dom'

export default function MobileRoot() {
  return (
    <div id={style.mobileWrap}>  
      <MobileHeader/>
      <Outlet/>
    </div>
  )
}
