import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import style from './css/MainSelectedPage.module.css'
import SelectedWhisky from './SelectWhisky'
import Main from './Main';
import axios from 'axios'

export default function MainSelectedPage() {

  const [filteredProducts, setFilteredProuducts] = useState([]);
  const [isAnyChechboxChaecked, setIsAnyCheckboxChecked] = useState(false);

  useEffect(() => {
    setIsAnyCheckboxChecked(filteredProducts.length > 0);
  }, [filteredProducts])

  const navigate=useNavigate()

  return (
    <section id={style.mainSelectedPage_wrap}>
      <SelectedWhisky setFilteredProuducts={setFilteredProuducts} />
      {!isAnyChechboxChaecked ? (
        <Main />
      )
        : (
          <ul id={style.selectedGoods_list}>
            {
              filteredProducts.map((item) => (
                <li key={item.id} onClick={()=>{
                  navigate( `/whisky/${item.id}`)
                }}>
                  <Link>
                    <p className={style.selectedGoods_img}><img src={item.image} alt={item.name} /></p>
                    <div className={style.selectedGoods_infobox}>
                      <p className={style.selectedGoods_name}>{item.name}</p>
                      <p className={style.selectedGoods_type}>{item.type}</p>
                      <div className={style.selectedGoods_scorebox}>
                        <p className={style.selectedGoods_score}>
                          {
                            Array.from({ length: item.score }).map((_, index) => <FaStar key={index} />)
                          }
                        </p>
                        <p className={style.selectedGoods_price}>${item.price}</p>
                      </div>
                      <div className={style.selectedGoods_buttonbox}>
                        <p className={style.selectedGoods_more}>More</p>
                        <p className={style.selectedGoods_goToCart}>ADD TO CART</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            }

          </ul>
        )}
    </section>
  )
}
