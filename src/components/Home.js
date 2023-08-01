import React from 'react'
import MainVisual from './Home/MainVisual'
import style from './Home/css/Hom.module.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Home/Main';
import MainSelectedPage from './Home/MainSelectedPage';

export default function Home() {
  return (
    <div id={style.home_wrap}>
      <MainVisual />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/selectedPage' element={<MainSelectedPage />} />
      </Routes>
    </div>
  )
}
