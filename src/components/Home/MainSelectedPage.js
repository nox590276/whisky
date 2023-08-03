import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import style from './css/MainSelectedPage.module.css'
import SelectedWhisky from './SelectWhisky'
import Main from './Main';
import axios from 'axios'

export default function MainSelectedPage() {
  // const [allProducts, setallProducts] = useState([])
  // useEffect(() => {
  //   axios.get('data/Product.json').then((res) => {
  //     setallProducts(res.data)
  //   })
  // }, [])
  const [filteredProducts, setFilteredProuducts] = useState([]);
  const [isAnyChechboxChaecked, setIsAnyCheckboxChecked] = useState(false);

  useEffect(() => {
    setIsAnyCheckboxChecked(filteredProducts.length > 0);
  }, [filteredProducts])



  return (
    <section id={style.mainSelectedPage_wrap}>
      <SelectedWhisky setFilteredProuducts={setFilteredProuducts} />
      {!isAnyChechboxChaecked? (
        <Main />
      )
        : (
          <ul id={style.selectedGoods_list}>
            {
              filteredProducts.map((item) => (
                <li key={item.id}>
                  <Link>
                    <p className={style.selectedGoods_img}><img src={item.image} alt={item.name} /></p>
                    <div className={style.selectedGoods_infobox}>
                      <p className={style.selectedGoods_name}>{item.name}</p>
                      <p className={style.selectedGoods_type}>{item.type}</p>
                      <div className={style.selectedGoods_scorebox}>
                        <p className={style.selectedGoods_score}>{item.score.map((score)=>(
                          <FaStar key={score}/>
                        ))}</p>
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
