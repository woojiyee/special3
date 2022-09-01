import React from 'react'

function TopCarousel() {

    const carousel = [
        {
            id : 1,
            classname : "carousel-item active bg-primary",
            text1 : "New Arrival",
            text2 : "Women Fashion",
            text3 : "Last call for upto 25%",
            text4 : "Shop Now",
            img : "assets/images/sliders/s_1.webp"
    
        },
        {
            id : 2,
            classname : "carousel-item bg-purple",
            text1 : "Latest Trending",
            text2 : "Fashion Wear",
            text3 : "Last call for upto 35%",
            text4 : "Shop Now",
            img : "assets/images/sliders/s_2.webp"
    
        }
    ]
    return (
        <div>
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
                        {
                            carousel.map(carousel => (
                                <div className= {carousel.classname} key = {carousel.id}>
                                    <div className="row d-flex align-items-center">
                                        <div className="col d-none d-lg-flex justify-content-center">
                                            <div className="">
                                                <h3 className="h3 fw-light text-white fw-bold">{carousel.text1}</h3>
                                                <h1 className="h1 text-white fw-bold">{carousel.text2}</h1>
                                                <p className="text-white fw-bold"><i>{carousel.text3}</i></p>
                                                <div className=""><a className="btn btn-dark btn-ecomm" href="shop-grid.html">{carousel.text4}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <img src={carousel.img} className="img-fluid" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }    
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
        </div>
    )
}

export default TopCarousel
