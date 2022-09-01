import React from 'react'
import Item from './common/Item'
import SectionTItle from './common/SectionTItle'

function FeaturedProducts() {

  const featuredproductsSection = {
    title: "Featured Products",
    info : "The purpose of lorem ipsum"
  } 

  return (
    <div><section className="section-padding">
    <div className="container">
        <SectionTItle section = {featuredproductsSection}/>
        <div className="product-thumbs">
            <Item/>
        </div>
    </div>
    </section></div>
  )
}

export default FeaturedProducts