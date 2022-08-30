import React from 'react'
import SectionTItle from './common/SectionTItle'

function OfferService() {
  return (
    <div>
        <section className="product-thumb-slider section-padding">
        <div className="container">
            <SectionTItle/>
        <div className="row row-cols-1 row-cols-lg-4 g-4">
            <div className="col d-flex">
            <div className="card depth border-0 rounded-0 border-bottom border-primary border-3 w-100">
                <div className="card-body text-center">
                <div className="h1 fw-bold my-2 text-primary">
                    <i className="bi bi-truck"></i>
                </div>
                <h5 className="fw-bold">Free Delivery</h5>
                <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                </div>
            </div>
            </div>
            <div className="col d-flex">
            <div className="card depth border-0 rounded-0 border-bottom border-danger border-3 w-100">
                <div className="card-body text-center">
                <div className="h1 fw-bold my-2 text-danger">
                    <i className="bi bi-credit-card"></i>
                </div>
                <h5 className="fw-bold">Secure Payment</h5>
                <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                </div>
            </div>
            </div>
            <div className="col d-flex">
            <div className="card depth border-0 rounded-0 border-bottom border-success border-3 w-100">
                <div className="card-body text-center">
                <div className="h1 fw-bold my-2 text-success">
                    <i className="bi bi-minecart-loaded"></i>
                </div>
                <h5 className="fw-bold">Free Returns</h5>
                <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                </div>
            </div>
            </div>
            <div className="col d-flex">
            <div className="card depth border-0 rounded-0 border-bottom border-warning border-3 w-100">
                <div className="card-body text-center">
                <div className="h1 fw-bold my-2 text-warning">
                    <i className="bi bi-headset"></i>
                </div>
                <h5 className="fw-bold">24/7 Support</h5>
                <p className="mb-0">Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</p>
                </div>
            </div>
            </div>
        </div>
        여기까지 end row
        </div>
        </section>
    </div>
  )
}

export default OfferService