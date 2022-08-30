import React from 'react'
import SectionTItle from './common/SectionTItle'

function TopCategories() {
  return (
    <div>
        <section className="cartegory-slider section-padding bg-section-2">
        <div className="container">
            <SectionTItle/>
        <div className="cartegory-box">
            <a href="shop-grid-type-4.html">
            <div className="card">
                <div className="card-body">
                <div className="overflow-hidden">
                    <img src="assets/images/categories/01.webp" className="card-img-top rounded-0" alt="..."/>
                </div>
                <div className="text-center">
                    <h5 className="mb-1 cartegory-name mt-3 fw-bold">Kurtas</h5>
                    <h6 className="mb-0 product-number fw-bold">856 Products</h6>
                </div>
                </div>
            </div>
            </a>
            <a href="shop-grid-type-4.html">
            <div className="card">
                <div className="card-body">
                <div className="overflow-hidden">
                    <img src="assets/images/categories/02.webp" className="card-img-top rounded-0" alt="..."/>
                </div>
                <div className="text-center">
                    <h5 className="mb-1 cartegory-name mt-3 fw-bold">Heels</h5>
                    <h6 className="mb-0 product-number fw-bold">169 Products</h6>
                </div>
                </div>
            </div>
            </a>
            <a href="shop-grid-type-4.html">
            <div className="card">
                <div className="card-body">
                <div className="overflow-hidden">
                    <img src="assets/images/categories/03.webp" className="card-img-top rounded-0" alt="..."/>
                </div>
                <div className="text-center">
                    <h5 className="mb-1 cartegory-name mt-3 fw-bold">Lehenga</h5>
                    <h6 className="mb-0 product-number fw-bold">589 Products</h6>
                </div>
                </div>
            </div>
            </a>
            <a href="shop-grid-type-4.html">
            <div className="card">
                <div className="card-body">
                <div className="overflow-hidden">
                    <img src="assets/images/categories/04.webp" className="card-img-top rounded-0" alt="..."/>
                </div>
                <div className="text-center">
                    <h5 className="mb-1 cartegory-name mt-3 fw-bold">Plazzos</h5>
                    <h6 className="mb-0 product-number fw-bold">278 Products</h6>
                </div>
                </div>
            </div>
            </a>
            <a href="shop-grid-type-4.html">
            <div className="card">
                <div className="card-body">
                <div className="overflow-hidden">
                    <img src="assets/images/categories/05.webp" className="card-img-top rounded-0" alt="..."/>
                </div>
                <div className="text-center">
                    <h5 className="mb-1 cartegory-name mt-3 fw-bold">Makeup</h5>
                    <h6 className="mb-0 product-number fw-bold">985 Products</h6>
                </div>
                </div>
            </div>
            </a>
            <a href="shop-grid-type-4.html">
            <div className="card">
                <div className="card-body">
                <div className="overflow-hidden">
                    <img src="assets/images/categories/06.webp" className="card-img-top rounded-0" alt="..."/>
                </div>
                <div className="text-center">
                    <h5 className="mb-1 cartegory-name mt-3 fw-bold">Shoes</h5>
                    <h6 className="mb-0 product-number fw-bold">489 Products</h6>
                </div>
                </div>
            </div>
            </a>

        </div>
        </div>
        </section>
    </div>
  )
}

export default TopCategories