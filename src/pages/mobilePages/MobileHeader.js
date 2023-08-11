import React from 'react'
import { IoNotificationsOutline } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/Hi"
import { FaLock } from "react-icons/Fa"
import { FaUserPlus } from "react-icons/Fa"
import { HiOutlineHeart } from "react-icons/Hi"
import { FaUser } from "react-icons/Fa"

export default function MobileHeader() {
  return (
    <header>
      <p id='M_noticeIcon'><IoNotificationsOutline/></p>
      <h2 id='M_logo'>W</h2>
      <p id='M_shoppingListIcon'><HiOutlineShoppingCart/></p>
      <p id='M_menuIcon'><TbMenu2/></p>
      <nav id='M_menu_wrap'>
        <p id='M_backIcon'></p>
        <ul id='M_btnList'>
          <li><p className='btn_icon'><FaLock/></p><p className='btn_title'>Login</p></li>
          <li><p className='btn_icon'><FaUserPlus/></p><p className='btn_title'>Sign Up</p></li>
          <li><p className='btn_icon'><HiOutlineHeart/></p><p className='btn_title'>Interest</p></li>
          <li><p className='btn_icon'><FaUser/></p><p className='btn_title'>My Page</p></li>
        </ul>
        <p id='M_sectionBar'> </p>
        <ul id='M_menuWrap'>
          <li>Scotch Whisky<span><img src='./images/M_menu_list.svg'/></span>
          <ul className='M_subMenuWrap'>
            <li>sub1</li>
          </ul>
          </li>
          <li>Whisky<span><img src='./images/M_menu_list.svg'/></span>
          <ul className='M_subMenuWrap'>
            <li>sub1</li>
            <li>sub2</li>
            <li>sub3</li>
          </ul>
          </li>
          <li>Etc Beverage<span><img src='./images/M_menu_list.svg'/></span>
          <ul className='M_subMenuWrap'>
            <li>sub1</li>
          </ul>
          </li>
          <li>Whisky Search<span><img src='./images/M_menu_list.svg'/></span></li>
        </ul>
      </nav>
    </header>
  )
}
