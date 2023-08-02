import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import style from './css/MainSelectedPage.module.css'

export default function MainSelectedPage() {
  return (
    <section id={style.mainSelectedPage_wrap}>
      <ul id={style.selectedGoods_list}>
        <li>
          <Link>
            <p className={style.selectedGoods_img}><img src='./images/FamousGrouse.jpeg' alt='FamousGrouse' /></p>
            <div className={style.selectedGoods_infobox}>
              <p className={style.selectedGoods_name}>Famous Grouse</p>
              <p className={style.selectedGoods_type}>Whisky</p>
              <div className={style.selectedGoods_scorebox}>
                <p className={style.selectedGoods_score}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                <p className={style.selectedGoods_price}>$8.86</p>
              </div>
              <div className={style.selectedGoods_buttonbox}>
                <p className={style.selectedGoods_more}>More</p>
                <p className={style.selectedGoods_goToCart}>ADD TO CART</p>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <p className={style.selectedGoods_img}><img src='./images/Jack Daniels.png' alt='FamousGrouse' /></p>
            <div className={style.selectedGoods_infobox}>
              <p className={style.selectedGoods_name}>Famous Grouse</p>
              <p className={style.selectedGoods_type}>Whisky</p>
              <div className={style.selectedGoods_scorebox}>
                <p className={style.selectedGoods_score}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                <p className={style.selectedGoods_price}>$8.86</p>
              </div>
              <div className={style.selectedGoods_buttonbox}>
                <p className={style.selectedGoods_more}>More</p>
                <p className={style.selectedGoods_goToCart}>ADD TO CART</p>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <p className={style.selectedGoods_img}><img src='./images/Three Barrels Rare Old French Brandy.png' alt='FamousGrouse' /></p>
            <div className={style.selectedGoods_infobox}>
              <p className={style.selectedGoods_name}>Famous Grouse</p>
              <p className={style.selectedGoods_type}>Whisky</p>
              <div className={style.selectedGoods_scorebox}>
                <p className={style.selectedGoods_score}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                <p className={style.selectedGoods_price}>$8.86</p>
              </div>
              <div className={style.selectedGoods_buttonbox}>
                <p className={style.selectedGoods_more}>More</p>
                <p className={style.selectedGoods_goToCart}>ADD TO CART</p>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link>
            <p className={style.selectedGoods_img}><img src='./images/Absolut Vodka.png' alt='FamousGrouse' /></p>
            <div className={style.selectedGoods_infobox}>
              <p className={style.selectedGoods_name}>Famous Grouse</p>
              <p className={style.selectedGoods_type}>Bodka</p>
              <div className={style.selectedGoods_scorebox}>
                <p className={style.selectedGoods_score}><FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                <p className={style.selectedGoods_price}>$8.86</p>
              </div>
              <div className={style.selectedGoods_buttonbox}>
                <p className={style.selectedGoods_more}>More</p>
                <p className={style.selectedGoods_goToCart}>ADD TO CART</p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  )
}
