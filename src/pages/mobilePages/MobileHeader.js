import React, { useRef } from 'react';
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import style from './css/mobileHeader.module.css'
import { gsap } from 'gsap';

export default function MobileHeader() {
  const M_menu_wrap=useRef()

  const activateMenu = ()=>{
    gsap.to()
  }
  return (
    <header id={style.M_header}>
      <h2 id={style.M_logo}>W</h2>
      <p id={style.M_menuIcon} onClick={activateMenu}><TbMenu2 /></p>
      <p id={style.M_shoppingListIcon}><HiOutlineShoppingCart /></p>
      <nav id={style.M_menu_wrap}>
        <div id={style.M_info_wrap}>
        <p id={style.back_icon}><MdArrowBack /></p>
        <ul id={style.M_btnList}>
          <li><p className={style.btn_icon}><FaLock /></p><p className={style.btn_title}>Login</p></li>
          <li><p className={style.btn_icon}><FaUserPlus /></p><p className={style.btn_title}>Sign Up</p></li>
          <li><p className={style.btn_icon}><HiOutlineHeart /></p><p className={style.btn_title}>Interest</p></li>
          <li><p className={style.btn_icon}><FaUser /></p><p className={style.btn_title}>My Page</p></li>
        </ul>
        </div>
        <ul id={style.M_menu_wrap}>
          <li>Scotch Whisky<span className={style.M_arrowIcon}><img src='./images/M_menu_list.svg' /></span>
            <ul className='M_subMenuWrap'>
              <li>sub1</li>
            </ul>
          </li>
          <li>Whisky<span className={style.M_arrowIcon}><img src='./images/M_menu_list.svg' /></span>
            <ul className='M_subMenuWrap'>
              <li>sub1</li>
              <li>sub2</li>
              <li>sub3</li>
            </ul>
          </li>
          <li>Etc Beverage<span className={style.M_arrowIcon}><img src='./images/M_menu_list.svg' /></span>
            <ul className='M_subMenuWrap'>
              <li>sub1</li>
            </ul>
          </li>
          <li>Whisky Search<span className={style.M_arrowIcon}><img src='./images/M_menu_list.svg' /></span></li>
        </ul>
      </nav>
    </header>
  )
}
