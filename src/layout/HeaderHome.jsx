import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
const HeaderHome = () => {
  return (
    <>
        <Header></Header>
        <div className="">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  )
}

export default HeaderHome