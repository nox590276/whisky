import React from 'react'
import MobileHeader from './MobileHeader'
import style from './css/mobileApp.module.css'
import { Outlet } from 'react-router-dom'

export default function MobileRoot() {
  return (
    <div id={style.mobileWrap}>  
      <MobileHeader/>
      <Outlet/>
    </div>
  )
}
