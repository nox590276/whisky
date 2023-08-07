import React from 'react'
import { Link } from 'react-router-dom'
import style from './css/header.module.css'
import { AiFillCaretDown } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
export default function Header() {
  const mainMenus = [
    { index: 0, path: '/scotchwhisky', text: 'Scotch Whisky' },
    { index: 1, path: '/whisky', text: 'Whisky' },
    { index: 2, path: '/etcbeverage', text: 'Etc Beverage' },
    { index: 3, path: '/whiskysearch', text: 'Whisky Search' }
  ]
  return (
    <header>
      <div id={style.header}>
        <div id={style.logo_wrap}>
          <h1 className={style.logo}><Link to='/'>W</Link></h1>
        </div>
        <p className={style.block}></p>
        <nav id={style.mainmenu}>
          <h2 className='hidden'>메인메뉴</h2>
          <ul id={style.mainmenu_list}>
            {
              mainMenus.map((item) => (
                <li><Link key={item.index} to={item.path}>{item.text}</Link></li>
              ))
            }
            {/* <li><Link to='/scotchwhisky'>Scotch Whisky</Link></li>
            <li><Link to='/whisky'>Whisky</Link></li>
            <li><Link to='/etcbeverage'>Etc Beverage</Link></li>
            <li><Link to='/whiskysearch'>Whisky Search</Link></li> */}
          </ul>
        </nav>
        <p className={style.block}></p>
        <div id={style.language_wrap}>
          <p id={style.language}>EN<AiFillCaretDown /></p>
        </div>
        <p className={style.block}></p>
        <div id={style.login_wrap}>
          <p id={style.login}><FaLock />Login</p>
        </div>
        <p className={style.block}></p>
        <div id={style.shoppingBasket_wrap}>
          <p id={style.shoppingBasket}><FaShoppingBag />$300</p>
        </div>
      </div>
      <p id={style.header_section_bar}></p>
    </header>
  )
}
