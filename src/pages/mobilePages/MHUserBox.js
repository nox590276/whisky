import React from 'react'
import style from './css/MH_userBox.module.css'
import { useAuthContext } from '../../context/authContext'

export default function MH_userBox() {

  const { user } = useAuthContext()
  console.log('user',user)
  return (
    <section id={style.M_userBox_wrap}>
      <div id={style.M_userBox}>
        {
          user ?
            <>
              <p id={style.userImg}><img src={user.photoURL} alt=''/></p>
              <p id={style.userName}>Hello,{user.displayName}!</p>
            </>
            :
            <>
              <p id={style.userImg}></p>
              <p id={style.userName}>Login is required</p>
            </>
        }
        <p id={style.welcomeText}>
          Find your favorites whisky
        </p>
      </div>
    </section>
  )
}
