import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import style from './css/footer.module.css'

export default function Footer() {
  return (
    <footer id={style.footer_wrap}>
      <div id={style.footer_contents}>
        <p id={style.footer_logo}>Whisky Marketplace</p>
        <p id={style.sns_icon}><FaFacebook/> <FaInstagramSquare /> <FaTwitter/> <FaYoutube/></p>
      </div>
    </footer>
  )
}
