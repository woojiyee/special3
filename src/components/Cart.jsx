import React from 'react'
import { Link } from 'react-router-dom'


function Cart() {

    const cart = [ {id:1, location: "assets/images/new-arrival/01.webp"}, {id:2, location:"assets/images/new-arrival/02.webp"}]
  return (
    <div>
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header bg-section-2">
                <h5 className="mb-0 fw-bold" id="offcanvasRightLabel">8 items in the cart</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="cart-list">

                    <div className="d-flex align-items-center gap-3">
                        <div className="bottom-product-img">
                            <a href="product-details.html">
                                <img src="assets/images/new-arrival/01.webp" width="60" alt=""/>
                            </a>
                        </div>
                        <div className="">
                            <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                            <p className="mb-0"><strong>1 X $59.00</strong>
                            </p>
                        </div>
                        <div className="ms-auto fs-5">
                            <Link to="#" className="link-dark"><i className="bi bi-trash"></i></Link>
                        </div>
                    </div>
                    <hr/>
                    {
                        cart.map((cartitem) => (
                            <div>
                                <div key = {cartitem.id} className="d-flex align-items-center gap-3">
                                    <div className="bottom-product-img">
                                        <a href="product-details.html">
                                            <img src={cartitem.location} width="60" alt=""/>
                                        </a>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-0 fw-light mb-1">Product Name</h6>
                                        <p className="mb-0"><strong>1 X $59.00</strong>
                                        </p>
                                    </div>
                                    <div className="ms-auto fs-5">
                                        <Link to="#" className="link-dark"><i className="bi bi-trash"></i></Link>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="offcanvas-footer p-3 border-top">
                <div className="d-grid">
                    <button type="button" className="btn btn-lg btn-dark btn-ecomm px-5 py-3">Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart