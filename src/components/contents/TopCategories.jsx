import React from 'react'
import SectionTItle from './common/SectionTItle'

function TopCategories() {

    const topcategoriesSection = {
        title: "Top Categories",
        info : "Select Your Favorite Brands And Purchase"
    }

    const topcategories = [{
        id : 1,
        img : "assets/images/categories/01.webp",
        category : "Kurtas",
        qty : 856
    },
    {
        id : 2,
        img : "assets/images/categories/02.webp",
        category : "Heels",
        qty : 169
    },
    {
        id : 3,
        img : "assets/images/categories/03.webp",
        category : "Lehenga",
        qty : 589
    }
    ]


  return (
    <div>
        <section className="cartegory-slider section-padding bg-section-2">
            <div className="container">
                <SectionTItle section = {topcategoriesSection}/>
                <div className="cartegory-box">
                    {
                        topcategories.map(categories =>(
                            <a href="shop-grid-type-4.html">
                                <div key = {categories.id} className="card">
                                    <div className="card-body">
                                        <div className="overflow-hidden">
                                            <img src={categories.img} className="card-img-top rounded-0" alt="..."/>
                                        </div>
                                        <div className="text-center">
                                            <h5 className="mb-1 cartegory-name mt-3 fw-bold">{categories.category}</h5>
                                            <h6 className="mb-0 product-number fw-bold">{categories.qty} Products</h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default TopCategories