import React, { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './css/header.module.css'
import { AiFillCaretDown } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { gsap } from 'gsap';
import { login, logout } from '../api/firebase';
import { useAuthContext } from '../context/authContext';
export default function Header() {
  const mainMenus = [
    { index: 0, path: '/scotchwhisky', text: 'Scotch Whisky' },
    { index: 1, path: '/whisky', text: 'Whisky' },
    { index: 2, path: '/etcbeverage', text: 'Etc Beverage' },
    { index: 3, path: '/whiskysearch', text: 'Whisky Search' }
  ]
  const [clickIndex, setClickIndex] = useState([])

  const { user } = useAuthContext()

  return (
    <header>
      <div id={style.header}>
        <div id={style.logo_wrap}>
          <h1 className={style.logo}><Link to='/'>W</Link></h1>
        </div>
        <p className={style.block}></p>
        <nav id={style.mainmenu} onMouseLeave={() => { setClickIndex(null) }}>
          <h2 className='hidden'>메인메뉴</h2>
          <ul id={style.mainmenu_list}>
            {
              mainMenus.map((item) => (
                <li key={item.index} className={`${item.index === clickIndex && style.selected}`}
                  onMouseEnter={() => {
                    setClickIndex(item.index)
                  }}>
                  <Link to={item.path} >

                    <span> </span>

                    {item.text}</Link></li>
              ))
            }
            {/* <li><Link to='/scotchwhisky'><p className={style.selected}> </p>Scotch Whisky</Link></li>
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
          {
            user ?
              <p id={style.login} onClick={logout}><FaLock />Logout</p>
              :
              <p id={style.login} onClick={login}><FaLock />Login</p>
          }
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
