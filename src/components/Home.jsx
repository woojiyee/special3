import React from 'react'
import Cart from './Cart';
import Brand from './contents/Brand';
import FeaturedProducts from './contents/FeaturedProducts';
import LatestBlog from './contents/LatestBlog';
import LatestProduct from './contents/LatestProduct';
import NewFeatures from './contents/NewFeatures';
import OfferService from './contents/OfferService';
import Subscribe from './contents/Subscribe';
import TopCarousel from './contents/TopCarousel';
import TopCategories from './contents/TopCategories';
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>

        <div className="page-content">

            <TopCarousel/>

            <FeaturedProducts/>

            <LatestProduct/>

            <OfferService/>

            <NewFeatures/>

            <Brand/>

            <TopCategories/>

            <Subscribe/>

            <LatestBlog/>

        </div>
      

        <Cart/>


        <Link to="#" className="back-to-top"><i className="bi bi-arrow-up"></i></Link>
        

    </div>
  )
}

export default Home;