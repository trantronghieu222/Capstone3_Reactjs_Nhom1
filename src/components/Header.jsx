import { isAction } from '@reduxjs/toolkit'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <header>
                <div className="header__top">
                    <nav className="navbar navbar-expand-sm">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src="./images/image3.png" alt="" /></a>
                            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="search"><i class="fa fa-search"></i> Search</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">🛒(1)</a>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({isActive}) => 
                                        isActive ? 'nav-link active' : 'nav-link'} to="userInfor"><i class="fa fa-user"></i></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="login">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({isActive}) => 
                                        isActive ? 'nav-link active' : 'nav-link'} to="register">Register</NavLink>
                                    </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="header__bottom">
                    <nav className="navbar navbar-expand">
                        <div className="container-fluid">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Men</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Woman</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Kid</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sport</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>     
    )
}

export default Header