import React, { useEffect, useState } from 'react'
import style from './css/productDetail.module.css'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
// import useProducts from '../Hooks/useProducts';
import { getProductDetail } from '../api/firebase';

export default function ProductDetail() {
  const { productId } = useParams()
  // const [allProducts] = useProducts()
  const [productItem, setProductItem] = useState([])

  useEffect(() => {
    // const productItem = allProducts.filter((item) => (item.id === productId))
    // setProductItem(productItem)
    getProductDetail(productId).then((res) => (
      setProductItem(res)
    ))
  }, [productId])
  return (
    <>
      {productItem.map((item) => (
        <div id={style.productDetail_wrap}>
          <section id={style.productDetail}>
            <div id={style.productDetail_imgBox}>
              <p id={style.productDetail_img}>
                <img src={item.image} alt={item.name} />
              </p>
            </div>
            <p id={style.detail_section_bar}></p>
            <div id={style.productDetail_infoBox_wrap}>
              <div id={style.productDetail_infoBox}>
                <div id={style.product_title}>
                  <p id={style.productD_name}>{item.name}</p>
                  <p id={style.productD_type}>{item.type}</p>
                </div>
                <p id={style.alcohol_level}>20cl</p>
                <div id={style.productDetail_pricetitle}>
                  <p id={style.price}>${item.price}</p>
                  <p id={style.score}>
                    {Array.from({ length: item.score }).map((_, index) => <FaStar key={index} />)}
                  </p>
                </div>
                <p id={style.info_bar}></p>
                <p id={style.detail_text}>
                  A 20cl bottle of Famous Grouse's immensely popular blended Scotch Whisky. <br />
                  First released in 1860, as of the 2010s, it has been Scotland's most popular <br />
                  Scotch for 30 years.
                </p>
                <div id={style.danger_box}>
                  <p id={style.danger_text}><FaRegHandPaper />You must be aged 18 or above to buy alcohol in the UK</p>
                  <p id={style.num}>1 &nbsp; <FaAngleDown /></p>
                  <button id={style.addToCart}>ADD TO CART</button>
                </div>
              </div>
            </div>

          </section>
        </div>
      ))
      }
    </>
  )
}