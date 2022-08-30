import React from 'react'
import Cart from './Cart';
import Brand from './contents/Brand';
import FeaturedProducts from './contents/FeaturedProducts';
import LatestBlog from './contents/LatestBlog';
import LatestProduct from './contents/LatestProduct';
import NewFeatures from './contents/NewFeatures';
import OfferService from './contents/OfferService';
import Subscribe from './contents/Subscribe';
import TopCategories from './contents/TopCategories';
import ProductClickModal from './ProductClickModal';

function Home() {
  return (
    <div>

        --여기부터 start page content
        <div className="page-content">

        --여기부터 start carousel
        <section className="slider-section">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
            aria-current="true"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active bg-primary">
            <div className="row d-flex align-items-center">
                <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                    <h3 className="h3 fw-light text-white fw-bold">New Arrival</h3>
                    <h1 className="h1 text-white fw-bold">Women Fashion</h1>
                    <p className="text-white fw-bold"><i>Last call for upto 25%</i></p>
                    <div className=""><a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                    </div>
                </div>
                </div>
                <div className="col">
                <img src="assets/images/sliders/s_1.webp" className="img-fluid" alt="..."/>
                </div>
            </div>
            </div>
            <div className="carousel-item bg-red">
            <div className="row d-flex align-items-center">
                <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                    <h3 className="h3 fw-light text-white fw-bold">Latest Trending</h3>
                    <h1 className="h1 text-white fw-bold">Fashion Wear</h1>
                    <p className="text-white fw-bold"><i>Last call for upto 35%</i></p>
                    <div className=""> <a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                    </div>
                </div>
                </div>
                <div className="col">
                <img src="assets/images/sliders/s_2.webp" className="img-fluid" alt="..."/>
                </div>
            </div>
            </div>
            <div className="carousel-item bg-purple">
            <div className="row d-flex align-items-center">
                <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                    <h3 className="h3 fw-light text-white fw-bold">New Trending</h3>
                    <h1 className="h1 text-white fw-bold">Kids Fashion</h1>
                    <p className="text-white fw-bold"><i>Last call for upto 15%</i></p>
                    <div className=""><a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                    </div>
                </div>
                </div>
                <div className="col">
                <img src="assets/images/sliders/s_3.webp" className="img-fluid" alt="..."/>
                </div>
            </div>
            </div>
            <div className="carousel-item bg-yellow">
            <div className="row d-flex align-items-center">
                <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                    <h3 className="h3 fw-light text-dark fw-bold">Latest Trending</h3>
                    <h1 className="h1 text-dark fw-bold">Electronics Items</h1>
                    <p className="text-dark fw-bold"><i>Last call for upto 45%</i></p>
                    <div className=""><a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                    </div>
                </div>
                </div>
                <div className="col">
                <img src="assets/images/sliders/s_4.webp" className="img-fluid" alt="..."/>
                </div>
            </div>
            </div>
            <div className="carousel-item bg-green">
            <div className="row d-flex align-items-center">
                <div className="col d-none d-lg-flex justify-content-center">
                <div className="">
                    <h3 className="h3 fw-light text-white fw-bold">Super Deals</h3>
                    <h1 className="h1 text-white fw-bold">Home Furniture</h1>
                    <p className="text-white fw-bold"><i>Last call for upto 24%</i></p>
                    <div className=""><a className="btn btn-dark btn-ecomm" href="shop-grid.html">Shop Now</a>
                    </div>
                </div>
                </div>
                <div className="col">
                <img src="assets/images/sliders/s_5.webp" className="img-fluid" alt="..."/>
                </div>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </section>
        --여기까지 end carousel

        <FeaturedProducts/>

        <LatestProduct/>

        <OfferService/>

        <NewFeatures/>

        <Brand/>


        <TopCategories/>


        <Subscribe/>


        <LatestBlog/>


        </div>
        --여기까지 end page content


        <Cart/>

        <ProductClickModal/>


        --Start Back To Top Button
        <a href="javaScript:;" className="back-to-top"><i className="bi bi-arrow-up"></i></a>
        --End Back To Top Button

    </div>
  )
}

export default Home;