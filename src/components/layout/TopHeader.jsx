import React from 'react'
import { Link } from 'react-router-dom'
import MenuNav from '../contents/MenuNav'

function TopHeader() {
  return (
    <header className="top-header">
        <nav className="navbar navbar-expand-xl w-100 navbar-dark container gap-3">
            <Link className="navbar-brand d-none d-xl-inline"to="index.html"><img src="assets/images/logo.webp" className="logo-img" alt=""/></Link>
            <Link className="mobile-menu-btn d-inline d-xl-none"to="#" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar">
                <i className="bi bi-list"></i>
            </Link>
            <MenuNav/>
            <ul className="navbar-nav secondary-menu flex-row">
                <li className="nav-item">
                    <Link className="nav-link dark-mode-icon"to="#">
                        <div className="mode-icon">
                            <i className="bi bi-moon"></i>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"to="search.html"><i className="bi bi-search"></i></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"to="wishlist.html"><i className="bi bi-suit-heart"></i></Link>
                </li>
                <li className="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                    <Link className="nav-link position-relative"to="#">
                        <div className="cart-badge">8</div>
                        <i className="bi bi-basket2"></i>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"to="account-dashboard.html"><i className="bi bi-person-circle"></i></Link>
                </li>
            </ul>
            </nav>
        </header>
  )
}

export default TopHeader