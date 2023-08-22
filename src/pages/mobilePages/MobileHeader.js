import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TbMenu2 } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
// import { MdNotificationsNone } from "react-icons/md";
import styles from './css/mobileHeader.module.css'
import { gsap } from 'gsap';
// import { click } from '@testing-library/user-event/dist/click';
import { useAuthContext } from '../../context/authContext';
import { login, logout } from '../../api/firebase';
import { Link } from 'react-router-dom';

export default function MobileHeader() {
  const mainMenuList = [
    {
      index: 0, name: 'Scotch Whisky', pathName: '/scotchwhisky', subMenuList: [
        { index: 0, name: 'sub1', pathName: '/' }
      ]
    }, {
      index: 1, name: 'Whisky', pathName: '/whisky', subMenuList: [
        { index: 0, name: 'sub1', pathName: '/' },
        { index: 1, name: 'sub2', pathName: '/' },
        { index: 2, name: 'sub3', pathName: '/' }
      ]
    }, {
      index: 2, name: 'Etc Beverage', pathName: '/etcbeverage', subMenuList: [
        { index: 0, name: 'sub1', pathName: '/' },
        { index: 1, name: 'sub2', pathName: '/' }
      ]
    }, {
      index: 3, name: 'Whisky Search', pathName: '/whiskysearch', subMenuList: []
    }
  ]

  const M_menu_wrap = useRef()
  const backIcon = useRef()
  const menuIcon = useRef()

  let closeHeight = useMemo(() => (55));
  let openHeight = useMemo(() => (null));

  const [clickIndex, setClickIndex] = useState(null);

  useEffect(() => {
    M_menu_wrap.current.style.right = '-100vw';
    M_menu_wrap.current.style.display = 'none';
  }, [])

  const activateMenu = useCallback(() => {
    M_menu_wrap.current.style.display = 'block'
    gsap.to(M_menu_wrap.current, { right: 0, duration: 0.5, ease: 'power1.out' })
  }, [])
  const noneActivateMenu = useCallback(() => {
    gsap.to(M_menu_wrap.current, {
      right: -100 + 'vw', duration: 0.5, ease: 'power1.out', onComplete: () => {
        gsap.set(M_menu_wrap.current, { display: 'none' })
      }
    })
    setClickIndex(null)
  }, [])
  const toggleMenu = useCallback((index) => {
    if (index == clickIndex) {
      setClickIndex(null)
    } else {
      setClickIndex(index)
    }
  }, [clickIndex])

  const { user } = useAuthContext()

  return (
    <header id={styles.M_header}>
      <h2 id={styles.M_logo}><Link to='/whiskysearch' style={{ textDecoration: 'none', color: '#606C5D' }}>W</Link></h2>
      <p id={styles.M_menuIcon} ref={menuIcon} onClick={activateMenu}><TbMenu2 /></p>
      <p id={styles.M_shoppingListIcon}><HiOutlineShoppingCart /></p>
      <nav id={styles.M_menu_wrap} ref={M_menu_wrap}>
        <div id={styles.M_info_wrap}>
          <p id={styles.back_icon} ref={backIcon} onClick={noneActivateMenu}><MdArrowBack /></p>
          <ul id={styles.M_btnList}>
            {
              user ?
                <li><p className={styles.btn_icon}><FaUnlock /></p>
                  <p className={styles.btn_title} onClick={logout}>Logout</p></li>
                :
                <li><p className={styles.btn_icon}><FaLock /></p>
                  <p className={styles.btn_title} onClick={login}>Login</p></li>
            }
            <li><p className={styles.btn_icon}><FaUserPlus /></p><p className={styles.btn_title}>Sign Up</p></li>
            <li><p className={styles.btn_icon}><HiOutlineHeart /></p><p className={styles.btn_title}>Interest</p></li>
            <li><p className={styles.btn_icon}><FaUser /></p><p className={styles.btn_title}>My Page</p></li>
          </ul>
        </div>
        <ul id={styles.M_menu_wrap}>
          {mainMenuList.map((item) => (
            <li key={item.index} className={`${item.index === clickIndex && styles.selected}`}
              style={item.index === clickIndex ? { height: closeHeight + (closeHeight * item.subMenuList.length) } : { height: closeHeight }}
              onClick={() => {
                toggleMenu(item.index)
              }}>
              {
                item.subMenuList.length < 1 ?
                  <>
                    <Link to={item.pathName} style={{ textDecoration: 'none', color: 'black' }}>
                      {item.name}
                    </Link>
                  </>
                  :
                  <>
                    <Link to={item.pathName} style={{ textDecoration: 'none', color: 'black' }}>
                      {item.name}
                    </Link>

                    <span className={styles.M_arrowIcon}><img src='./images/M_menu_list.svg' alt='' /></span>
                    <ul className={styles.M_subMenuWrap}>
                      {
                        item.subMenuList.map((subItem) => (
                          <li key={subItem.index}>{subItem.name}</li>
                        ))
                      }
                    </ul>
                  </>
              }
            </li>
          ))}
          {/* <li>Scotch Whisky<span className={style.M_arrowIcon}><img src='./images/M_menu_list.svg' /></span>
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
              <li>sub2</li>
            </ul>
          </li>
          <li>Whisky Search<span className={style.M_arrowIcon}><img src='./images/M_menu_list.svg' /></span></li> */}
        </ul>
      </nav>
    </header>
  )
}
