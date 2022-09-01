import React from 'react'
import SectionTItle from './common/SectionTItle'
import { Link } from 'react-router-dom'

function Brand() {
    
    const brandSection = {
        title: "Shop By Brands",
        info : "Select Your Favorite Brands And Purchase"
    }

    const brandImg = ["assets/images/brands/01.webp", "assets/images/brands/02.webp", "assets/images/brands/03.webp"]

  return (
    <div>
        <section className="section-padding">
            <div className="container">
                <SectionTItle section = {brandSection}/>
                <div className="brands">
                    <div className="row row-cols-2 row-cols-lg-5 g-4">
                        {
                            brandImg.map((brand,i) =>(
                                <div key = {i} className="col">
                                    <div className="p-3 border rounded brand-box">
                                        <div className="d-flex align-items-center">
                                            <Link to = "#">
                                            <img src={brand}className="img-fluid" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Brand