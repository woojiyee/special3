import React from 'react'
import SectionTItle from './common/SectionTItle'

function LatestBlog() {
  return (
    <div>
        <section className="section-padding">
        <div className="container">
            <SectionTItle/>
        <div className="blog-cards">
            <div className="row row-cols-1 row-cols-lg-3 g-4">
            <div className="col">
                <div className="card">
                <img src="assets/images/blog/01.webp" className="card-img-top rounded-0" alt="..."/>
                <div className="card-body">
                    <div className="d-flex align-items-center gap-4">
                    <div className="posted-by">
                        <p className="mb-0"><i className="bi bi-person me-2"></i>Virendra</p>
                    </div>
                    <div className="posted-date">
                        <p className="mb-0"><i className="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                    </div>
                    </div>
                    <h5 className="card-title fw-bold mt-3">Blog title here</h5>
                    <p className="mb-0">Some quick example text to build on the card title and make.</p>
                    <a href="blog-read.html" className="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="assets/images/blog/02.webp" className="card-img-top rounded-0" alt="..."/>
                <div className="card-body">
                    <div className="d-flex align-items-center gap-4">
                    <div className="posted-by">
                        <p className="mb-0"><i className="bi bi-person me-2"></i>Virendra</p>
                    </div>
                    <div className="posted-date">
                        <p className="mb-0"><i className="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                    </div>
                    </div>
                    <h5 className="card-title fw-bold mt-3">Blog title here</h5>
                    <p className="mb-0">Some quick example text to build on the card title and make.</p>
                    <a href="blog-read.html" className="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <img src="assets/images/blog/03.webp" className="card-img-top rounded-0" alt="..."/>
                <div className="card-body">
                    <div className="d-flex align-items-center gap-4">
                    <div className="posted-by">
                        <p className="mb-0"><i className="bi bi-person me-2"></i>Virendra</p>
                    </div>
                    <div className="posted-date">
                        <p className="mb-0"><i className="bi bi-calendar me-2"></i>15 Aug, 2022</p>
                    </div>
                    </div>
                    <h5 className="card-title fw-bold mt-3">Blog title here</h5>
                    <p className="mb-0">Some quick example text to build on the card title and make.</p>
                    <a href="blog-read.html" className="btn btn-outline-dark btn-ecomm mt-3">Read More</a>
                </div>
                </div>
            </div>

            </div>
            --여기까지 end row
        </div>
        </div>
        </section>
    </div>
  )
}

export default LatestBlog